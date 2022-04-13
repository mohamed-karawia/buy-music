import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Aritsts';
import Layout from './components/Layout/Layout';
import Albums from './pages/Albums';
import Songs from './pages/Songs';
import Success from './pages/Success';
import FinalForm from './pages/FinalForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/form" element={<FinalForm />} />
          <Route exact path="/songs" element={<Songs />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
