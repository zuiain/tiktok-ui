const routes = {
    home: '/home',

    _following: '/following',
    _profile: '/profile',
    _upload: '/upload',
    _search: '/search',
    _feedback: '/feedback',
    _explore: '/explore',
    _account: '/:nickname',
    _live: '/live',

    following: '/following/*',
    profile: '/profile/*',
    upload: '/upload/*',
    search: '/search/*',
    feedback: '/feedback/*',
    explore: '/explore/*',
    account: '/:nickname',
    live: '/live/*',
};

export default routes;
