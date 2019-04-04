import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const TabBar = ({ onSelect, styles, routeKeys }) => {
	const allStyles = {
		tabContainer: {
			...styles.tabContainer,
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignSelf: 'flex-end',
			backgroundColor: 'lightgrey'
		},
		tab: {
			...styles.tab,
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: 50,
			borderWidth: 1,
			borderColor: 'lightgrey'
		}
	};
	return (
		<SafeAreaView style={allStyles.tabContainer}>
			{routeKeys.map((each, i) => {
				const handleSelect = () => {
					console.log('clicked', i);
					onSelect(i);
				};
				return (
					<View style={allStyles.tab} onPress={handleSelect}>
						<Text onPress={handleSelect}>{each}</Text>
					</View>
				);
			})}
		</SafeAreaView>
	);
};

export default TabBar;
