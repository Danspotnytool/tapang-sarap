
import icon from '../../assets/splash-icon.png';

import { StatusBar } from 'expo-status-bar';

import {
	View,
	Image,
	SafeAreaView
} from 'react-native';

import Input from '../components/Input';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Text from '../components/Text';

import style from '../styles/signIn.style';

import BackgroundNoise from '../../assets/Noise.png';
import { colors } from '../styles/index.style';

export default SignIn = () => {
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
				/>

				<Input
					placeholder='Password'
					type='password'
				/>

				<Button>
					Sign In
				</Button>
			</View>

			<Text
				style={{ text: { color: colors.light } }}
			>
				Don't have an account? <Text style={{ text: { color: colors.accent } }}>Sign Up</Text>
			</Text>
		</SafeAreaView>
	);
};