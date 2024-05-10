import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './app/pages/home/home';
import './index.css';
import Auth from './admin/pages/Auth';
import GameByTime from './admin/pages/GameByTime';
import Categories from './admin/pages/Categories';
import TournamentPage from './admin/pages/TournamentPage';
import Subcategory from './app/pages/subcategory';
import GameByTable2 from './admin/pages/GameByTable2';
import GameByTable from './admin/pages/GameByTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/admin/game-time/:id" element={<GameByTime />} />
        <Route path="/admin/game-table2/:id" element={<GameByTable2 />} />
        <Route path="/admin/game-table/:id" element={<GameByTable />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/tournament" element={<TournamentPage />} />
        <Route path="/subcategory/:id" element={<Subcategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
