import React from 'react';
import ReactDOM from 'react-dom';
import './bouton.css';

class Bouton extends Component {
  render() {

    return (

      <div>

          <button type="button" class="btn btn-primary">Personne 1</button>
        
          <button type="button" class="btn btn-primary">Personne 2</button>
        
          <button type="button" class="btn btn-primary">Personne 3</button>

      </div>
    );
  }
}

export default Bouton;