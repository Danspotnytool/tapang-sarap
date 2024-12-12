
import {
	Text as RN_Text
} from 'react-native';

import { rem, components } from '../styles/index.style';

/**
 * @param {import('react-native').TextProps | {
 * 		children: React.ReactNode,
 * 		style: {
 * 			text: import('react-native').TextStyle
 * 		},
 * 		onPress: (() => async) | ((event: GestureResponderEvent) => void) | undefined
 * }} props
 * @returns {React.ReactNode}
 */
export default Text = ({ children, style, onPress }) => {
	return (
		<RN_Text
			style={{
			...components.text,
			...style?.text
			}}
			onPress={onPress}
		>
			{children}
		</RN_Text>
	);
};