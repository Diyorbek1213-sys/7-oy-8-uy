import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom'
import Products from './Products';
import {
	useGetAllQuery,
	useSearchProductsMutation,
	useGetCategoriesQuery
} from '../lib/apiSlice/productsApi';
import useDebounce from '../hooks/useDebounce';
import Categories from './Categories';

const Home = () => {
	// const formSubmit = async e => {
	// 	e.preventDefault();
	// 	const formData = new FormData(e.target);
	// 	const title = formData.get('title');
	// 	const res = await addProduct({ title });
	// 	console.log(res);
	// };
	// <form className='flex justify-center gap-4 mb-10' onSubmit={formSubmit}>
	// 			<input
	// 				type='text'
	// 				className='border px-2 rounded'
	// 				placeholder='Title'
	// 				name='title'
	// 			/>
	// 			<button className='bg-black text-white rounded px-5 py-1.5'>Add</button>
	// 		</form>
	const [page, setPage] = useState(0);
	const { data: categories, error: cateError, isLoading: cateLoading } = useGetCategoriesQuery();
	const [pageS, setPageS] = useState(0);
	const [sortedProducts, setSortedProducts] = useState(null);
	const [search, setSearch] = useState('');
	const { data, isLoading, error } = useGetAllQuery(page * 10);
	const [total, setTotal] = useState(data ? Math.ceil(data.total / 10) : 0);
	const [searchHandler, { isLoading: isLoadingSearch }] =
		useSearchProductsMutation();
	const debouncedValue = useDebounce(search);
	console.log(categories)

	useEffect(() => {
		const getP = async () => {
			if (search.length > 0) {
				const res = await searchHandler({ q: search, pageS });
				console.log(pageS * 10);
				setSortedProducts(res.data.products);
				setTotal(Math.ceil(res.data.total / 10));
			} else {
				setSortedProducts(null);
				setTotal(data ? Math.ceil(data.total / 10) : 0);
			}
		};
		getP();
	}, [debouncedValue, pageS]);
	return (
		<div>
			<h1 className='py-10 text-5xl font-bold text-center'>Products</h1>
			<form
				onSubmit={e => e.preventDefault()}
				className='flex p-5 justify-center'
			>
				<input
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
					name='q'
					className='border w-full max-w-xl border-slate-300 focus:border-black outline-none rounded px-3 py-1.5'
					placeholder='Search...'
				/>
			</form>

			<Categories />

			<Products
				products={search.length > 0 ? sortedProducts : data?.products}
				isLoading={search.length > 0 ? isLoadingSearch : isLoading}
				error={error}
				page={search.length > 0 ? pageS : page}
				setPage={search.length > 0 ? setPageS : setPage}
				total={total}
			/>
		</div>
	);
};

export default Home;
