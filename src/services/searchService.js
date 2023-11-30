import httpRequest from '~/utils/';

const searchAccounts = async (q, type = 'less') => {
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

// eslint-disable-next-line import/no-anonymous-default-export
export const searchService = {
    searchAccounts,
};
