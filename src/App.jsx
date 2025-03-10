import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Filter from './components/Filter';

const App = () => {
	return (
		<div className='bg-[#f3f3f3] min-h-screen'>
			<Navbar />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<ProductDetails />} path='/product/:id' />
				<Route element={<Filter />} path='/filter/:category' />
			</Routes>
		</div>
	);
};

export default App;
