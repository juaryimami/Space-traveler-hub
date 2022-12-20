import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavLink from './components/navBar/NavLink';
import Mission from './components/mission/Mission';
import RocketCard from './components/RocketCard/RocketCard';
import Profile from './components/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <NavLink />
      <Routes>
        <Route path="/" element={<RocketCard />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
