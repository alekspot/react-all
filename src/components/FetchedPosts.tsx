import * as React from 'react';

type Props = {
    posts: number[]
}

const FetchedPost: React.FC<Props> = ({posts}) => {
    if (!posts.length) {
        return <button>Load</button>;
    }

    return (
        <div>
            
        </div>
    );
};

export default FetchedPost;