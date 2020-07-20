import Home, {loadData} from './pages/HomePage';

export default [
    {
        loadData,
        path: '/:id',
        component: Home,
        exact: true
    }
];