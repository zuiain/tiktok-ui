import * as request from '~/utils/request';

const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

export { search };
