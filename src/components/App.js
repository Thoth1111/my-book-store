import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from '../routes/Books';
import Categories from '../routes/Categories';
import NavBar from './Navbar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
