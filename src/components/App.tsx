import * as React from 'react';
import {Mouse} from './Mouse';
import {Cat} from './Cat';

export class App extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <Mouse render={Cat} />
            </div>
        );
    }
}