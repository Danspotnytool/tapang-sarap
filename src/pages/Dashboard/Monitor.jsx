
import { useState, useEffect } from 'react';
import { View } from 'react-native';

import style from '../../styles/dashboard.style';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';

import { API_PATH } from '../../utils/networking';
import Heading from '../../components/Heading';

export default Monitor = () => {
	const [stage, setStage] = useState('code');
	const [code, setCode] = useState('');
	const [monitorId, setMonitorId] = useState('');
	const [temperature, setTemperature] = useState(0);

	useEffect(() => {
		if (stage === 'monitor') {
			const interval = setInterval(async () => {
				const response = await fetch(`${API_PATH}/monitors/${monitorId}`);
				if (!response.ok) {
					alert('Invalid monitor ID');
					setStage('code');
					return;
				};
				const data = await response.json();
				setTemperature(data.temperature);
			}, 500);
			return () => clearInterval(interval);
		};
	}, [monitorId]);

	return (
		<View style={style.Monitor}>
			{
				stage === 'code' ?
					<>
						<Heading head='3'>
							Enter the code
						</Heading>
						<Input
							placeholder='Enter Code'
							onChange={(e) => setCode(e.nativeEvent.text)}
						/>
						<Button
							onPress={async () => {
								const response = await fetch(`${API_PATH}/monitors/code/${code}`);
								if (!response.ok) {
									alert('Invalid code');
									return;
								};
								const data = await response.json();
								setMonitorId(data.id);
								setStage('monitor');
							}}
						>
							Submit
						</Button>
						<Text>Enter the code displayed from your tapang-sarap-board.</Text>
					</> : <>
						<Heading head='3'>
							Monitoring
						</Heading>
						<Text>Monitor ID: {monitorId}</Text>
						<Text>Temperature:</Text>
						<Heading head='1'>{temperature}°C</Heading>
					</>
			}
		</View>
	);
};