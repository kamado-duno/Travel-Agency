import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';

/**
 * Main layout component that wraps all pages
 * Includes navigation bar and footer
 * Uses React Router's Outlet to render page content
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
