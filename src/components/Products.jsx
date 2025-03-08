import React, { useState } from 'react';
import ProductsCard from './ProductsCard';
import { useGetAllQuery } from '../lib/apiSlice/productsApi';
import Pagination from './Pagination';

const Products = ({ products, isLoading, error, total, page, setPage }) => {
	if (error) {
		return (
			<div className='text-center text-3xl opacity-75 py-10'>
				<i className='fa fa-times'></i> Something went wrong :{'('}
			</div>
		);
	}
	if (isLoading) {
		return (
			<div className='text-center text-3xl opacity-75 py-10'>
				<i className='fa fa-circle-notch fa-spin'></i>
			</div>
		);
	}
	return (
		<div className='pb-10'>
			{products && products.length > 0 ? (
				<div className='container grid grid-cols-4 gap-5'>
					{products.map(p => (
						<ProductsCard product={p} key={p.id} />
					))}
				</div>
			) : (
				<div className='text-center py-10 opacity-75 text-2xl'>Empty</div>
			)}
			<Pagination
				isLoading={isLoading}
				page={page}
				setPage={setPage}
				total={total}
			/>
		</div>
	);
};

export default Products;
