// routes
import FollowingRoutes from './FollowingRoutes';
import ProfileRoutes from './ProfileRoutes';
import UploadRoutes from './UploadRoutes';
import SearchRoutes from './SearchRoutes';
import NotFound from '~/pages/Error';

// layout
import { DefaultLayout, HeaderOnly } from '~/components/Layouts';

// pages
import HomePage from '~/pages/Home';
// Public Routes
const publicRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            { path: '*', element: <NotFound /> },
            { path: '/', element: <HomePage /> },
            { path: '/following/*', element: <FollowingRoutes /> },
            { path: '/profile/*', element: <ProfileRoutes /> },
        ],
    },
    {
        element: <HeaderOnly />,
        children: [{ path: '/upload/*', element: <UploadRoutes /> }],
    },
    {
        children: [{ path: '/search/*', element: <SearchRoutes /> }],
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
