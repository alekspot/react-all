import * as React from 'react';
import {addPost} from '../redux/actions';
import {connect} from 'react-redux';

type PostFormProps = typeof mapDispatchToProps

const PostForm: React.FC<PostFormProps> = ({addPost}) => {
    const [value, setValue] = React.useState('');
    console.log('form render!');
    const addPostHandler = () => {
        if (value) {
            addPost({
                id: new Date().getTime(),
                title: value
            });
            setValue('');
        }
      
    };

    return <div>
        <h1>Post Form</h1>
        <input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type="text"/>
        <button onClick={addPostHandler}>add</button>
    </div>;
};

const mapDispatchToProps = {
    addPost
};

export const PostFormContainer = connect(null, mapDispatchToProps)(PostForm);