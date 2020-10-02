import * as React from 'react';
import {PostType} from '@models/Post';

type Props = {
    post: PostType;
    deletePost: (id: number) => void
}

const Post: React.FC<Props> = ({post, deletePost}) => {
    return (
        <div onClick={() => {
            deletePost(post.id);
        }}>
            <h1>{post.title}</h1>
        </div>
    );
};

export default Post;