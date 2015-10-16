'use strict';

import React from 'react';
import Tweet from './tweet';
import Loader from './loader';

export default React.createClass({

    displayName: 'src/pages/components/feed.js',

    render() {

        if (this.props.tweets.length === 0) {

            return <Loader />
        } else {
            let tweets = this.props.tweets.map((tweet, idx) => {

                return <Tweet key={idx} tweet={tweet}/>
            });

            return <ul>{tweets.reverse().slice(0, 30)}</ul>
        }
    }
});


