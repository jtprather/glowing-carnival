
import React from 'react';
import jQuery from 'jquery';

import Tweet from './Tweet';
import logo from './salesForceLogo.png';
import './App.css';

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

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to SalesForce Tweet Code Challenge</h1>
                </header>
                <h3 className="App-title">
                    this is another test of the commit/push build system
                </h3>
                <div className="App">
                    <h2>Tweets</h2>
                    <div>
                        {tweets}    
                    </div>
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
            method: 'GET',
            url: 'tweets.json',
            success: (tweets) => {
                this.setState({ tweets })
            }
        });
    }
}