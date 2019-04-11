import React, { Component } from 'react';

const createConnectedRouterContainer = (Routes, Options) => {
	class ConnectedRouterContainer extends Component {
		constructor(props) {
			super(props);
			this.state = {
				route: '',
				params: {},
				history: []
			};
			this.navigation = {
				switchRoute: (route, params) => {
					this.setState({
						route: route,
						history: [route],
						params
					});
					return;
				},
				pushRoute: (route, params) => {
					console.log('pushRoute');
					this.setState({
						route: route,
						history: [...this.state.history, route],
						params
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
					this.setState({
						route: backRoute,
						history: history,
						params
					});
				},
				state: {
					route: this.state.route,
					params: this.state.params,
					history: this.state.history
				}
			};
		}

		componentWillMount() {
			this.setState({
				route: Options.initialRoute,
				history: [...this.state.history, Options.initialRoute]
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
