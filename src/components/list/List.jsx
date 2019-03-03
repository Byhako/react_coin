import React, { Component } from 'react'
import { API_URL } from '../../config'


import { handleResponse } from '../../helpers'
import Loading from '../common/Loading'
import Pagination from './Pagination'
import Table from './Table'


class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1
    }
  }

  componentDidMount () {
    this.fetchCurrencies()
  }

  // componentDidUpdate (prevPros, prevState) {
  //   if (prevState.page !== this.state.page) {
  //     this.fetchCurrencies()
  //   }
  // }

  fetchCurrencies = () => {
    this.setState({loading: true})

    const { page } = this.state

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(handleResponse)
      .then((data) => {
        const { currencies, totalPages } = data
        this.setState({currencies, totalPages, loading: false})
      })
      .catch((error) => {
        this.setState({error: error.errorMessage, loading: false})
      })
  }


  handlePaginationClick = (direction) => {
    let nextPage = this.state.page
    nextPage = direction === 'next' ? nextPage+1 : nextPage-1
    this.setState({page: nextPage}, () => {
      // callback
      this.fetchCurrencies()
    })
  }


  render () {
    const { loading, error, currencies, page, totalPages } = this.state

    // render only loading component
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    // render only error message, if error occurred while fetching data
    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <div>
      <Table
        currencies={currencies}
      />
      <Pagination 
        page={page}
        totalPages={totalPages}
        handlePaginationClick={this.handlePaginationClick}
      />
      </div>
    )
  }
}

export default List
