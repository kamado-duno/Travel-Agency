import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, Destinations, DestinationDetail, About, Contact } from './pages';

/**
 * Main App component that sets up routing for the travel agency website
 * Uses React Router for navigation between different pages
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout wrapper for all pages */}
        <Route path="/" element={<MainLayout />}>
          {/* Home page route */}
          <Route index element={<Home />} />
          
          {/* Destinations routes */}
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          
          {/* About page route */}
          <Route path="about" element={<About />} />
          
          {/* Contact page route */}
          <Route path="contact" element={<Contact />} />
          
          {/* 404 Not Found route - redirects to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
