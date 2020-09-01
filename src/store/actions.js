import axios from 'axios';
export const GET_DATA='GET_DATA';


export const getData=()=>{
    return async (dispatch)=>{
       const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        const albumsData = await response.data;
        //console.log(albumsData)
        dispatch({
            type:GET_DATA,
            payload:albumsData
        })
    }
}