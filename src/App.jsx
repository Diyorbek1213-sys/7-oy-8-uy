import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className='bg-[#f3f3f3] min-h-screen'>
			<Navbar />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<ProductDetails />} path='/product/:id' />
			</Routes>
		</div>
	);
};

export default App;
