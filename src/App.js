//Imports 
// You can name your imports whatever you'd like if you default export, but it you exports {specific functions} you need to import with the names you export with.
//And a mixture of the two like ---> import React, {Component} from 'react';
// ... fom 'react' vs './react' the ./ gives you a file path 'react' will trigger the code to search for react within the modules.
import React from 'react';

//Will delete these once I get more code written.
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React Pokedex
        </p>
      </header>
    </div>
  );
}

// exports the App, so that it can be imported into another file so I can axcess this information and use it
export default App;
