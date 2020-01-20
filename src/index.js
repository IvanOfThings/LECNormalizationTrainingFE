import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

render();

function render(){
  ReactDOM.render(<App />, container);
}

if (module.hot){
  module.hot.accept('./components/App', ()=>{
    render();
  } )
}
