import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './app/pages/home/home';
import Subcategory from './app/pages/subcategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subcategory/:id" element={<Subcategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
