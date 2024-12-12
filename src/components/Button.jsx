
import {
	TouchableOpacity
} from 'react-native';

import Heading from './Heading';

import { components } from '../styles/index.style';

/**
 * @param {import('react-native').TouchableOpacityProps | {
 * 		children: React.ReactNode,
 * 		style: {
 * 			container: import('react-native').ViewStyle,
 * 			heading: import('react-native').TextStyle
 * 		},
 * 		onPress: (() => async) | ((event: GestureResponderEvent) => void) | undefined
 * }} props
 * @returns {React.ReactNode}
 */
export default Button = ({ children, onPress, style }) => {
	return (
		<TouchableOpacity
			style={{
				...components.button.container,
				...style?.container
			}}
			onPress={onPress}
		>
			<Heading
				head='4'
				style={{
					heading: {
						...components.button.heading,
						...style?.heading
					}
				}}
			>
				{children}
			</Heading>
		</TouchableOpacity>
	);
};