import React, { Component } from 'react';
import jQuery from 'jquery';
import Tweet from './Components/Tweet';

import logo from './salesForceLogo.png';
import './App.css';

class App extends Component {
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SalesForce Tweet Code Challenge</h1>
        </header>
        <div>
          {tweets}
        </div>
      </div>
    );
  }

  _getTweets() {
    return this.state.tweets.map((tweet) => {
      return <Tweet
              {...tweet}
              key={tweet.tweetId} />
    })
  }

  _fetchTweets() {
    jQuery.ajax({
      dataType: 'json',
      crossDomain: true,
      method: 'GET',
      url: 'http://localhost:51847/api/tweets',
      success: (tweets) => {
        this.setState({ tweets })
      }
    });
  }

}

//JSON shens
//username
//screenname
//profileImage
//tweetContent
//retweets
//tweetDate
//tweetId

export default App;
