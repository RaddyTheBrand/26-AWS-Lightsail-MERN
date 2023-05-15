import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './routes/Home/home';
import About from './routes/About/about';
import Books from './routes/Books/books';

function App() {
  return ( 
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
