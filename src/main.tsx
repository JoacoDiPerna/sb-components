import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
export { MyLabel } from './components/MyLabel';
export { Button } from './stories/Button';
export { Header } from './stories/Header';
export { Page } from './stories/Page';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
