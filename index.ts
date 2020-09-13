import 'module-alias/register'

import * as express from 'express'
import * as React from 'react'
import {renderToString} from 'react-dom/server'

import {Header} from '@components/Header';
import {Content} from '@components/Content';


const 
    header = React.createElement(Header),
    content = React.createElement(Content)


const app = express();
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.render('index', {
        header: renderToString(header),
        content: renderToString(content)
    })
})

app.listen(3000);