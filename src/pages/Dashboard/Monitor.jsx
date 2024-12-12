
import { useState } from 'react';
import { View } from 'react-native';

import style from '../../styles/dashboard.style';

import Input from '../../components/Input';

export default Monitor = () => {
	const stage = useState('enter code');

	return (
		<View style={style.Monitor}>
			<Input
				placeholder='Enter Code'
			/>
		</View>
	);
};