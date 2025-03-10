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
		getCategories: build.query({
			query: () => 'https://dummyjson.com/products/category-list'
		}),
		getProductByCategory: build.query({
			query: (category) => `/products/category/${category}/?limit=10`
		})
	}),
});

export const {
	useGetAllQuery,
	useGetProductByCategoryQuery,
	useSearchProductsMutation,
	useGetByIdQuery,
	useAddProductMutation,
	useGetCategoriesQuery
} = productsApi;
export default productsApi;
