import React,{useEffect} from 'react';
import AlbumItem from '../components/AlbumItem';
import {getData} from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';

const Album=(props)=> {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getData());
  },[]);
  const data=useSelector(state=>state.data.data);
  const albumsData = [...new Set(data.map(item => item.albumId))];
  const navigateToAlbum = (albumId)=>{
    props.history.push('/album'+albumId);
  }
    const album = albumsData.map(num=>(
      <AlbumItem num={num} key={num} click={()=>navigateToAlbum(num)} />
    ))
  return (
    <div className="album-parent">
        {album}
    </div>
  );
}

export default Album;
