import img from './img/imagem.JPG';
import './App.css';

const App = ()=> {
  const mensagem = ()=> {
    alert('boa noite');
  }
   
  return (
    <div className="App">
        <p>
          boas vindas!
        </p>
        <img src={img} 
        width="50%" 
        className="imagem" 
        alt="img" />
        <p>
          olá
        </p>
        <button onClick={mensagem}>
          clique aqui
        </button>
    </div>
  );
}

export default App;
