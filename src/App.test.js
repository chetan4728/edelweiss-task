import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from './redux/store/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
test('renders learn react link', () => {
  render(<Provider store={store}>
            <App />
        </Provider>);
});
