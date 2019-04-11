import React, { Component } from 'react';

const createConnectedRouterContainer = (Routes, Options) => {
	class ConnectedRouterContainer extends Component {
		constructor(props) {
			super(props);
			this.state = {
				route: '',
				history: []
			};
			this.params = {};
			this.navigation = {
				switchRoute: (route, params) => {
					this.params = params;
					this.setState({
						route: route,
						history: [route]
					});
					return;
				},
				pushRoute: async (route, params) => {
					console.log('pushRoute');

					console.log('params', params);
					this.params = params;
					this.navigation.state.params = params;
					await this.setState({
						route: route,
						history: [...this.state.history, route]
					});

					return;
				},
				goBack: params => {
					if (this.state.history.length === 1) {
						console.error('Navigation: Stack Is Empty');
						return;
					}
					const backRoute = this.state.history[
						this.state.history.length - 2
					];
					const history = this.state.history;
					history.pop();
					this.params = params;
					this.setState({
						route: backRoute,
						history: history
					});
				},
				state: {
					route: this.state.route,
					params: this.params,
					history: this.state.history
				}
			};
		}

		componentWillMount() {
			this.setState({
				route: Options.initialRoute,
				history: [...this.state.history, Options.initialRoute],
				params: this.params
			});
		}

		render() {
			const ConnectedComponent = Routes[this.state.route];
			return (
				<ConnectedComponent
					{...this.props}
					navigation={this.navigation}
				/>
			);
		}
	}
	return ConnectedRouterContainer;
};

export default createConnectedRouterContainer;
