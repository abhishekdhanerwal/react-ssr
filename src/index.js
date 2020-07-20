import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import compression from 'compression';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(compression());

app.get('/:id', (req, res) => {

    const promises =  matchRoutes(Routes, req.path).map(({route}) => {
       return route.loadData ? route.loadData(req.params.id) : null;
    });
    Promise.all(promises).then((response) => {
        res.send(renderer(req, response[0]));
    });
});

app.use((req, res) => {res.send('Page not Found')});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});