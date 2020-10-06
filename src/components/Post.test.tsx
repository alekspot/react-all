// import * as React from 'react';
// import Post from './Post';
// import {create} from 'react-test-renderer';

// describe('Post component', () => {
//     test('', () => {
//         const component = create(<Post post={{id: 1, title: 'post titile'}} deletePost={(id) => console.log(id)}></Post>);
//     });
// });

import * as React from 'react';
import {unmountComponentAtNode, render} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Post from './Post';

let container: HTMLDivElement = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it('renders with a title', () => {
    act(() => {
        render(<Post post={{id: 0, title: 'Hey, stranger'}} />, container);
    });
    expect(container.textContent).toBe('Hey, stranger');

});