
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense} from 'react';
import Loader from './components/Loader.jsx';
const Home = lazy(() => import('./pages/Home.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'));
const Trading = lazy(() => import('./pages/Trading.jsx'));
const Navbar = lazy(() => import('/src/components/Navbar.jsx'));
const ReadBlog = lazy(() => import('./pages/ReadBlog.jsx'));
const Footer = lazy(() => import('./components/footer.jsx'));


function App() {
  return (
      <Suspense fallback={<Loader/>}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/ReadBlog" element={<ReadBlog />} />
        <Route path="/ReadBlog/:blogID" element={<ReadBlog />} />
      </Routes>
      <Footer />
    </Router>
    </Suspense>
  );
}

export default App;


