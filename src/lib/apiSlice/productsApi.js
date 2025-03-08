import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
	reducerPath: 'productsapi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL || process?.env?.VITE_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	}),
	endpoints: build => ({
		getAll: build.query({
			query: skip => `products?limit=10&skip=${skip}`,
		}),
		getById: build.query({
			query: id => `products/${id}`,
		}),
		addProduct: build.mutation({
			query: data => ({
				method: 'POST',
				url: `/products/add`,
				body: JSON.stringify(data),
			}),
		}),
		searchProducts: build.mutation({
			query: data =>
				`/products/search/?q=${data.q}&limit=10&skip=${data.pageS}`,
		}),
	}),
});

export const {
	useGetAllQuery,
	useSearchProductsMutation,
	useGetByIdQuery,
	useAddProductMutation,
} = productsApi;
export default productsApi;
