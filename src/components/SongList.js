import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return (
            <h1>Song List!!!</h1>
        );
    }
}

export default connect()(SongList);