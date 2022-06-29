import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/55'}
            fotoPost={'https://picsum.photos/20/15'}
          />
          <Post
            nomeUsuario={'patricia'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/300/150'}
          />
          <Post
            nomeUsuario={'marcos'}
            fotoUsuario={'https://picsum.photos/536/354'}
            fotoPost={'https://picsum.photos/400/150'}
          />
  </div>
)

}


export default App;
