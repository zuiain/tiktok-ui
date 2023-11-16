// routes
import FollowingRoutes from './FollowingRoutes';
import ProfileRoutes from './ProfileRoutes';
import UploadRoutes from './UploadRoutes';
import SearchRoutes from './SearchRoutes';
import FeedbackRoutes from './FeedbackRoute';

// pages
import HomePage from '~/pages/Home';
import NotFound from '~/pages/Error';
import AccountPage from '~/pages/Account';

// layout
import { DefaultLayout, HeaderOnly } from '~/components/Layouts';

// Public Routes
const publicRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/following/*', element: <FollowingRoutes /> },
            { path: '/profile/*', element: <ProfileRoutes /> },
        ],
    },
    {
        element: <HeaderOnly />,
        children: [
            { path: '/@:nickname', element: <AccountPage /> },
            { path: '/upload/*', element: <UploadRoutes /> },
            { path: '*', element: <NotFound /> },
        ],
    },
    {
        children: [
            { path: '/search/*', element: <SearchRoutes /> },
            { path: '/feedback/*', element: <FeedbackRoutes /> },
        ],
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
