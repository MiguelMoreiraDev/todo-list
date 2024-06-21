const Button = ({ children }) => {
	return (
		<button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded hover:text-zinc-400 hover:ring hover:ring-emerald-500 hover:duration-300 hover:transition-all focus:ring-2 focus:ring-emerald-500 focus:duration-300 focus:transition-all focus:bg-emerald-700 outline-none">
			{children}
		</button>
	);
};

export default Button;
