
import { StyleSheet, Dimensions } from 'react-native';

import { colors, rem, padding } from './index.style';

const screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
};

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: rem(6),
		...padding(rem(2)),
		backgroundColor: colors.primary
	},
	background: {
		position: 'absolute',
		width: screen.width + rem(12),
		height: screen.height + rem(12),
		top: -rem(6),
		left: -rem(6),
		opacity: 0.125
	},
	icon: {
		width: rem(24),
		height: rem(24),
		objectFit: 'contain'
	},
	form: {
		width: '100%',
		backgroundColor: colors.light,
		gap: rem(4),
		borderRadius: rem(2),
		...padding(rem(2))
	}
});