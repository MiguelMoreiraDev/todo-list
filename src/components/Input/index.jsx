import React from 'react';
import Error from '../../helpers/Error';

const Input = ({ type, label, id, value, handleChange, error, onBlur }) => {
	return (
		<div className="flex flex-col">
			<label className="w-fit  text-zinc-400 text-lg mb-2" htmlFor={id}>
				{label}
			</label>
			<input
				className="text-zinc-100 outline-none p-2 bg-zinc-900 rounded border-b border-zinc-600 hover:ring-2 hover:ring-emerald-500 hover:duration-300 hover:transition-all focus:ring-2 focus:ring-emerald-500 focus:duration-300 focus:transition-all"
				type={type}
				id={id}
				value={value}
				onChange={handleChange}
				onBlur={onBlur}
			/>
			{error && <Error errors={error} />}
		</div>
	);
};

export default Input;
