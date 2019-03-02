import React from 'react'
import PropTypes from 'prop-types'
import './pagination.css'


const Pagination = (props) => {
  const { page, totalPages, handlePaginationClick } = props

  return (
    <div className="Pagination">
      <button 
        className="pagination-button"
        onClick={() => handlePaginationClick('prev')}
        disabled={page <=1}
      >
      &larr;</button>
      <span className="pagination-info">
        page <b>{page}</b> of <b>{totalPages}</b>
      </span>
      <button
        className="pagination-button"
        onClick={handlePaginationClick.bind(this, 'next')}
        disabled={page >= totalPages}
      >
      &rarr;</button>
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
}

export default Pagination