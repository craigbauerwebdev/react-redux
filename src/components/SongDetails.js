import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if(!props.song) {
        return ('Please Select a song');
    }
    return (
        <div>
            <div>Title: {props.song.title}</div>
            <div>Duration: {props.song.duration}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetails);