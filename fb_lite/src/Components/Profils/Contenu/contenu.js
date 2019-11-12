import React, { Component } from 'react';
import './contenu.css';

class Contenu extends Component {
  render() {
    const contenu = this.props.contenu;
    // PAREIL QUE
    // const { contenu } = this.props;
    return (

      <div className="publication-content-container">
          {contenu.content}
          <p className="boutonStyle">
            <button type="button" class="btn btn-primary" /*onClick={() => this.props.addLike(this.props.personne.id)*/> {/*this.props.*/contenu.like} J aime</button>
          </p>
      </div>
    );
  }
}

export default Contenu;