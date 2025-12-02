import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    rootElement.innerHTML = `
      <div style="padding:20px;background:#fee;color:red;font-family:Arial;">
        <h1>Rendering Error</h1>
        <p><strong>${error.message}</strong></p>
        <pre style="background:#fff;padding:10px;overflow:auto;">${error.stack}</pre>
      </div>
    `;
  }
} else {
  document.body.innerHTML = '<div style="padding:20px;color:red;"><h1>ERROR: Root element not found!</h1></div>';
}