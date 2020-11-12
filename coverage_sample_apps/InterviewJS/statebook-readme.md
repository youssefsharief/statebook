## Statebook Integration
* npm i @statebook/middleware
* npm i @statebook/scripts
* npx cypress open
* npx cy-init

``` javascript
(window as any).ST = store
```


``` javascript
const statebookMiddleware = require('@statebook/middleware')

statebookMiddleware.saveStateMiddleware
```


### Devtools
Make sure redux-devtools is working

``` javascript
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

### Generate tests and run cypress
* npx cy-multigen
* npm start
* Update port number in cypress.json if needed
* npx cypress open

Save fixtures


### Measure coverage
* npm i @cypress/code-coverage
* npm i babel-plugin-istanbul if it is not already their


* In plugins/index.js
``` javascript
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
```

* Use `react-app-rewired` and `customize-cra` to include babelrc with istanbul plugin

* In config-overrides 

``` javascript
const {override, useBabelRc} = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(config, override(
      useBabelRc()
      )(config, env)
  )
}
```

* Add bablerc 
``` json
{
  "env": {
    "development": {
      "plugins": [ "istanbul" ]
    }
  }
}
```
