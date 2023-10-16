import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Projects from './pages/Projects';
import DownloadResume from './pages/DownloadResume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Downloads' element={<DownloadResume/>} />
        <Route path='/Contacts' element={<Contact/>} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
