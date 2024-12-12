import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
} = Dimensions.get('window');

/**
 * @type {(size: Number) => Number}
 */
const rem = (size) => {
	return (size * PixelRatio.getFontScale()) * 10;
};

/**
 * @type {Object.<string, String>}
 */
const colors = {
	primary: '#2C6333', // Hunter Green
	secondary: '#12222B', // Gunmetal
	light: '#E5E5E5', // Platinum
	accent: '#FFBF46' // Xanthous
};


/**
 * @type {(
* 		a: Number,
* 		b: Number,
* 		c: Number,
* 		d: Number
* ) => {
* 		paddingTop: Number,
* 		paddingRight: Number,
* 		paddingBottom: Number,
* 		paddingLeft: Number
* }}
*/
const padding = (
	a,
	b,
	c,
	d
) => {
	// If a is falsy but is not 0, set it to undefined
	a = a !== 0 && !a ? undefined : a;
	b = b !== 0 && !b ? undefined : b;
	c = c !== 0 && !c ? undefined : c;
	d = d !== 0 && !d ? undefined : d;
	// If all are undefined
	if (a === undefined && b === undefined && c === undefined && d === undefined) {
		return {
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0
		};
	};
	// If only a is filled
	if (a && b === undefined && c === undefined && d === undefined) {
		return {
			paddingTop: a,
			paddingRight: a,
			paddingBottom: a,
			paddingLeft: a
		};
	};
	// If only a and b is filled
	if (a && b && c === undefined && d === undefined) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: a,
			paddingLeft: b
		};
	};
	// If all are filled except for d
	if (a && b && c && d === undefined) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: c,
			paddingLeft: b
		};
	};
	// If all are filled
	return {
		paddingTop: a,
		paddingRight: b,
		paddingBottom: c,
		paddingLeft: d
	};
};

/**
 * @type {(
* 		a: Number,
* 		b: Number,
* 		c: Number,
* 		d: Number
* ) => {
* 		marginTop: Number,
* 		marginRight: Number,
* 		marginBottom: Number,
* 		marginLeft: Number
* }}
*/
const margin = (
	a,
	b,
	c,
	d
) => {
	// If a is falsy but is not 0, set it to undefined
	a = a !== 0 && !a ? undefined : a;
	b = b !== 0 && !b ? undefined : b;
	c = c !== 0 && !c ? undefined : c;
	d = d !== 0 && !d ? undefined : d;
	// If all are undefined
	if (a === undefined && b === undefined && c === undefined && d === undefined) {
		return {
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0
		};
	};
	// If only a is filled
	if (a && b === undefined && c === undefined && d === undefined) {
		return {
			marginTop: a,
			marginRight: a,
			marginBottom: a,
			marginLeft: a
		};
	};
	// If only a and b is filled
	if (a && b && c === undefined && d === undefined) {
		return {
			marginTop: a,
			marginRight: b,
			marginBottom: a,
			marginLeft: b
		};
	};
	// If all are filled except for d
	if (a && b && c && d === undefined) {
		return {
			marginTop: a,
			marginRight: b,
			marginBottom: c,
			marginLeft: b
		};
	};
	// If all are filled
	return {
		marginTop: a,
		marginRight: b,
		marginBottom: c,
		marginLeft: d
	};
};

/**
 * @type {Object.<string, Object.<string, String | Number> | String | Number >}
 */
const components = {
	input: StyleSheet.create({
		container: {
			width: '100%',
			borderBottomColor: colors.secondary,
			borderBottomWidth: rem(0.25),
		},
		input: {
			height: rem(6),
			width: '100%',
			padding: rem(1),
			textAlign: 'center',
			fontSize: rem(2),
			fontFamily: 'Lora_400Regular'
		}
	}),
	heading: StyleSheet.create({
		fontFamily: 'Lora_700Bold',
		verticalAlign: 'middle'
	}),
	button: StyleSheet.create({
		container: {
			width: '100%',
			height: rem(6),
			backgroundColor: colors.secondary,
			padding: rem(1),
			borderRadius: rem(1),
			justifyContent: 'center',
			alignItems: 'center'
		},
		heading: {
			textAlign: 'center',
			color: colors.light,
			width: '100%',
		}
	}),
	text: StyleSheet.create({
		fontFamily: 'Lora_400Regular',
		fontSize: rem(2),
		lineHeight: rem(2),
		textAlign: 'center'
	})
};

export {
	rem,
	padding,
	margin,
	colors,
	components
};