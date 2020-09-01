import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Album from './pages/Album';
import AlbumDetails from './pages/AlbumDetails'

const App=()=> {
  
  return (
    <div>
     <Switch>
       <Route path='/album:albumId' component={AlbumDetails} />
       <Route path='/' exact component={Album} />
     </Switch>
    </div>
  );
}

export default App;
