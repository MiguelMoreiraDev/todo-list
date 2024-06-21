import React from 'react';
import AnimatedPage from './../AnimatedPage/index';
import TaskImg from '../../assets/Task.svg?react';

const Home = () => {
	return (
		<AnimatedPage>
			<div className="flex flex-col w-full items-center justify-center">
				<TaskImg className="max-w-96 mb-9" />
				<h1
					className=" flex items-center flex-col min-[340px]:items-start
				text-4xl mb-2 font-bold uppercase text-emerald-500 before:contents-[''] before:mr-2 before:block before:h-1 before:w-24 before:bg-emerald-500 lg:text-6xl text-center 
				"
				>
					Lista de Tarefas
				</h1>
				<p className="text-zinc-300 text-lg lg:text-xl">
					Entre em sua conta para acessar sua lista de tarefas
				</p>
			</div>
		</AnimatedPage>
	);
};

export default Home;
