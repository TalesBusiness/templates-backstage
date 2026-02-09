import '@backstage/cli/asset-types';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@backstage/ui/css/styles.css';

// ✅ seu CSS global (caminho correto)
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
