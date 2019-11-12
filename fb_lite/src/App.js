import React, { Component } from 'react';
import './App.css';
import Profils from './Components/Profils/profils'


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


class App extends Component {
  render() {
    return (
      <div>
        <h2>MES TWEETS</h2>
        <Profils profilData={profil1} />
      </div>
    );
  }
}


export default App;
