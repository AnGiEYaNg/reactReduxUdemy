import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtdkanoGjObuvM5e7fK5ioKU2WaTaZ7Mk';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

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