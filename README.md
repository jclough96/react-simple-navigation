# React Simple Navigation

React Simple Navigation provides an easy to get started solution to navigation in react and react-native.

> Version: 0.2.1
> This is project is a work in progress and contributions/pull requests are welcome.

---

## Getting Started

To get started run `npm i react-simple-navigation`.

### Navigation

Navigation runs from a Component called a `Connected Router Component`.

```
// Create a component called AppContainer.js

import { createConnectedRouterContainer } from '../../SimpleRouter';

const Routes = {
	RouteOne: RouteOneComponent,
	RouteTwo: RouteTwoComponent
};

const Options = {
	initialRoute: 'RouteOne'
}

const AppContainer = createConnectedRouterContainer(Routes, Options);

export default AppContainer;
```

The Connected Router Component takes to arguments. The first is Routes, a list of components we use to form the navigator. The Key is the Route name and the Value is the relevant Component such as `{ RouteName: RouteComponent }`. The second is Options where we pass the initial route that we like to render.

In our App.js file add:

```
import React, { Component } from 'react';
import AppContainer from './src/Navigators/AppContainer';

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
```

That's it. Starting adding Route Names and Components to our Routes object and we've built our navigator.

### Controlling the navigator

But wait, how do we use the Connected Router Component to navigate through our apps?

Well, Connected Router Component passes navigation functions and parameters to props to the components directly underneath them.

`this.props.navigation` handles all navigation, including mix-ins.

`pushRoute` adds a route to the history array.

`switchRoute` starts a clean array with the route.

`state.history` shows the history array.

`state.route` shows the current route.

`goBack` returns to the previous route in the history array by removing the current route.

A second parameter is available to pass parameters to the next route on the navigation props object.

---

## Mix-ins

What is a mix-in?

A mix-in is simply a plugin to add different types of navigation controllers. They are called mix-ins as they are designed to be passed to Components before being added to the Routes object of `createConnectedRouterContainer`. This allows simplicity across the app but also the most customisabilty for everyone.

### Available Mix-ins

#### Version 0.2.0

TabNavigator:

The Tab Navigator mix-in is used in react-native to add a Tab Bar at the bottom of the view.

```
import { createTabNavigator } from 'react-simple-navigation';
import MainMenuComponent from './MainMenuComponent'
import MainMenuComponent2 from './MainMenuComponent2'

const TabBarNavigator = createTabNavigator({
	MainMenu: MainMenuComponent,
	MainMenu2: MainMenuComponent2
});

export default TabBarNavigator;
```

Here we create routes in a similar style to how we create a routes object using the `Connected Router Container`. This time however we use the `createTabNavigator` to produce a TabBarNavigator component.

To use this navigator in our app we must "mix-in" the component to our `Connected Router Container`. In the `AppContainer.js` file we modify the Routes object to look like this:

```

// Create a component called AppContainer.js

import { createConnectedRouterContainer } from '../../SimpleRouter';
import TabBarNavigator from './TabBarNavigator';

const Routes = {
...TabBarNavigator,
RouteOne: RouteOneComponent,
RouteTwo: RouteTwoComponent
};

const Options = {
initialRoute: 'MainMenu'
}

const AppContainer = createConnectedRouterContainer(Routes, Options);

export default AppContainer;

```

Here we have successfully mixed in our `TabBarNavigator` to our `Connected Router Container` and assigned the `initialRoute` in `Options` to a Component from the `TabBarNavigator`.

---

## In-development

There are a number of plans for the package in the future:

-   Better error handling
-   Additional Mix-ins
-   Community Mix-ins
-   Example Application
