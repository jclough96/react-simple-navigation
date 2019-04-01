# React Simple Navigation

React-Simple-Navigation is designed to provide a simple interface for rendering components based on user determined variables.

> This project is a work in progress. All contributions are welcome and feature requests also.

### Design Goals

---

#### Simple

React-Simple-Navigation has it in the name. It is designed to be as simple as possible from the code base to integration and usage. With easy to use methods you can create a navigator which can handle route history, route switching, route pushing and 'go back' features.

#### Customisable

Thanks to the simplicity of the code base it is easy to build upon and add mix-ins to the code base for any use case.

### Future Plans

---

Future plans for the package include producing plugins (or mix-ins) to the code base, keeping the core as simple as possible and imporiving error handling/messaging.

## How to use

React Simple Navigation includes a `createConnectedRouterContainer` function. This function takes in Routes and Options as arguments.

`import { createConnectedRouterContainer } from 'react-simple-navigation'`

To use this container:

```
const Routes = {
	MainMenu: MenuComponent,
	Screen1: Screen1Component
};

const Options = {
	initialRoute: 'MainMenu'
};

const AppContainer = createConnectedRouterContainer(Routes, Options);

export default AppContainer;
```

Then place the AppContainer in the render block of App.js.

To use the navigation there are numerous properties available to you on `props.navigation`.

`switchRoute` clears the history and changes to the routes passed.
`pushRoute` adds a screen to the history and changes route.
`goBack` uses the history to go back to the previous screen.
`state` includes the current route name as `route`, `history`, and `params` which can be used to pass data to the routes being passed around.
