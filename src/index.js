//create new comment 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';

const API_KEY = 'AIzaSyA1VHSxcYEk7VKe5c2uKh9KOGMaSApdwno';



class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {

        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
