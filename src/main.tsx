import { createRoot } from 'react-dom/client';

import './styles/global.css';

import App from './App.tsx';
import { ScrollProvider } from './contexts';

createRoot(document.getElementById('root')!).render(
  <ScrollProvider>
    <App />
  </ScrollProvider>
);
