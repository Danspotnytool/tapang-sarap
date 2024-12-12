
import { colors } from '../styles/index.style';

import icon from '../../assets/splash-icon.png';

import { StatusBar } from 'expo-status-bar';

import {
	Text,
	View,
	Image,
	SafeAreaView
} from 'react-native';

import style from '../styles/signIn.style';

export default SignIn = () => {
	return (
		<SafeAreaView
			style={style.container}
		>
			<StatusBar style='auto' />
			<Image source={icon} style={style.icon} />
		</SafeAreaView>
	);
};