import React from 'react';

const Pagination = ({ total, page, setPage, isLoading }) => {
	if (total < 2) return;
	return (
		<div
			className={`flex pt-10 justify-center items-center gap-3 ${
				isLoading ? 'pointer-events-none opacity-40 select-none' : ''
			}`}
		>
			<button
				disabled={page < 1}
				onClick={() => setPage(page - 1)}
				className='border disabled:opacity-50 disabled:cursor-default border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
			>
				<i className='fa fa-chevron-left'></i>
			</button>
			{page > 0 && (
				<span
					onClick={() => setPage(0)}
					className='border border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
				>
					1
				</span>
			)}
			{page > 2 && <span>...</span>}
			{page > 3 && (
				<span
					onClick={() => setPage(page - 2)}
					className='border border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
				>
					{page - 1}
				</span>
			)}
			{page > 1 && (
				<span
					onClick={() => setPage(page - 1)}
					className='border border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
				>
					{page}
				</span>
			)}
			<span className='border bg-black text-white border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'>
				{page + 1}
			</span>
			{page < total - 2 && (
				<span
					onClick={() => setPage(page + 1)}
					className='border border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
				>
					{page + 2}
				</span>
			)}
			{page < total - 3 && (
				<span
					onClick={() => setPage(page + 2)}
					className='border border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
				>
					{page + 3}
				</span>
			)}
			{page < total - 2 && <span>...</span>}
			{page != total - 1 && (
				<span
					onClick={() => setPage(total - 1)}
					className='border border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
				>
					{total}
				</span>
			)}
			<button
				disabled={page == total - 1}
				onClick={() => setPage(page + 1)}
				className='border disabled:opacity-50 disabled:cursor-default border-slate-300 cursor-pointer rounded w-10 h-10 flex items-center justify-center'
			>
				<i className='fa fa-chevron-right'></i>
			</button>
		</div>
	);
};

export default Pagination;
