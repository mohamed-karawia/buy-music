import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';

import Home from './pages/Aritsts';
import Layout from './components/Layout/Layout';
import Albums from './pages/Albums';
import Song from './pages/Songs';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/albums/:artistId/:albumId" element={<Song />} />
          <Route exact path="/albums/:artistId" element={<Albums />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
      <div id="portal"></div>
    </Router>
  );
}

export default App;
