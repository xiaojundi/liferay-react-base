import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home/home"
import { Provider } from 'react-redux'
import reducers from './reducer'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import UserDashboard from './components/userDashboard/userDashboard';

const store = createStore(reducers, compose(applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

class Game extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="game">
					<UserDashboard/>
				</div>
			</Provider>
		);
	}
}



export default function(elementId) {
	ReactDOM.render(<Game />, document.getElementById(elementId));
}