import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByCategoryQuery } from '../lib/apiSlice/productsApi'
import Products from './Products'

const Filter = () => {
    const { category } = useParams()
    const { data, error, isLoading } = useGetProductByCategoryQuery(category)
    const [page, setPage] = useState(0)
    const total = data ? Math.ceil(data.total / 10) : 0

    return <div>
        <h1>Sorted Products</h1>
        <Products error={error} isLoading={isLoading} products={data?.products} page={page} setPage={setPage} total={total} />
    </div>
}

export default Filter