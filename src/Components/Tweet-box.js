
import React from 'react';
import jQuery from 'jquery';

import Tweet from './Tweet';
import '../App.css';

export default class TweetBox extends React.Component {
    constructor() {
        super();

        this.state = {
            tweets: []
        };
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
        const tweets = this._getTweets();
        return (
            <div className="App">
                <div>
                    <h2>Search Tweets here:</h2>

                </div>               
                <h2 className="Tweet">Tweets</h2>
                <div>
                    {tweets}    
                </div>
            </div>
        );
    }

    _getTweets() {
        return this.state.tweets.map((tweet) => {
            return <Tweet {...tweet}
                key={tweet.tweetId} />
        });
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