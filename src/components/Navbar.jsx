import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='shadow'>
			<div className='container flex justify-between py-3 items-center'>
				<Link className='flex gap-3 items-center font-bold text-xl' href='/'>
					<img className='rounded' src='https://picsum.photos/40' alt='logo' />
					LOGO
				</Link>
				<ul className='flex items-center gap-5'>
					<li>
						<Link className='hover:text-gray-400 transition-all' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='hover:text-gray-400 transition-all' to='/products'>
							Products
						</Link>
					</li>
					<li>
						<Link className='hover:text-gray-400 transition-all' to='/contact'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
