import React from 'react';
import AnimatedPage from '../AnimatedPage';

const Pagina404 = () => {
	return (
		<AnimatedPage>
			<div className="flex flex-col items-center justify-center pt-10 gap-4">
				<h1 className="text-9xl text-emerald-500">404</h1>
				<p className="text-zinc-300 text-2xl">Página não encontrada</p>
			</div>
		</AnimatedPage>
	);
};

export default Pagina404;
