import { SearchBar } from '../components';

/**
 * Home page component
 * Displays the main search interface for finding travel destinations
 */
const Home = () => {
  return (
    <div>
      {/* Hero Section with Search Bar */}
      <SearchBar />
      
      {/* Additional sections can be added here */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-base-content/70">
              We make your travel dreams come true with our exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Destinations</h3>
              <p className="text-base-content/70">
                Carefully curated destinations around the world
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-base-content/70">
                Competitive prices with no hidden fees
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-base-content/70">
                Round-the-clock customer support for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
