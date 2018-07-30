import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleDown, faTh } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee,faAngleDown,faTh);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
