
import { StyleSheet } from 'react-native';

import { colors, rem } from './index.style';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: rem(40),
		backgroundColor: colors.primary
	},
	icon: {
		width: rem(20),
		height: rem(20),
		objectFit: 'contain'
	},
});