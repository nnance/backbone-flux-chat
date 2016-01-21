# backbone-flux-chat
This is a chat application created to show an example of how a Flux app is structured with (Backbone, React, Flux) and how you would make use of the Flux dispatcher waitFor to make sure the Stores' are called in the correct order.  

This should help to illustrate how application state can be managed with the Flux architecture for large scale applications.

Once you have the application running you can connect from many different browsers and carry on a conversation.  Your chat history will be maintained throughout the life of the server.  However, chat history isn't persisted to minimize dependencies and setup of the server.

## The stack
I have specifically selected this stack to show an example of how an existing Backbone application could upgrade the view and the state management layers to improve application maintainability.

* Backbone - The project uses the Backbone router, models and collections.  Backbone's models and collections are still excellent solutions to client side state management when syncing with server side rest APIs.  Backbone's router is a tried and true client side router.

* React - I have used React as the view layer.  This is mostly to show the contrast between Backbone views and React and how much Backbone view management code can be removed when replacing it with React.

* Flux - The project depends on the Flux dispatcher for all state change.  This allows for state changes to be centrally managed and serialized.  

* Node - the server side of the application is also written in Javascript using node.  Though not a good example of production quality code it is a good example of how a rest application can be built.

* Socket.io - Used by the client and server to broadcast and receive notifications like new chat messages and new users.

* Babel - Babel is used to allow all the code to be written in ES2015.  One aspect of this project is to show how Backbone can be used in a modern stack and how it can be used with the latest versions of Javascript found in ES2015.

* WebPack - WebPack is used to transpile and minify the Javascript.  This project use the react hot loader to hot reload code changes to React components into the browser without requiring a refresh.

## Running
To run this project you must have Node version 5.0.0 or greater and npm installed.  To install the project dependencies run:
```
npm install
```

To build the project run:
```
npm run build
```

To run the development server run:
```
npm start
```

## Project structure
The majority of the interesting code in project is in the src directory.  Below is a description of the responsibility of the code modules found in each directory:

* actions - These are the Flux action creators that trigger state changes by being dispatched when actions occur in the application or on the server.

* components - These are all the React components used to create the visual aspects of the application.  The modules that have container in the name are the smart components that listen to change to trigger a render of the child components.

* lib - Utility classes to more easily integrate Backbone with React.

* stores - These are each singletons the manage state for each domain of the application.  They also manage the Backbone models and collections they need to synchronize state with the server.

## Getting Started
The entry point of the client application is in src/index.js where you will find the application initialization code where the following setup happens:
* The application initializes the stores by syncing with the server
* The connection to socket.io is made and the listeners are established
* The application container (heaer, footer and body) are rendered.

The src/router.js is the Backbone router where you will find:
* The route configuration
* How each of the main sections of the application is rendered.  

This should lead you to the rest of components of the system.
