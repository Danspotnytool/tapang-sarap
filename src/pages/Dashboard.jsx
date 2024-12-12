
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useRef, useEffect } from 'react';

import {
	View,
	Image,
	SafeAreaView,
	Animated,
	Dimensions,
	Button,
	TouchableNativeFeedback
} from 'react-native';

import Heading from '../components/Heading';

import BackgroundNoise from '../../assets/Noise.png';
import { colors, rem } from '../styles/index.style';

import style from '../styles/dashboard.style';

import MonitorIcon from '../../assets/Dashboard Icons/Monitor.png';
import AboutUsIcon from '../../assets/Dashboard Icons/About Us.png';
import SignOutIcon from '../../assets/Dashboard Icons/Sign Out.png';

const Tab = createBottomTabNavigator();

const screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
};

import Monitor from './Dashboard/Monitor';
import About from './Dashboard/About';

export default Dashboard = (props) => {
	const [tab, setTab] = useState('monitor');
	const monitorRef = useRef();
	const aboutUsRef = useRef();

	const highlightLeft = useRef(new Animated.Value((screen.width / 2 - rem(6)))).current;

	useEffect(() => {
		Animated.timing(highlightLeft, {
			toValue: tab === 'monitor' ? (screen.width / 2 - rem(6)) : (screen.width / 2 - rem(6) * 3),
			duration: 250,
			useNativeDriver: false
		}).start();
	}, [tab]);

	return (
		<SafeAreaView style={style.container}>
			<StatusBar style='auto' />
			<>
				<Image source={BackgroundNoise} style={style.background} />

				<View style={style.header}>
					<Image source={BackgroundNoise} style={style.background} />
					<Heading style={{ heading: { color: colors.light } }}>
						{
							tab === 'monitor' ? 'Monitor' :
								tab === 'about us' ? 'About Us' :
									'Sign Out'
						}
					</Heading>
				</View>
			</>

			<View
				style={style.tab}
			>
				<Tab.Navigator
					screenOptions={{
						tabBarStyle: {
							backgroundColor: 'transparent'
						},
						sceneStyle: {
							backgroundColor: 'transparent'
						}
					}}
					tabBar={(props) => {
						return (
							<View style={{ display: 'none' }}>
								<Button
									title='About Us'
									ref={aboutUsRef}
									onPress={() => {
										props.navigation.navigate('About Us');
										try {
											setTab('about us');
										} catch (e) { };
									}}
								/>
								<Button
									title='Monitor'
									ref={monitorRef}
									onPress={() => {
										props.navigation.navigate('Monitor');
										try {
											setTab('monitor');
										} catch (e) { };
									}}
								/>
							</View>
						);
					}}
				>
					<Tab.Screen
						name='Monitor'
						component={() => <Monitor />}
						options={{
							headerShown: false,
							animation: 'shift'
						}}
					/>
					<Tab.Screen
						name='About Us'
						component={() => <About />}
						options={{
							headerShown: false,
							animation: 'shift'
						}}
					/>
					<Tab.Screen
						name='Sign Out'
						component={() => <Heading>sign out</Heading>}
						options={{
							headerShown: false,
							animation: 'shift'
						}}
					/>
				</Tab.Navigator>
			</View>

			<>
				<Animated.View style={{
					...style.navigationHighlight,
					left: highlightLeft
				}} />
				<View style={style.navigation}>
					<Image source={BackgroundNoise} style={{
						...style.background,
						width: '100%',
						top: 0,
						left: 0,
						borderTopLeftRadius: rem(2),
						borderTopRightRadius: rem(2)
					}} />

					<View
						style={style.navigationButton}
					>
						<TouchableNativeFeedback
							onPress={() => {
								aboutUsRef.current.props.onPress();
							}}
						>
							<Image source={AboutUsIcon} style={style.navigationIcon} />
						</TouchableNativeFeedback>
					</View>
					<View
						style={style.navigationButton}
					>
						<TouchableNativeFeedback
							onPress={() => {
								monitorRef.current.props.onPress();
							}}
						>
							<Image source={MonitorIcon} style={style.navigationIcon} />
						</TouchableNativeFeedback>
					</View>
					<View
						style={style.navigationButton}
					>
						<TouchableNativeFeedback
							onPress={() => {
								props.navigation.navigate('Sign');
							}}
						>
							<Image source={SignOutIcon} style={style.navigationIcon} />
						</TouchableNativeFeedback>
					</View>
				</View>
			</>
		</SafeAreaView>
	);
};