import React, { useState} from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';

const MainContainer = styled.div`  
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

function App() {

  // estados
  const [inputNome, setInputNome] = useState(''); 
  const [inputUsuario,setInputUsuario] = useState('')
  const [inputPost,setInputPost] = useState('')
  const [pessoas, setPessoas] = useState([
  { nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/55',
    fotoPost:'https://picsum.photos/20/15'},
  { nomeUsuario:'patricia',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/300/150'},
  { nomeUsuario:'marcos',
    fotoUsuario:'https://picsum.photos/536/354',
    fotoPost:'https://picsum.photos/400/150'}
]);

// eventos
const handleInputNome = (e) =>{
  setInputNome(e.target.value);
  console.log(inputNome);
}
const handleInputFoto =(e)=>{
  setInputUsuario(e.target.value)
  console.log(inputUsuario);
}
const handleInputPost =(e)=>{
  setInputPost(e.target.value)
  console.log(inputPost);
}

const NovaLista = pessoas.map((e, index) => {
  return <Post
  nomeUsuario={e.nomeUsuario}
  fotoUsuario={e.fotoUsuario}
  fotoPost={e.fotoPost}
  key={index}/>
 })

 // adicionar novo post
 const addPost = (e)=>{
  e.preventDefault();

  setPessoas([{nomeUsuario: inputNome, fotoUsuario: inputUsuario, fotoPost: inputPost}, ...pessoas])

  // const novoPost = [
  //     {nomeUsuario: inputNome,
  //     fotoUsuario: inputUsuario,
  //     fotoPost: inputPost}, ...pessoas]
  // setPessoas(novoPost);
  
  // resetar os input
  setInputNome('')
  setInputUsuario('')
  setInputPost('')
}

return(
  <MainContainer>
    <form>
        <label></label>
        <input  
            placeholder='Nome Usuario' 
            value={inputNome} 
            onChange={handleInputNome}/>
        <input 
            placeholder='Foto Perfil' 
            value={inputUsuario}
            onChange={handleInputFoto}/>
        <input 
            placeholder='Post' 
            value={inputPost} 
            onChange={handleInputPost}/>
        <button onClick={addPost}>
            adicionar
        </button>
    </form>

    {NovaLista}
    {console.log(pessoas)}

  </MainContainer>
)

}

export default App;
