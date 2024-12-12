import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';

import React, { useState, useEffect } from 'react';

import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Lora_400Regular,
	Lora_500Medium,
	Lora_600SemiBold,
	Lora_700Bold,
	Lora_400Regular_Italic,
	Lora_500Medium_Italic,
	Lora_600SemiBold_Italic,
	Lora_700Bold_Italic
} from '@expo-google-fonts/lora';

import BackgroundNoise from '../assets/Noise.png';

const Stack = createNativeStackNavigator();

export default App = () => {
	const [fontsLoaded] = useFonts({
		Lora_400Regular,
		Lora_500Medium,
		Lora_600SemiBold,
		Lora_700Bold,
		Lora_400Regular_Italic,
		Lora_500Medium_Italic,
		Lora_600SemiBold_Italic,
		Lora_700Bold_Italic
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	};

	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Sign In'
						component={SignIn}

						options={{
							headerShown: false
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};