import axios from 'axios';
axios.defaults.withCredentials =true;
function get(url,params,headers){
    return axios({
        url,
        method:"GET",
        params,
        headers,
    }).then((result) => {
        return result.data;
    });
};
function getNo(url,params,headers){
    return axios({
        url,
        method:"GET",
        params,
        headers,
        withCredentials :false,
    }).then((result) => {
        return result.data;
    });
};
function post(url,params,headers){
    if(headers){
        return axios({
            url,
            method:"POST",
            data: params,
            headers,
        }).then((result) => {
            return result.data;
        });
    }else{
        return axios({
            url,
            method:"POST",
            params,
        }).then((result) => {
            return result.data;
        });
    }
};

export {
    get,post,getNo
}