import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './responsive.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
