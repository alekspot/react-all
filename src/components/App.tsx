import * as React from 'react';
import PostForm from './PostForm';

import FetchedPosts from './FetchedPosts';
import Posts from './Posts';


export const App: React.FC = () => {
    const [count, setCount] = React.useState(0);
    if (count) {
        return null; 
    }

    return (
        <div>
            <div>
                <PostForm/>
            </div>
            <div className="d-flex jcb w-50">
                <div>
                    <h2>Sync Posts</h2>
                    <Posts posts={[1]}/>
                </div>
                <div>
                    <h2>Async Posts</h2>
                    <FetchedPosts posts={[]}/>
                </div>
            </div>
        </div>
    );
};