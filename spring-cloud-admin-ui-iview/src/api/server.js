import httpRequest from '@/libs/HttpRequest';

export const applications = ()=> {
    return httpRequest.request({
        method: 'get',
        url: '/applications'
    });
}