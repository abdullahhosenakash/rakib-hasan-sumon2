import './App.css';
import Home from './Pages/Portfolio/Home';
import Header from './Pages/Shared/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/Shared/NotFound';
import StreetPhotography from './Pages/Portfolio/StreetPhotography';
import Footer from './Pages/Shared/Footer';
import DocumentaryPhotography from './Pages/Portfolio/DocumentaryPhotography';
import TravelPhotography from './Pages/Portfolio/TravelPhotography';
import FineArtPhotography from './Pages/Portfolio/FineArtPhotography';
import NaturePhotography from './Pages/Portfolio/NaturePhotography';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/streetPhotography' element={<StreetPhotography />} />
        <Route path='/documentaryPhotography' element={<DocumentaryPhotography />} />
        <Route path='/travelPhotography' element={<TravelPhotography />} />
        <Route path='/fineArtPhotography' element={<FineArtPhotography />} />
        <Route path='/naturePhotography' element={<NaturePhotography />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
