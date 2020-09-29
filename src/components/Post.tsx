import * as React from 'react';

type Props = {
    post: number
}

const Post: React.FC<Props> = ({post}) => {
    return (
        <div>
            <h1>{post}</h1>
        </div>
    );
};

export default Post;