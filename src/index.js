import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBtdkanoGjObuvM5e7fK5ioKU2WaTaZ7Mk';


// Create Angies first react component.
// This component should compile to HTML.

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: videos,
			selectedVideo: null
		}
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail videos={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />

			</div>
		);
	}
}

// Put this component on to the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));