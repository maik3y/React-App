import 'core-js/stable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../global/routes';

ReactDOM.render(<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>, document.getElementById('app'));
