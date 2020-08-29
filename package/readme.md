You can either add states manually in the src/fixtures directory or you can use our chrome extension to do so.

## Chrome extension Usage
* Download the chrome extension
* Add middleware to your app as shown below after installing statebook

``` javaScript
import {saveStateMiddleware} from 'statebook';
const middleware = [thunk, saveStateMiddleware]
export const getStore = () => createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
)
``` 



## Usage
### Initialization
* `npm i statebook`
* `npx statebook-init`
* Update the hygen generator template in _templates/preview/new if you needed to
* Convert your store to a getStore method and export this method since it is used by statebook


``` javaScript
export const getStore = () => createStore(
  reducer,
  ...
)


render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

``` 



### Generating statebook stories from fixtures  
* Add your fixtures to '/src/fixtures' directory
* `npx statebook-generate-from-fixtures`


