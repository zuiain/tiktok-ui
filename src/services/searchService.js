import * as httpRequest from '~/utils/httpRequest';

const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
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
