import React from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Utility/Pagination'
const AllCategoryPage = () => {
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer/>
            <Pagination/>
        </div>
    )
}

export default AllCategoryPage
