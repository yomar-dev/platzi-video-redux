import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../schemas/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/*function logger({ getState, dispatch }){
	return (next) => {
		return (action) => {
			console.log('Estado antigüo: ', getState().toJS())
			console.log('Enviando la siguiente acción: ', action);
			const value = next(action)
			console.log('Nuevo estado: ', getState().toJS())
			return value
		}
	}
}*/

/*const logger = ({getState, dispatch}) => next => action => {
	console.log('Estado antigüo: ', getState().toJS())
	console.log('Enviando la siguiente acción: ', action);
	const value = next(action)
	console.log('Nuevo estado: ', getState().toJS())
	return value
}*/

const store = createStore(
	reducer,
	map(),
	composeWithDevTools(
		applyMiddleware(
			logger,
			thunk
		)
	)
)

const homeContainer = document.getElementById('home-container');

hydrate(
	<Provider store={store}>
		<Home />
	</Provider>,
	homeContainer
);