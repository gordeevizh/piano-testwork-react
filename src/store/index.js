import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers';


export default function configureStore(initialState) {
  const store = createStore(
    searchReducer,
    initialState,
    applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}