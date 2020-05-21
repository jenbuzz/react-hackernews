import React from 'react';
import { render } from 'react-dom';

function renderApp() {
    const App = require('./App').default;
    render(<App />, document.getElementById('app'));
}

renderApp();

if (module.hot) {
    module.hot.accept(renderApp);
}
