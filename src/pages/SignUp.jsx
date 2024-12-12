
import icon from '../../assets/splash-icon.png';

import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import {
	View,
	Image,
	SafeAreaView
} from 'react-native';

import Input from '../components/Input';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Text from '../components/Text';

import style from '../styles/sign.style';

import BackgroundNoise from '../../assets/Noise.png';
import { colors } from '../styles/index.style';

import { API_PATH } from '../utils/networking';

export default SignUp = (props) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signUp = async () => {
		console.log('Signing up...');
		const response = await fetch(`${API_PATH}/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				email,
				password
			})
		});

		if (!response.ok) {
			const error = await response.json();
			alert(error.message);
			return;
		};

		props.navigation.navigate('Sign In');
	};

	return (
		<SafeAreaView
			style={style.container}
		>
			<StatusBar style='auto' />

			<Image source={BackgroundNoise} style={style.background} />

			<Image source={icon} style={style.icon} />

			<Heading
				style={{
					heading: {
						color: colors.light,
						textAlign: 'center'
					}
				}}
			>
				Sign Up
			</Heading>

			<View style={style.form}>
				<Input
					placeholder='Username'
					type='text'
					onChange={(e) => setUsername(e.nativeEvent.text)}
				/>

				<Input
					placeholder='Email'
					type='email'
					onChange={(e) => setEmail(e.nativeEvent.text)}
				/>

				<Input
					placeholder='Password'
					type='password'
					onChange={(e) => setPassword(e.nativeEvent.text)}
				/>

				<Button onPress={signUp}>
					Sign Up
				</Button>
			</View>

			<Text
				style={{ text: { color: colors.light } }}
				onPress={() => props.navigation.navigate('Sign In')}
			>
				Don't have an account? <Text style={{ text: { color: colors.accent } }}>Sign Up</Text>
			</Text>
		</SafeAreaView>
	);
};