
import React from 'react';
import jQuery from 'jquery';

import Tweet from './Tweet';
import '../App.css';

export default class TweetBox extends React.Component {
    constructor() {
        super();

        this.state = {
            tweets: [],
            searchTerm: ''
        };

        this.searchUpdated = this._searchUpdated.bind(this);
    }

    componentWillMount() {
        this._fetchTweets();
    }

    componentDidMount() {
        this._timer = setInterval(() => this._fetchTweets(), 60000);
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render() {
        let tweets = this._getTweets();
        let filteredTweets = tweets.filter((tweet) => {
            return tweet.tweetContent.search(this.state.searchTerm) !== -1;
        });
        return (
            <div className="App">
                <div>
                    <h2>Search Tweets here:</h2>
                    <input type="text"
                        value={this.state.searchTerm}
                        onChange={this._searchUpdated.bind(this)} />
                </div>               
                <h2 className="Tweet">Tweets</h2>
                <div>
                    {filteredTweets.map((tweet) => {
                        return <Tweet {...tweet}
                            key = {tweet.tweetId}/>
                    })}
                </div>
            </div>
        );
    }

    _searchUpdated (term) {
        this.setState({searchTerm: term.target.value})
    }

    _getTweets() {
        return this.state.tweets
    }

    _fetchTweets() {
        jQuery.ajax({
            dataType: 'json',
            crossDomain: true,
            method: 'GET',
            url: 'https://twittercodeapi20171119112742.azurewebsites.net/api/tweets',
            success: (tweets) => {
                this.setState({ tweets })
            }
        });
    }
}