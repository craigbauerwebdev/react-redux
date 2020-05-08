// Action Creators
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        dispatch({ type: "FETCH_POSTS", payload: response });
    }
        /* .then(response => response.json())
        .then(data => console.log(data)); */
}

//export default selectSong;