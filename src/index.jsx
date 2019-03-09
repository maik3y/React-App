import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './../styles/index.scss';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
