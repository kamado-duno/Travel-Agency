import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';

/**
 * Main layout component
 * Includes navigation bar and footer
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
