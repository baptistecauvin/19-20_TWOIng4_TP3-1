import React, { Component } from 'react';

class Author extends Component {
  render() {
    const author = this.props.author;
    // PAREIL QUE
    // const { author } = this.props;

    return (
      <div>
        <h4>{author.nom}</h4>
        <p>{author.prenom}</p>
      </div>
    );
  }
}

export default Author;