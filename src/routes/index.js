import HomePage from '@pages/Home/Loadable';
import ExamplePage from '@pages/Example/Loadable';
import NotFound from '@pages/NotFound/Loadable';
import constants from '@/constants';

const publicRoutes = [
    { path: constants.routes.HOME, component: HomePage },
    { path: constants.routes.EXAMPLE, component: ExamplePage },
    { path: constants.routes.NOT_FOUND, component: NotFound, layout: null },
];

export { publicRoutes };
