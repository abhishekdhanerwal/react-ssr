import React from 'react';
import {renderToString} from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default (req, data) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{data}}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    ); 

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
                <script>window.__ROUTE_DATA__ = ${JSON.stringify(data)}</script>
            </body>
        </html>
    `;

}