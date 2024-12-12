
import {
	Text
} from 'react-native';

import { rem, components } from '../styles/index.style';

/**
 * @param {import('react-native').TextProps | {
 * 		head: '1' | '2' | '3' | '4' | '5' | '6',
 * 		onPress: (() => async) | ((event: GestureResponderEvent) => void) | undefined,
 * 		children: React.ReactNode,
 * 		style: {
 * 			heading: import('react-native').TextStyle
 * 		}
 * }} props
 * @returns {React.ReactNode}
 */
export default Heading = ({ head, onPress, children, style }) => {
	return (
		<Text
			style={{
				fontSize: head === '1' ? rem(6)
					: head === '2' ? rem(5)
						: head === '3' ? rem(4)
							: head === '4' ? rem(3)
								: head === '5' ? rem(2)
									: head === '6' ? rem(1)
										: rem(4),
				lineHeight: head === '1' ? rem(6)
					: head === '2' ? rem(5)
						: head === '3' ? rem(4)
							: head === '4' ? rem(3)
								: head === '5' ? rem(2)
									: head === '6' ? rem(1)
										: rem(4),
				...components.heading,
				...style?.heading
			}}
			onPress={onPress}
		>
			{children}
		</Text>
	);
};