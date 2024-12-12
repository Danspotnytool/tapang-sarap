import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const rem = (size) => {
	const newSize = size * scale;
	if (Platform.OS === 'ios') {
		return (Math.round(PixelRatio.roundToNearestPixel(newSize)) * 10);
	} else {
		return (Math.round(PixelRatio.roundToNearestPixel(newSize)) * 10) - 2;
	};
};

const colors = {
	primary: '#2C6333', // Hunter Green
	secondary: '#12222B', // Gunmetal
	light: '#E5E5E5', // Platinum
	accent: '#FFBF46' // Xanthous
};

export {
	rem,
	colors
};