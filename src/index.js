import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtdkanoGjObuvM5e7fK5ioKU2WaTaZ7Mk';

// Create Angies first react component.
// This component should compile to HTML.

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Put this component on to the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));