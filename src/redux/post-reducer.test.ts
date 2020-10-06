import {postReducer, PostState} from './post-reducer';
import {addPost, deletePost} from './actions';

const state: PostState = {
    posts: [
        {id: 0, title: 'post 0'},
        {id: 1, title: 'post 1'}
    ]
};
test('new post should be added', () => {
    const action = addPost({id: 5, title: 'new post'});
   
    const newState = postReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('title of new post should be correct', () => {
    const action = addPost({id: 5, title: 'new post'});
  
    const newState = postReducer(state, action);

    expect(newState.posts[newState.posts.length - 1].title).toBe('new post');
});

test('after deleting length of posts should be decrement', () => {
  
    const action = deletePost(1);
  
    const newState = postReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

test('after deleting length of posts shouldn\'t be decrement', () => {
  
    const action = deletePost(100);
  
    const newState = postReducer(state, action);

    expect(newState.posts.length).toBe(2);
});