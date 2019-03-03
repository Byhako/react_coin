import React, { Component } from 'react'
import { API_URL } from '../../config'
import { handleResponse } from '../../helpers'
import Loading from './Loading'

import './search.css'


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: '',
      loading: false
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
        this.setState({loading: false})

        console.log(result)
      })
  }


  render () {
    const { loading } = this.state

    return (
      <div className='Search'>
        <span className="Search-icon" />
        <input
          type="text"
          className='Search-input'
          placeholder='Currency name'
          onChange={this.inputSearch}
        />

        {loading &&
          <div className="Search-loading">
            <Loading width='12px' height='12px' />
          </div>
        }
      </div>
    )
  }
}

export default Search
