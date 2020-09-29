import * as React from 'react';

interface IPostForm {
    test?: string
}

export default class PostForm extends React.Component<IPostForm> {
    constructor(props: IPostForm) {
        super(props);
        this.state = {};
    }

    render (): JSX.Element {
        return <div>
            <h1>Post Form</h1>
        </div>;
    }
}