import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TabBar from './TabBar';

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		width: '100%'
	}
});

const createTabNavigator = (Routes, Options, TabStyles) => {
	let Routes_ = {};
	const keys = Object.keys(Routes);
	keys.map((EachComponent, i) => {
		class TabNavigator extends Component {
			constructor(props) {
				super(props);
				this.state = {};
			}

			render() {
				// const Navigator = !CustomNavigator ? TabBar : CustomNavigator;
				const ComponentToRender = Routes[keys[i]];
				// console.log(ComponentToRender);
				console.log(this.props);
				return (
					<View style={styles.rootContainer}>
						<ComponentToRender {...this.props} />
						<TabBar
							onSelect={i => {
								console.log('Switching to ', Routes[keys[i]]);
								this.props.navigation.switchRoute(keys[i]);
							}}
							styles={
								!TabStyles
									? { tabContainer: {}, tab: {} }
									: TabStyles
							}
							routeKeys={keys}
						/>
					</View>
				);
			}
		}
		Routes_ = {
			...Routes_,
			[keys[i]]: TabNavigator
		};
	});
	return Routes_;
};

export default createTabNavigator;
