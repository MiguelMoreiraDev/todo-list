import React from 'react';
import AnimatedPage from '../AnimatedPage';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	return (
		<AnimatedPage>
			<div className="flex justify-center">
				<form action="">
					<Link
						to={'criar'}
						className="text-zinc-100 font-semibold hover:text-emerald-500 hover:duration-300 hover:underline hover:underline-offset-4"
					>
						Cadastrar
					</Link>
				</form>
			</div>
		</AnimatedPage>
	);
};

export default LoginForm;
