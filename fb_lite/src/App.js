import React from 'react';
import logo from './logo.svg';
import './App.css';


//Les profils

const profil1 = {
   personne: {
    img:"",
    alt:"test",
    prenom: "Thomas",
    nom : "Shelby",
    datebirth: "12/12/1212"
  },
  publication: "texte",
}

const profil2 = {
    personne: {
      img:"",
      prenom: "Naruto",
      nom: "Uzumaki",
      datebirth: "14/04/1950"
  },
  publication: "texte",
}

const profil3 = {
  personne: {
    img:"",
    prenom: "Senku",
    nom: "Ishigami",
    datebirth: "16/05/1999"
  },
  publication: "texte",
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
