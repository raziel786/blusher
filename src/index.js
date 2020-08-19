import React from 'react';
import { render } from 'react-dom';

import store from './rematch/store';
import App from './App';

render(<App store={store} />, document.getElementById('root'));
