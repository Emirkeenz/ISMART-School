import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './app/pages/home/home';
import Participants from './admin/pages/Participants';
import Team from './admin/pages/Team';
import Categories from './admin/pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/participants" element={<Participants />} />
        <Route path="/admin/team" element={<Team />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
