import React from 'react';

const Footer = () => {
	return (
		<p className=" text-center text-zinc-400 p-4">
			Projeto criado com ❤ por{' '}
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.instagram.com/miguelrkt__/"
				className="text-zinc-100 hover:text-emerald-500 duration-300"
			>
				@miguelrkt__
			</a>
		</p>
	);
};

export default Footer;
