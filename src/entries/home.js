import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
// console.log('Hola mundo!' )

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
	data: {
		...data
	}
}

const store = createStore(
	(state) => state,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Enhancer
)

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
//hydrate( <Home data={data} />, homeContainer);

render(
	<Provider store={store}>
		<Home />
	</Provider>,
	homeContainer
)