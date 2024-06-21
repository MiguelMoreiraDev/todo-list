import React from 'react';
import { ListTodo } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
	const animations = {
		whileTap: { scale: 0.8 },
	};

	return (
		<div className="w-full container mx-auto p-6">
			<header className="flex justify-between">
				<Link to={'/'}>
					<motion.div whileTap={animations.whileTap}>
						<ListTodo className="size-6 text-zinc-100 hover:text-emerald-500 hover:duration-300" />
					</motion.div>
				</Link>
				<Link
					className="text-zinc-100 font-semibold hover:text-emerald-500 hover:duration-300 hover:underline hover:underline-offset-4"
					to={'login'}
				>
					<motion.div whileTap={animations.whileTap}>Entrar</motion.div>
				</Link>
			</header>
		</div>
	);
};

export default Header;
