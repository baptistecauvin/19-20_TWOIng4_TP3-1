import React, { Component } from 'react';
import "./profils.css";
import Personne from "./Personne/personne";
import Contenu from "./Contenu/contenu";

class Profils extends Component {
  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { personne } = this.props.profilData;
    const contenu= this.props.profilData.contenu;

    return(
      <div>
        <div className="personne-container">
          <Personne personne={personne}/>
        </div>
        <div className="publi-container">
          <Contenu contenu={contenu}/>
        </div>
      </div>
    )
  }
}

export default Profils;