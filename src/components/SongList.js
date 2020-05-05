import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../redux/actions';

class SongList extends Component {

    renderSongList() {
        return this.props.songs.map((song, i) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated item">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Selected
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderSongList()}
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    }
    
    //return state;

}
export default connect(
    mapStateToProps, 
    { selectSong } //calls dispatch function
)(SongList);