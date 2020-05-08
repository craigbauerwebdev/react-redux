import { combineReducers } from 'redux';
 
const songsReducer = () => {
    return [
        { title: 'Smells Like Teen Spirit', duration: '4:05' },
        { title: 'All Star', duration: '4:45' },
        { title: 'No Scrubs', duration: '3:50'},
        { title: 'Possom Kingdom', duration: '4:35' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

const postListReducer = (dummy, action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    dummYReducer: () => 9
});