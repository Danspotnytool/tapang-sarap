
import {
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';

import { useState } from 'react';

import Heading from './Heading';

import { components, colors } from '../styles/index.style';

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
	const [loading, setLoading] = useState(false);

	return (
		<TouchableOpacity
			style={{
				...components.button.container,
				...style?.container
			}}
			onPress={onPress ? async (...args) => {
				args[0].preventDefault();
				args[0].persist();
				setLoading(true);
				args[0].target.setNativeProps({ disabled: true });
				await onPress(...args);
				setLoading(false);
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
				{loading ? <ActivityIndicator color={colors.light} /> : null}
				{children}
			</Heading>
		</TouchableOpacity>
	);
};