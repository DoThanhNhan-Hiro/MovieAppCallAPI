import React from 'react';
import HomeStackNavigator from './src/navigations/Navigator';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
__DEV__ ? (console.warn = () => { }) : null;
__DEV__ ? (console.error = () => { }) : null;
sagaMiddleware.run(rootSaga);
const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <HomeStackNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
