const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const { AppRoutes } = require('../src/AppRoutes');
const { InitialState } = require('../src/contexts/InitialState');
const { fetchMoviesFromRequest, fetchMovieByIdFromRequest } = require('./api');

// create express application
const app = express();

// serve static assets
app.get(/\.(js|css|map|ico|json|png)$/, express.static(path.resolve(__dirname, '../build')));

// for any other requests, send `index.html` as a response
app.use('*', async (req, res) => {

    // read `index.html` file
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), {
        encoding: 'utf8',
    });

    const movieList = await fetchMoviesFromRequest(req);
    const currentMovie = await fetchMovieByIdFromRequest(req);

    // get HTML string from the `App` component
    let appHTML = ReactDOMServer.renderToString(
        <StaticRouter location={req.originalUrl}>
            <InitialState movieList={movieList} currentMovie={currentMovie}>
                <AppRoutes />
            </InitialState>
        </StaticRouter>
    );

    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="app">${appHTML}</div>`);

    // set header and status
    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

const port = 9001

app.listen(port, () => {
    console.log(`Express server started at http://localhost:${port}`);
});