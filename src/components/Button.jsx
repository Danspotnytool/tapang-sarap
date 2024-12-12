
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
			onPress={onPress ? async (...args) => {
				args[0].preventDefault();
				args[0].stopPropagation();
				args[0].persist();
				args[0].target.setNativeProps({ disabled: true });
				await onPress(...args);
				args[0].target.setNativeProps({ disabled: false });
			} : null}
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