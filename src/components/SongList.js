import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    renderSongList() {
        return this.props.songs.map((song, i) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated item">
                        <button className="ui button primary">
                            Selected
                        </button>
                    </div>
                    <div classname="content">{song.title}</div>
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
    return {
        songs: state.songs
    }
    //console.log(state);
    //return state;

}
export default connect(mapStateToProps)(SongList);