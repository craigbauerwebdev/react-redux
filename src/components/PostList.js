import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <h1>Blog Posts</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
    
}

export default connect(
    mapStateToProps, 
    { fetchPosts }
)(PostList);