import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import {Provider} from 'react-redux';
import store from './Features/store';
import {UserProvider} from './providers/userProviders.jsx'
createRoot(document.getElementById('root')).render(
  
    <UserProvider>
    <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
    </BrowserRouter>
    </UserProvider>
  
);
