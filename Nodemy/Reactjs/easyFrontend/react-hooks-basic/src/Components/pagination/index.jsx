import React from 'react'
import PropTypes from 'prop-types'

const Pagination = props => {
    const {pagination,onPageChange} = props;
    const{_page,_limit,_totalRows} = pagination;
    const totalPage = Math.ceil(_totalRows/_limit);
    const handlePageChange = (newPage) => {
        if(onPageChange){
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
            disabled={_page <= 1}
            onClick={handlePageChange.bind(this,_page - 1)}
            >
                prev
            </button>
            <button
            disabled={_page >= totalPage}
            onClick={handlePageChange.bind(this,_page + 1)}
            >
                next
            </button>
        </div>
    )
}

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default Pagination
