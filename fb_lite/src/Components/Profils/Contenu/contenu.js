import React, { Component } from 'react';
import './contenu.css';

class Contenu extends Component {
  render() {
    const contenu = this.props.contenu;
    // PAREIL QUE
    // const { publication } = this.props;
    return (
      <div className="publication-content-container">
        {contenu}
      </div>
    );
  }
}

export default Contenu;