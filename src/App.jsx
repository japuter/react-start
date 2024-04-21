import './App.css';
import Home from './components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';
import Upload from './components/Upload'
const App = () => {
  return (
    <Router>
      <h1>My App</h1>


    <nav>
    <Link to="/Etusivu">Etusivu</Link>
    <Link to="/Profile">Profiili</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/upload' element={<Upload />} >/
    </Routes>


      </Router>
  );
};
export default App;
