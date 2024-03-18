import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/reset.css';
import './styles/style.css';

const container = document.getElementById("app");

const root = createRoot(container);

root.render(<App />);