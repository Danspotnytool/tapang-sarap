
import { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import style from '../../styles/dashboard.style';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';

import { API_PATH } from '../../utils/networking';
import Heading from '../../components/Heading';

import { colors } from '../../styles/index.style';

export default Monitor = () => {
	const [stage, setStage] = useState('code');
	const [code, setCode] = useState('');
	const [monitorId, setMonitorId] = useState('');
	const [temperature, setTemperature] = useState(0);
	const [temperatureMode, setTemperatureMode] = useState('normal');
	const [data, setData] = useState([0]);

	useEffect(() => {
		if (stage === 'monitor') {
			const interval = setInterval(async () => {
				const response = await fetch(`${API_PATH}/monitors/${monitorId}`);
				if (!response.ok) {
					alert('Invalid monitor ID');
					setStage('code');
					return;
				};
				const dataJSON = await response.json();
				setTemperature(dataJSON.temperature);
				if (dataJSON.normal) {
					setTemperatureMode('normal');
				} else if (dataJSON.increasing) {
					setTemperatureMode('increasing');
				} else {
					setTemperatureMode('decreasing');
				};

				const history = [];
				for (let i = 0; i < dataJSON.history.length; i++) {
					console.log(dataJSON.history[i].temperature);
					history.push(dataJSON.history[i].temperature);
				};
				console.log(history);

				setData(history);

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
						<Text>{temperatureMode} temperature</Text>
						<LineChart
							data={{
								labels: Array.from({ length: data.length }, (_, i) => i.toString()),
								datasets: [
									{
										data: data
									}
								]
							}}
							width={Dimensions.get('window').width} // from react-native
							height={220}
							yAxisLabel='$'
							yAxisSuffix='k'
							yAxisInterval={1} // optional, defaults to 1
							chartConfig={{
								backgroundColor: colors.primary,
								backgroundGradientFrom: colors.primary,
								backgroundGradientTo: colors.primary,
								decimalPlaces: 2, // optional, defaults to 2dp
								color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								style: {
									borderRadius: 16
								},
								propsForDots: {
									r: '6',
									strokeWidth: '2',
									stroke: colors.secondary
								}
							}}
							bezier
							style={{
								borderRadius: 0
							}}
						/>
					</>
			}
		</View>
	);
};