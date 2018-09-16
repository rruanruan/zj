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

        return Promise.resolve({
            msg: 'error',
            code: -1
        });
    }).then(data => {
        if (data.code === 200) {
            return data;
        }
        return Promise.resolve(data);
    });
}


/*
* params:path:请求路径 ,data:请求参数
* return: 返回promise
* desc：发送post请求
* */
import {Toast} from 'mint-ui';

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

        return Promise.resolve({
            msg: 'error',
            code: -1
        });
    }).then(data => {
        if (data.code === 200) {
            return data;
        }
        Toast(data.msg);
        return Promise.resolve(data);
    })
}

const http = {
    get,
    post
};
export default http;
