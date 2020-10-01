import React, { useState, useEffect } from 'react';


export default function App() {

  const [repo2, setRepos] = useState([]);


  // consumo de api - Similar ao componentDidMount
  useEffect(() => {
    async function getRepos(){
      const response = await fetch('https://api.github.com/users/diego3g/repos');
      const data = await response.json();
      setRepos(data);
    }

    getRepos();
  }, []);  // <= este array vazio significa sem dependência ou comparação, fazendo com que execute apenas 1 vez


  // contagem de favoritos - Similar ao componentDidUpdate  - mas com ganho de performance não precisa fazer comparações com o estado anterior
  useEffect( () => {
    const filtered = repo2.filter(rep => rep.favorite);
    document.title = `Você tem ${filtered.length} favoritos`
  }, [repo2])


  function handleFavorite(id) {
    const newRepos = repo2.map(rep => {
        return rep.id === id ? {...rep, favorite: !rep.favorite} : rep
    });

    setRepos(newRepos);
  }

  return (
     <ul>
      {repo2.map(rep2 => (
          <li key={rep2.id}>
            {rep2.name}
            {rep2.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(rep2.id)} >Favoritar</button>
          </li>
      ))}
     </ul>
  );
}