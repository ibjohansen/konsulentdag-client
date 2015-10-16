'use strict';

import React  from 'react';
import Moment from 'moment';
import Linkify from 'react-linkify';

export default React.createClass({

    displayName: 'src/pages/components/tweet.js',

    componentWillMount() {
        Moment.locale('nb');
    },

    renderMedia(tweet){
        if (tweet.entities && tweet.entities.media) {
            let images = tweet.entities.media.map(function (media, idx) {
                return (
                    <li>
                        <img key={idx}
                             src={media.media_url}
                             alt={media.display_url}
                             width={media.sizes.small.w}/>
                    </li>
                )
            });
            return (
                <ul>{images}</ul>
            )
        } else {
            return <span></span>
        }
    },

    render(){

        let tweet = this.props.tweet;
        let tweetTime = Moment(tweet.created_at).fromNow();

        return (
            <li ref={tweet.key} className="tweet">

                <img src={tweet.user.profile_image_url}
                     className="avatar"/>

                <span className="timestamp">{tweetTime}</span>

                <div className="body">
                        <span>
                            <a href={"http://www.twitter.com/" + tweet.user.screen_name}>
                                {tweet.user.name}
                            </a>
                            <span className="screen-name">@{tweet.user.screen_name}</span>
                        </span>
                    <span className="content">
                        <Linkify>{tweet.text}</Linkify>
                    </span>

                    {this.renderMedia(tweet)}

                </div>

            </li>
        )
    }
});