import * as React from 'react';
import Post from './Post';

type Props = {
    posts: number[]
}


const Posts = ({posts}: React.PropsWithChildren<Props>): JSX.Element | JSX.Element[] => {
    if (!posts.length) {
        return <button>Load</button>;
    }

    return posts.map((post, index) => {
        return <Post key={index} post={post}/>;
    });
    
};
export default Posts;