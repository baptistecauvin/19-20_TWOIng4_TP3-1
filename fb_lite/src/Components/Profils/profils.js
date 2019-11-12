import React, { Component } from 'react';
import "./profils.css";
import Personne from "./Personne/personne";

class Profils extends Component {
  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { personne } = this.props.profilData;

    return(
      <div className="profils-container">
        <Personne personne={personne}/>
      </div>
    )
  }
}

export default Profils;