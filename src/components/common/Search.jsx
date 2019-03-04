import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { API_URL } from '../../config'
import { handleResponse } from '../../helpers'
import Loading from './Loading'

import './search.css'


class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchResults: [],
      searchQuery: '',
      loading: false
    }
  }

  renderSearchResults = () => {
    const { searchResults, searchQuery, loading } = this.state

    if (!searchQuery) return ''

    if (searchResults.length > 0) {
      return (
        <div className='Search-result-container'>
          {searchResults.map((result) => (
            <div
              key={result.id}
              className='Search-result'
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      )
    }

    if (!loading) {
      return (
        <div className='Search-result-container'>
          <div className='Search-no-result'>
            Not results found.
          </div>
        </div>
      )
    }
  }

  inputSearch = (e) => {
    const searchQuery = e.target.value
    this.setState({searchQuery})

    // evitamos consultas vacias
    if (!searchQuery) {
      return ''
    }

    this.setState({loading: true})

    fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
      .then(handleResponse)
      .then((result) => {
        this.setState({loading: false, searchResults: result})
      })
  }

  handleRedirect = (currencyId) => {
    // Clear input values and close autocomplete container,
    // by clearing searchQuery state 
    this.setState({searchQuery: '', searchResults: []})
    this.props.history.push(`/currency/${currencyId}`)
  }


  render () {
    const { loading, searchQuery } = this.state

    return (
      <div className='Search'>
        <span className='Search-icon' />
        <input
          type='text'
          className='Search-input'
          placeholder='Currency name'
          onChange={this.inputSearch}
          value={searchQuery}
        />

        {loading &&
          <div className='Search-loading'>
            <Loading width='12px' height='12px' />
          </div>
        }

        {this.renderSearchResults()}
      </div>
    )
  }
}

export default withRouter(Search)
