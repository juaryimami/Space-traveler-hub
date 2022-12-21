import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>

  </React.StrictMode>,
);
