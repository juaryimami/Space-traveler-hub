import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './redux/configureStore';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Provider store={store}>
          <App />
        </Provider>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
);
