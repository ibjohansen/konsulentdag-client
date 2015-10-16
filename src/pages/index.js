'use strict';

import React from 'react';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import Feed from './components/feed';
import acandoLogo from '../images/acando_logo_300x100.png';

const Page = React.createClass({

    displayName: 'src/pages/index.js',

    mixins: [
        ReactFireMixin
    ],

    getDefaultProps() {
        return {
            feedUrl: 'https://konsulentdag.firebaseio.com/tweets',
            hashtag: 'javascript'
        };
    },

    getInitialState() {
        return {
            tweets: []
        };
    },

    componentWillMount() {
        let tweetsRef = new Firebase(this.props.feedUrl);
        this.bindAsArray(tweetsRef, 'tweets');
    },

    asHeader(){
        return (
            <header>
                <a href="http://www.acando.no">
                    <img className="acando-logo"
                         src={acandoLogo}
                         alt="acando.no"/>

                    &nbsp;#{this.props.hashtag}
                </a>
            </header>
        )
    },

    render() {
        return (
            <div className="row">
                <div className="col-3 side-column"/>
                <div className="col-6">
                    {this.asHeader()}
                    <section>
                        <Feed tweets={this.state.tweets}/>
                    </section>
                </div>
                <div className="col-3 side-column"/>
            </div>
        )
    }
});

export default Page;