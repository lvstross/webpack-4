import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  );
}

render(Counter);
// Need to figure out how to get hot reloading to work with new paradigm
if (module.hot) {
  module.hot.accept('./counter.js', () => {
    const NewCounter = require('./counter.js').default;
    render(NewCounter);
  });
}
