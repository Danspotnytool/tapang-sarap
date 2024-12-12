
import {
	Text,
	View,
	TextInput
} from 'react-native';

import { components } from '../styles/index.style';

/**
 * @param {import('react-native').TextInputProps | {
 * 		placeholder: String,
 * 		disabled: Boolean,
 * 		type: String,
 * 		onPress: Function,
 * 		onChangeText: Function,
 * 		value: String,
 * 		style: {
 * 			container: import('react-native').ViewStyle,
 * 			input: import('react-native').TextStyle
 * 		},
 * 		secureTextEntry: Boolean
 * }} props
 * @returns {React.ReactNode}
 */
export default Input = ({ placeholder, disabled, type, onPress, onChangeText, value, style, secureTextEntry }) => {
	return (
		<View style={{
			...components.input.container,
			...style?.container
		}}>
			<TextInput
				placeholder={placeholder}
				disabled={disabled}
				type={type}
				onPress={onPress}
				onChangeText={onChangeText}
				value={value}
				style={{
					...components.input.input,
					...style?.input
				}}
				secureTextEntry={secureTextEntry ?? type === 'password'}
			/>
		</View>
	);
};