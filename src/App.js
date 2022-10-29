import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
