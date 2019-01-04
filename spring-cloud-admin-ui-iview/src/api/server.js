import httpRequest from '@/libs/HttpRequest';

export const getApplications = ()=> {
    return httpRequest.request({
        method: 'get',
        url: '/applications'
    });
}