import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';
<<<<<<< HEAD
import App from './App';
=======
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 0f27a82303552d4edf3d36dd270be7ab7cebe515

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
=======
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>

>>>>>>> 0f27a82303552d4edf3d36dd270be7ab7cebe515
  </React.StrictMode>,
);
