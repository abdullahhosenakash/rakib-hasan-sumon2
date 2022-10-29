import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/Shared/NotFound';
import StreetPhotography from './Pages/StreetPhotography/StreetPhotography';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/streetPhotography' element={<StreetPhotography />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
