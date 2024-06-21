import { motion } from 'framer-motion';

const animation = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -50 },
	transition: { duration: 0.4 },
};

const AnimatedPage = ({ children }) => {
	return (
		<motion.div
			variants={animation}
			initial="initial"
			animate="animate"
			exit="exit"
			transition="transition"
		>
			{children}
		</motion.div>
	);
};

export default AnimatedPage;
