import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useRef, useEffect } from 'react';
import {
	View,
	Image,
	SafeAreaView,
	Button,
	Animated
} from 'react-native';
import Heading from '../components/Heading';
import Text from '../components/Text';
import style from '../styles/sign.style';
import { colors, rem } from '../styles/index.style';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
import BackgroundNoise from '../../assets/Noise.png';
import icon from '../../assets/splash-icon.png';

const Tab = createBottomTabNavigator();

export default Sign = (props) => {
	const [mode, setMode] = useState('sign in');
	const signIn = useRef();
	const signUp = useRef();

	const tabHeight = useRef(new Animated.Value(rem(26))).current;

	const navigateToSignIn = () => {
		setMode('sign in');
	};
	const navigateToSignUp = () => {
		setMode('sign up');
	};

	useEffect(() => {
		Animated.timing(tabHeight, {
			toValue: mode === 'sign in' ? rem(26) + rem(1) : rem(35) + rem(1),
			duration: 250,
			useNativeDriver: false
		}).start();
	}, [mode]);

	const successSignIn = () => {
		props.navigation.navigate('Dashboard');
	};
	const successSignUp = () => {
		signIn.current.props.onPress();
	};

	return (
		<SafeAreaView style={style.container}>
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
				{mode === 'sign in' ? 'Sign In' : 'Sign Up'}
			</Heading>
			<Animated.View style={{ ...style.tab, height: tabHeight }}>
				<Tab.Navigator
					screenOptions={{
						tabBarStyle: {
							backgroundColor: 'transparent'
						}
					}}
					tabBar={(props) => {
						return (
							<View style={{ display: 'none' }}>
								{
									mode === 'sign up' ?
										<Button
											title='Sign In'
											ref={signIn}
											onPress={() => {
												navigateToSignIn();
												props.navigation.navigate('Sign In');
											}}
										/> :
										<Button
											title='Sign Up'
											ref={signUp}
											onPress={() => {
												navigateToSignUp();
												props.navigation.navigate('Sign Up');
											}}
										/>
								}
							</View>
						);
					}}
				>
					<Tab.Screen
						name='Sign In'
						component={(props) => <SignIn {...props} onSuccess={successSignIn} />}
						options={{
							headerShown: false,
							animation: 'shift'
						}}
					/>
					<Tab.Screen
						name='Sign Up'
						component={(props) => <SignUp {...props} onSuccess={successSignUp} />}
						options={{
							headerShown: false,
							animation: 'shift'
						}}
					/>
				</Tab.Navigator>
			</Animated.View>

			<Text
				style={{
					text: {
						color: colors.light
					}
				}}
				onPress={() => {
					if (mode === 'sign in') {
						signUp.current.props.onPress();
					} else {
						signIn.current.props.onPress();
					};
				}}
			>
				{mode === 'sign in' ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
			</Text>
		</SafeAreaView>
	);
};
