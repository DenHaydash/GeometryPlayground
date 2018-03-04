import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import rootStore from './stores/root-store';

import './style.scss';

useStrict(true);

const stores = {
    rootStore
};

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider {...stores}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
    document.getElementById('root'));
};

render(Main);

if (module.hot) {
    module.hot.accept('./components/Main', () => render(Main));
}