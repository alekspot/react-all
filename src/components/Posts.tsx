import * as React from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import {AppStateType} from 'src/redux/StoreProvider';
import {deletePost} from '../redux/actions';

type PostsProps =  ReturnType<typeof mapStateToProps> & {
    deletePost: (id: number) => void
}

const Posts: React.FC<PostsProps> = ({posts, deletePost}) => {

    if (!posts.length) {
        return <p>No posts...</p>;
    }
   
    return <>
        {
            posts.map(post => {
                return <Post key={post.id} post={post} deletePost={deletePost}/>;
            })
        }
    </>;
    
};

const mapStateToProps = (state: AppStateType) => ({
    posts: state.post.posts
});

export const PostsContainer = connect(mapStateToProps, {deletePost})(Posts);
    
