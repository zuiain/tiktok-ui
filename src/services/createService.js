import httpRequest from '~/utils/';

const createAccount = async (name, type = 'less') => {
    try {
        const res = await httpRequest.post('users/create', {
            name,
        });
        return res;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

export const createService = {
    createAccount,
};
