import React, { Component } from 'react';
import './App.css';
import Profils from './Components/Profils/profils'


//Les profils

const profil1 = {
   personne: {
    img:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    alt:"test",
    prenom: "Thomas",
    nom : "Shelby",
    datebirth: "12/12/1212"
  },
  contenu: "texte, texte texte texte"
}

const profil2 = {
    personne: {
      img:"",
      prenom: "Naruto",
      nom: "Uzumaki",
      datebirth: "14/04/1950"
  },
  contenu: "texte",
}

const profil3 = {
  personne: {
    img:"",
    prenom: "Senku",
    nom: "Ishigami",
    datebirth: "16/05/1999"
  },
  contenu: "texte",
}


class App extends Component {
  render() {
    return (
      <div>
        <h2>Profils</h2>
        <Profils profilData={profil1} />
      </div>
    );
  }
}


export default App;
