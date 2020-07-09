//Imports 
// You can name your imports whatever you'd like if you default export, but it you exports {specific functions} you need to import with the names you export with.
//And a mixture of the two like ---> import React, {Component} from 'react';
// ... fom 'react' vs './react' the ./ gives you a file path 'react' will trigger the code to search for react within the modules.
import React from 'react';

//Will delete these once I get more code written.
import Pokecard from './Pokecard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokecard 
      id={4}
      name="Charmander"
      type="fire"
      exp={62}
      />
    </div>
  );
}

// exports the App, so that it can be imported into another file so I can axcess this information and use it
export default App;
