import React, { Component } from 'react';
import './App.css';
import Profils from './Components/Profils/profils'
//import Bouton from './Components/Bouton/bouton'


//Les profils

const profil1 = {
   personne: {
    img:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    alt:"test",
    prenom: "Thomas",
    nom : "Shelby",
    datebirth: "12/12/1212",
    id:0
  },
  contenu: {
    content: "texte, texte texte texte",
    like: 123
}
}

const profil2 = {
    personne: {
      img:"",
      prenom: "Naruto",
      nom: "Uzumaki",
      datebirth: "14/04/1950",
      id:1
  },
  contenu: {
    content: "texte, texte texte texte",
    like: 1234
}
}
const profil3 = {
  personne: {
    img:"",
    prenom: "Senku",
    nom: "Ishigami",
    datebirth: "16/05/1999",
    id:2
  },
  contenu: {
    content: "texte, texte texte texte",
    like:109
}
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
