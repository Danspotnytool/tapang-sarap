
import {
	Text
} from 'react-native';

import { rem, components } from '../styles/index.style';

/**
 * @param {import('react-native').TextProps | {
 * 		children: React.ReactNode,
 * 		style: {
 * 			text: import('react-native').TextStyle
 * 		}
 * }} props
 * @returns {React.ReactNode}
 */
export default TextComponent = ({ children, style }) => {
	return (
		<Text style={{
			...components.text,
			...style?.text
		}}>
			{children}
		</Text>
	);
};