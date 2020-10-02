import * as React from 'react';
import {PostFormContainer} from './PostForm';

import FetchedPosts from './FetchedPosts';
import {PostsContainer} from './Posts';


export const App: React.FC = () => {
   
    return (
        <div>
            <div>
                <PostFormContainer/>
            </div>
            <div className="d-flex jcb w-50">
                <div>
                    <h2>Sync Posts</h2>
                    <PostsContainer/>
                </div>
                <div>
                    <h2>Async Posts</h2>
                    <FetchedPosts/>
                </div>
            </div>
        </div>
    );
};