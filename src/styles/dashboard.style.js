
import { StyleSheet, Dimensions, StatusBar } from 'react-native';

import { colors, rem, padding } from './index.style';

const screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
};

const statusBarHeight = StatusBar.currentHeight;

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: rem(6),
		backgroundColor: colors.light
	},
	background: {
		position: 'absolute',
		width: screen.width + rem(12),
		height: screen.height + rem(12),
		top: -rem(6),
		left: -rem(6),
		opacity: 0.125
	},
	header: {
		width: '100%',
		height: rem(6) + statusBarHeight,
		gap: rem(2),
		paddingTop: statusBarHeight,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		borderBottomLeftRadius: rem(2),
		borderBottomRightRadius: rem(2),
		overflow: 'hidden'
	},

	navigation: {
		width: '100%',
		height: rem(8),
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		backgroundColor: colors.primary,
		borderTopLeftRadius: rem(2),
		borderTopRightRadius: rem(2),
		overflow: 'auto'
	},
	navigationButton: {
		width: rem(6),
		height: rem(6),
		justifyContent: 'center',
		alignItems: 'center'
	},
	navigationIcon: {
		position: 'relative',
		width: rem(6),
		height: rem(6),
		zIndex: 10
	},
	navigationHighlight: {
		position: 'absolute',
		width: rem(12),
		height: rem(12),
		bottom: -rem(2),
		backgroundColor: colors.secondary,
		borderRadius: rem(6),
		zIndex: 5
	}
});