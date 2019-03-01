import React, { Component } from 'react'
import { handleResponse } from '../../helpers'
import { API_URL } from '../../config'
import Loading from '../common/Loading'
import Table from './Table'

class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      currencies: [],
      error: null
    }
  }

  componentDidMount () {
    this.setState({loading: true})
    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
      .then(handleResponse)
      .then((data) => {
        this.setState({currencies: data.currencies, loading: false})
      })
      .catch((error) => {
        this.setState({error: error.errorMessage, loading: false})
      })
  }

  renderChangePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
      return <span>{percent}</span>
    }
  }

  render () {
    const { loading, error, currencies } = this.state

    // render only loading component
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    // render only error message, if error occurred while fetching data
    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <Table
        renderChangePercent={this.renderChangePercent}
        currencies={currencies}
      />
    )
  }
}

export default List
