import App from "./components/App/App.jsx";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import ReactDOM from "react-dom/client";
import React from 'react';

// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { HelmetProvider } from "react-helmet-async";
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
