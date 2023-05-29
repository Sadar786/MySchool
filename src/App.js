import './App.css';
import { Home, Blog, About, Contact, Courses,SignIn, SignUp, Registration } from './pages';
import { Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/formReg" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
