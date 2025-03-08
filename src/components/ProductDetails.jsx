import { Link, useParams } from 'react-router-dom';
import { useGetByIdQuery } from '../lib/apiSlice/productsApi';

const ProductDetails = () => {
	const { id } = useParams();
	const { data: product, error, isLoading } = useGetByIdQuery(id);

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
		<div>
			{product && (
				<div className='flex py-10 items-center gap-5 container'>
					<div className='w-[400px] aspect-square flex-shrink-0'>
						<img
							className='w-full h-full object-contain'
							src={product.images[0]}
							alt={product.title}
						/>
					</div>
					<div>
						<h2 className='text-3xl font-semibold '>{product.title}</h2>
						<span className='inline-block my-3 rounded bg-slate-200 px-3 py-1.5 text-sm'>
							{product.category}
						</span>
						<p>{product.description}</p>
						<Link
							className='border px-5 py-2 mt-5 inline-block rounded hover:bg-black hover:text-white transition-all'
							to='/'
						>
							Go Back
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
