import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your App component
// Assuming your main CSS is in src/styles/globals.css
import './styles/globals.css'; 

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found! Make sure an element with id="root" exists in your index.html.');
}