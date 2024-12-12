
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

export default SignIn = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
				Sign In
			</Heading>

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

				<Button>
					Sign In
				</Button>
			</View>

			<Text
				style={{ text: { color: colors.light } }}
				onPress={() => props.navigation.navigate('Sign Up')}
			>
				Don't have an account? <Text style={{ text: { color: colors.accent } }}>Sign Up</Text>
			</Text>
		</SafeAreaView>
	);
};