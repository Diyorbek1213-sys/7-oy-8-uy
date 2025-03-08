import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './slices/productSlice';
import productsApi from './apiSlice/productsApi';

const store = configureStore({
	reducer: {
		products: ProductsSlice,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
