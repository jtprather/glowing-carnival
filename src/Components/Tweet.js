import React from 'react';
import Linkify from 'react-linkify';

class Tweet extends React.Component {
    
    render() {
        return (
            <div className="Tweet">
                <div className="Tweet-content">
                    <img className="Tweet-avatar" src={this.props.profileImage} alt={this.props.username} />
                    <span><strong>{this.props.username}</strong></span>
                    <span>&nbsp;</span>
                    <span>@{this.props.screenname}</span>
                    <span>&nbsp;</span>
                    <small className="Tweet-Time">&nbsp;{this._getFormattedTweetDate()}</small>
                </div>
                <div className="Tweet-content">
                    <p><Linkify>{this.props.tweetContent}</Linkify></p>
                </div>
                <div className="Tweet-Content Tweet-retweets">
                    <small>Retweets:{this.props.retweets}</small>
                </div>
            </div>
        );
    }

    _getFormattedTweetDate() {
        var tweetDate = new Date(this.props.tweetDate);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        tweetDate = months[tweetDate.getMonth()] + " " + tweetDate.getDate();
        return (tweetDate);
    }
}



export default Tweet;