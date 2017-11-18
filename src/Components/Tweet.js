import React from 'react';
import Linkify from 'react-linkify';

class Tweet extends React.Component {
    
    render() {
        return (
            <div className="Tweet">
                <div className="Tweet-content">
                    <img className="Tweet-avatar" src={this.props.profileImage} alt={this.props.username} />
                    <span><strong>{this.props.username}</strong></span>
                    <span>&rlm;</span>
                    <span>&nbsp;</span>
                    <span>@{this.props.screenname}</span>
                    <span>&nbsp;</span>
                    <small>{this.props.tweetDate}</small>
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
}

export default Tweet;