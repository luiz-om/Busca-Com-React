import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [nome, setNome] = useState([])
  const [search, setSearch] = useState('')
  // const [filtrados,setFiltrados]=useState([])
  useEffect(() => {
  
   fetch('https://digimon-api.vercel.app/api/digimon') 
   .then(result => result.json())
   .then(data =>  setNome(data))
  
  }, [])


//basta criar uma variavel para realizar buscas ao inves de usar o useEffect
  const filtrados = search.length > 0
    ? nome.filter(repo =>repo.name.includes(search))
    : []
  return (
    <div className="App">


      <input value={search} type='text' onChange={(e) => (setSearch(e.target.value))}></input>


      {search.length > 0 ? (
        <ul>
          {filtrados.map((nomes,index) => (
            <li key={index} >{nomes.name}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {nome.map((nomes,index) => (
            <li key={index}>{nomes.name}</li>
          ))}
        </ul>
      )
      }

    </div>
  );
}

export default App;
