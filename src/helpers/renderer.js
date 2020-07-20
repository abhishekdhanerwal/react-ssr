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
        <!DOCTYPE html>
        <html lang="en">
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <link rel="manifest" href="manifest.json">
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, user-scalable=yes">
                <meta name="Description" content="List and Graph">
                <meta name="theme-color" content="#db5945" />
                <meta name="HandheldFriendly" content="true" />
                <link rel="apple-touch-icon" href="icon.png" />
            </head>
            <body>
                <div id="root">${content}</div>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <script src="bundle.js"></script>
                <script>window.__ROUTE_DATA__ = ${JSON.stringify(data)}</script>
                <script> // --- new node ---
                    if ('serviceWorker' in navigator) {
                        window.addEventListener('load', () => {
                            navigator.serviceWorker.register('/sw.js');
                        });
                    }
                </script>
            </body>
        </html>
    `;

}