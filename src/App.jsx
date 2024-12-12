import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';

const Stack = createNativeStackNavigator();

export default App = () => {
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