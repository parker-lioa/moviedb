import axios from 'axios';

const data_api_url = 'http://www.omdbapi.com/?apikey=e8c0c3f8&';
// const poster_api_url = 'http://img.omdbapi.com/?apikey=e8c0c3f8&';

export const search_api = (name)=>{
    const result = axios(data_api_url+'s='+name).then((data)=>{
        return data.data;
    });
    return result;
}

export const selected_api = (id)=>{
    const result = axios(data_api_url+'i='+id).then((data)=>{
        return data;
    });
    return result;
}

export default {search_api,selected_api};