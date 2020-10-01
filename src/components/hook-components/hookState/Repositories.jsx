import React, { useState } from 'react';

export default () => {
  // variável de state
  const [repo, setRepositories] = useState([
    { id: 1, name: 'repo-1'},
    { id: 2, name: 'repo-2'},
    { id: 3, name: 'repo-3'},
  ]);

  function handleAddRepository() {
    setRepositories([...repo, {id: Math.random(), name: 'novo repo'}])
  }
  
  return (
    <>
      <ul>
      {repo.map(rep => <li key={rep.id}>{rep.name}</li>)}
      </ul>
      <button onClick={handleAddRepository}>
        Adicionar repositorio
      </button>
    </>
  );
}