import AnimatedPage from './../AnimatedPage/index';
import { SquareUserRound } from 'lucide-react';
import Input from './../../components/Input/index';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';

const LoginCriar = () => {
	const nome = useForm();
	const email = useForm('email');
	const password = useForm();

	return (
		<AnimatedPage>
			<div>
				<form className="flex flex-col  w-full max-w-lg  mx-auto bg-zinc-900 p-6 rounded-xl">
					<SquareUserRound className="text-emerald-500 mx-auto size-16" />
					<h1 className="text-zinc-400 text-3xl font-bold text-center my-5">
						Criar
					</h1>
					<div className="flex flex-col gap-4 mb-10">
						<Input label={'Nome'} type={'nome'} id={'nome'} {...nome} />
						<Input
							label={'Email'}
							type={'email'}
							id={'email'}
							{...email}
						/>
						<Input
							label={'Senha'}
							type={'password'}
							id={'password'}
							{...password}
						/>
					</div>
					<Button>Cadastrar</Button>
				</form>
			</div>
		</AnimatedPage>
	);
};

export default LoginCriar;
