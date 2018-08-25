import axios from 'axios';
import Promise from 'promise-polyfill';
import qs from 'query-string';


axios.defaults.baseURL = window.location.origin + '/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/*
* params:path:请求路径 ,data:请求参数
* return: 返回promise
* desc：发送get请求
* */
function get(path, data = {}) {
    data.t = new Date().getTime();
    return axios({
        url: path,
        method: 'get',
        params: data,
    }).then(response => {
        if (response.status === 200) {
            return response.data;
        }

        return Promise.reject(error);
    }).then(data => {
        if (data.code === 200) {
            return data.data;
        }
        let error = {
            msg: data.msg,
            code: data.code,
        };

        return Promise.reject(error);
    });
}


/*
* params:path:请求路径 ,data:请求参数
* return: 返回promise
* desc：发送post请求
* */
function post(path, data = {}) {

    return axios({
        url: path,
        method: 'post',
        params: {},
        data: qs.stringify(data)
    }).then(response => {
        if (response.status === 200) {
            return response.data;
        }

        return Promise.reject(error);
    }).then(data => {
        if (data.code === 200) {
            return data.data;
        }
        let error = {
            msg: data.msg,
            reason: 'server',
            code: data.code,
        };
        return Promise.reject(error);
    }).catch((xhr) => {
        if (xhr && xhr.reason === 'server') {
            return Promise.reject(xhr);
        }
        let error = {};
        let responseError = xhr.response || xhr.request;
        let {status, statusText} = responseError;
        error.code = status;
        error.msg = statusText;
        return Promise.reject(error);
    })
}

const http = {
    get,
    post
};
export default http;
