
import { useState } from 'react';

import {
	View
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import style from '../../styles/sign.style';

import { API_PATH } from '../../utils/networking';

export default SignIn = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const signIn = async () => {
		console.log('Signing in...');
		const response = await fetch(`${API_PATH}/users/sign/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				emailOrUsername: username,
				password
			})
		});

		if (!response.ok) {
			const error = await response.json();
			alert(error.message);
			return;
		};

		props.onSuccess && props.onSuccess();
	};

	return (
		<View style={style.form}>
			<Input
				placeholder='Username'
				type='text'
				onChange={(e) => setUsername(e.nativeEvent.text)}
			/>

			<Input
				placeholder='Password'
				type='password'
				onChange={(e) => setPassword(e.nativeEvent.text)}
			/>

			<Button onPress={signIn}>
				Sign In
			</Button>
		</View>
	);
};