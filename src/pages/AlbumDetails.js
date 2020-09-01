import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import './albumDetails.css'
import Model from '../components/Model'

const AlbumDetails = (props)=>{
    const [modelInfo, setModelInfo]= useState({});
    const [showModel, setShowModel]=useState(false)
    const data=useSelector(state=>state.data.data);
    const albumId=props.match.params.albumId;
    const findAlbum = data.filter(album=>album.albumId=== +albumId);
    //console.log(findAlbum);
    const objDetails=(obj)=>{
        setModelInfo(obj);
        setShowModel(true)
    }
   const thumbnails = findAlbum.map(albumData=>(
       <div key={albumData.id} className='thumbnail' onClick={()=>objDetails(albumData)} style={{ backgroundImage:`url("${albumData.thumbnailUrl}")`}}></div>
   )) 
    return (
        <div className='thumbnail-parent'>
          {thumbnails}
          {showModel && <Model modelInfo={modelInfo} click={()=>setShowModel(false)} />}
        </div>
    )
}

export default AlbumDetails;