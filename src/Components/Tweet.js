import React from 'react';
import Linkify from 'react-linkify';

class Tweet extends React.Component {
    
    render() {
        return (
            <div className="Tweet">
                <div className="Tweet-title">
                    <img className="Tweet-avatar" src={this.props.profileImage} alt={this.props.username} />
                    <span><strong>{this.props.username}</strong></span>
                    <span>@{this.props.screenname}</span>
                    <div>{this.props.tweetDate}</div>
                </div>
                <div>
                    <p><Linkify>{this.props.tweetContent}</Linkify></p>
                </div>
                <div>
                    <span>Retweets:{this.props.retweets}</span>
                </div>
            </div>
        );
    }
}

export default Tweet;