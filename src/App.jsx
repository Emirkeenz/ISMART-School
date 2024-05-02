import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './app/pages/home/home';
import Subcategory from './app/pages/subcategory';
import Participants from './admin/pages/Participants';
import Team from './admin/pages/Team';
import Categories from './admin/pages/Categories';
import './index.css';
import Auth from './admin/pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/admin/participants" element={<Participants />} />
        <Route path="/admin/team" element={<Team />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/subcategory/:id" element={<Subcategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
