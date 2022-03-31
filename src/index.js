import ReactDOMClient from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";import './bootstrap.min.css';
import ProductAdd from './Views/ProductAdd'
import App from './App';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="ProductAdd" element={<ProductAdd />} />
        </Routes>
    </BrowserRouter>
);