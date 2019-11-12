import React, { Component } from 'react';
import './personne.css';

class Personne extends Component {
  render() {
    const personne = this.props.personne;
    // PAREIL QUE
    // const { personne } = this.props;

    return (

      <div>

        <div className="image-pp">
          <img src={personne.img} alt={personne.alt}/>
        </div>

        <div className="nom">
          <p>{personne.nom}</p>
        </div>

        <div className="prenom">
          <p>{personne.prenom}</p>
        </div>

        <div className="daten">
          <p>{personne.datebirth}</p>
        </div>

        <p className="boutonStyle">
          <button type="button" class="btn btn-primary" /*onClick={() => this.props.changeStyle(this.props.personne.id)}*/ >Change style</button>
        </p>

      </div>
    );
  }
}

export default Personne;