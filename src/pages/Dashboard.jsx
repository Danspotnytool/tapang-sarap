
import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import {
	View,
	Image,
	SafeAreaView,
} from 'react-native';

import Heading from '../components/Heading';

import BackgroundNoise from '../../assets/Noise.png';
import { colors, rem } from '../styles/index.style';

import style from '../styles/dashboard.style';

import MonitorIcon from '../../assets/Dashboard Icons/Monitor.png';
import AboutUsIcon from '../../assets/Dashboard Icons/About Us.png';
import SignOutIcon from '../../assets/Dashboard Icons/Sign Out.png';

export default Dashboard = (props) => {
	return (
		<SafeAreaView style={style.container}>
			<StatusBar style='auto' />
			<>
				<Image source={BackgroundNoise} style={style.background} />

				<View style={style.header}>
					<Image source={BackgroundNoise} style={style.background} />
					<Heading style={{ heading: { color: colors.light } }}>
						Dashboard
					</Heading>
				</View>
			</>


			<>
				<View style={{
					...style.navigationHighlight
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

					<View style={style.navigationButton}>
						<Image source={AboutUsIcon} style={style.navigationIcon} />
					</View>
					<View style={style.navigationButton}>
						<Image source={MonitorIcon} style={style.navigationIcon} />
					</View>
					<View style={style.navigationButton}>
						<Image source={SignOutIcon} style={style.navigationIcon} />
					</View>
				</View>
			</>
		</SafeAreaView>
	);
};