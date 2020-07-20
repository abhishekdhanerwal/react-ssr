import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.get('/:id', (req, res) => {

    const promises =  matchRoutes(Routes, req.path).map(({route}) => {
       return route.loadData ? route.loadData(req.params.id) : null;
    });
    Promise.all(promises).then((response) => {
        res.send(renderer(req, response[0]));
    });
});

app.use((req, res) => {res.send('Page not Found')});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});