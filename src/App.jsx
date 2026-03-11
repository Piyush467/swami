import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/home/Index'));
const Service = lazy(() => import('./pages/service'));
const Books = lazy(() => import('./pages/Books'));
const Products = lazy(() => import('./pages/Products'));
const Academy = lazy(() => import('./pages/Academy'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-text-muted">Loading...</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/books" element={<Books />} />
              <Route path="/products" element={<Products />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
