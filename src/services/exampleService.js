import * as httpRequest from '@/utils/httpRequest';

const url = 'posts';

export const getPost = () => {
    return httpRequest.get(url);
};
