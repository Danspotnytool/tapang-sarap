
import { useState } from 'react';
import { View, ScrollView } from 'react-native';

import style from '../../styles/dashboard.style';

import Heading from '../../components/Heading';
import Text from '../../components/Text';

export default Monitor = () => {

	return (
		<ScrollView>
			<View style={style.About}>
				<Heading>Daniel John Baynosa - Developer:</Heading>
				<Text style={{ text: { textAlign: 'left' } }}>As the developer on the team, I'm responsible for translating ideas into functional code and building the technical solutions that bring our projects to life. I focus on creating effective and user-friendly experiences by solving complex problems and implementing robust technical infrastructure.</Text>
				<Heading>Edna Sophia Fernandez - Project Manager:</Heading>
				<Text style={{ text: { textAlign: 'left' } }}>As Project Manager, I oversee the planning, execution, and delivery of our projects, ensuring they stay on track, within budget, and meet our objectives. I'm responsible for coordinating the team's efforts, fostering seamless collaboration, and ensuring successful completion from start to finish.</Text>
				<Heading>Marc Jan Banzal - Electronics Electrician:</Heading>
				<Text style={{ text: { textAlign: 'left' } }}>As the team's Electronics Electrician, I'm responsible for the practical application and functionality of our hardware components. I handle the design, installation, and maintenance of our electronic systems, ensuring everything is wired and working correctly to create reliable and effective solutions.</Text>
				<Heading>Jimwell Baniqued - User Insight Specialist:</Heading>
				<Text style={{ text: { textAlign: 'left' } }}>As the User Insight Specialist, I act as the voice of the user, conducting research to deeply understand their needs and behaviors. I advocate for these needs throughout the development process, ensuring our products are user-centered and provide a positive experience.</Text>
			</View>
		</ScrollView>
	);
};