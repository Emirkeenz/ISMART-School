import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './app/pages/home/home';
import './index.css';
import Auth from './admin/pages/Auth';
import GameByTime from './admin/pages/GameByTime';
import GameByTable from './admin/pages/GameByTable';
import Categories from './admin/pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/admin/game-time/:id" element={<GameByTime />} />
        <Route path="/admin/game-table/:id" element={<GameByTable />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
