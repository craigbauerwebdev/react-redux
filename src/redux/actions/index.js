// Action Creators
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
export const fetchPosts = (invoke = null) => {
    if(!invoke) {
        return async (dispatch, getState) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            dispatch({ 
                type: "FETCH_POSTS", 
                payload: response 
            });
        }
    }
    /* .then(response => response.json())
    .then(data => console.log(data)); */
}

//export default selectSong;