// routes
import HomeRoutes from './HomeRoutes';
import FollowingRoutes from './FollowingRoutes';
import ProfileRoutes from './ProfileRoutes';
import UploadRoutes from './UploadRoutes';
import SearchRoutes from './SearchRoutes';
import NotFound from '~/pages/Error';

// layout
import { DefaultLayout, HeaderOnly } from '~/components/Layouts';

// Public Routes
const publicRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            { path: '*', element: <HomeRoutes /> },
            { path: '/following/*', element: <FollowingRoutes /> },
            { path: '/profile/*', element: <ProfileRoutes /> },
            { path: '/*', element: <NotFound /> },
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
