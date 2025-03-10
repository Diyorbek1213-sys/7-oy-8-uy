import React from 'react'
import { useGetCategoriesQuery } from '../lib/apiSlice/productsApi'
import { Link } from 'react-router-dom'

const Categories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery()

  return (
    <div className='flex gap-4 overflow-scroll mb-7'>
      {
        data && data.length > 0 && data.map((item, index) => {
          return <Link to={`/filter/${item}`} className='p-2 rounded-md cursor-pointer bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200' key={index}>{item}</Link>
        })
      }
    </div>
  )
}

export default Categories