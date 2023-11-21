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

// routesConfig
import routes from '~/config/routes';

// Public Routes
const publicRoutes = [
    {
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: routes.home, element: <HomePage /> },
            { path: routes.following, element: <FollowingRoutes /> },
            { path: routes.profile, element: <ProfileRoutes /> },
        ],
    },
    {
        element: <HeaderOnly />,
        children: [
            { path: routes.account, element: <AccountPage /> },
            { path: routes.upload, element: <UploadRoutes /> },
            { path: '*', element: <NotFound /> },
        ],
    },
    {
        children: [
            { path: routes.search, element: <SearchRoutes /> },
            { path: routes.feedback, element: <FeedbackRoutes /> },
        ],
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
