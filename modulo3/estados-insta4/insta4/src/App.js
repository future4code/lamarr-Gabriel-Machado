import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const pessoa =[
    { nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/55',
      fotoPost:'https://picsum.photos/20/15'},
    { nomeUsuario:'patricia',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/300/150'},
    { nomeUsuario:'marcos',
      fotoUsuario:'https://picsum.photos/536/354',
      fotoPost:'https://picsum.photos/400/150'}
  ]

  const NovaLista = pessoa.map((elemento, index) => {
    return <Post
    nomeUsuario={elemento.nomeUsuario}
    fotoUsuario={elemento.fotoUsuario}
    fotoPost={elemento.fotoPost}
    key={index}
    />
   })

return(
  <div className='MainContainer'>
    {NovaLista}
    {console.log(pessoa)}
  </div>
)

}


export default App;
