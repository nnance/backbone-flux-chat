# backbone-flux-chat
This is an example chat application created to show an example of how a Flux app is structured with (Backbone, React, Flux) and how you might use waitFor to make sure the Stores' registered callbacks are called in the correct order.  It is intended to show how application state can be managed with the Flux architecture for large scale applications.  

## The stack
If have specifically selected this stack to show an example of how an existing Backbone application could upgrade the view layer and the state management layer to improve maintainability.

* Backbone - The project uses the Backbone router, models and collections.  Backbone's models and collections are still excellent solutions to client side state management when syncing with server side rest apis.  Backbone's router is a tried and true client side router.

* React - I have used React as the view layer.  This is mostly to show the contrast between Backbone views and React and how much Backbone view management code can be removed when replacing it with React.

* Flux - The project depends on the Flux dispatcher for all state change.  This allows for state changes to be centrally managed and serialized.  

* Babel - Babel is used to allow all the code to be written in ES2015.  One aspect of this project is to show how Bacbone can be used in a modern stack and how it can be used with the latest versions of Javascript found in ES2015.

* Node - the server side of the application is also written in Javascript using node.  Though not a good example of production quality code it is a good example of how a rest application can be built.

## Installation
To run this project you must have Node version 5.0.0 or greater and npm installed.  To install the project dependencies run:
'
npm install
'

