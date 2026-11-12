import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// This handles the redirect from GitHub Pages 404.html
const redirect = window.location.search.slice(1).split('&').map(x => x.split('~and~')).reduce((acc, [key, value]) => {
  if (key && value) acc[key] = value;
  return acc;
}, {});
if (redirect['/']) {
  window.history.replaceState(null, null, redirect['/']);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)