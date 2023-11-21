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

// layouts
import { DefaultLayout, HeaderOnly } from '~/layouts';

// config
import config from '~/config';

// Public Routes
const publicRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: config.routes.home, element: <HomePage /> },
            { path: config.routes.following, element: <FollowingRoutes /> },
            { path: config.routes.profile, element: <ProfileRoutes /> },
        ],
    },
    {
        element: <HeaderOnly />,
        children: [
            { path: config.routes.account, element: <AccountPage /> },
            { path: config.routes.upload, element: <UploadRoutes /> },
            { path: '*', element: <NotFound /> },
        ],
    },
    {
        children: [
            { path: config.routes.search, element: <SearchRoutes /> },
            { path: config.routes.feedback, element: <FeedbackRoutes /> },
        ],
    },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
