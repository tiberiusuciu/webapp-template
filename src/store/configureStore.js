import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = () => {
	const store = createStore(
		rootReducer,
		// config.defaults.defaultState,
		compose(
			applyMiddleware(
				createLogger(),
			),
		)
	);

	if (module.hot) {
    	// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
