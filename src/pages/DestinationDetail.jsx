import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import travelData from '../data/travel.json';

/**
 * Destination detail page component
 * Displays detailed information about a specific destination based on slug
 */
const DestinationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find destination by slug
    const foundDestination = travelData.find(dest => dest.slug === slug);
    
    if (foundDestination) {
      setDestination(foundDestination);
    }
    
    setLoading(false);
  }, [slug]);

  // Show loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-96">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  // Show 404 if destination not found
  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏝️</div>
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-xl text-base-content/70 mb-8">
            The destination you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-x-4">
            <Link to="/destinations" className="btn btn-primary">
              Browse Destinations
            </Link>
            <button onClick={() => navigate(-1)} className="btn btn-outline">
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumbs text-sm mb-6">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li>{destination.title}</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 rounded-lg overflow-hidden mb-8" 
           style={{backgroundImage: `url(${destination.image})`}}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{destination.title}</h1>
            <p className="mb-5 text-lg">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">About {destination.title}</h2>
              <p className="text-base-content/80 mb-6">
                {destination.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">What to Expect</h3>
              <ul className="list-disc list-inside space-y-2 text-base-content/80 mb-6">
                <li>Amazing cultural experiences and local traditions</li>
                <li>Breathtaking landscapes and photo opportunities</li>
                <li>Delicious local cuisine and dining experiences</li>
                <li>Professional tour guides and local insights</li>
                <li>Comfortable accommodations and transportation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
              <p className="text-base-content/80 mb-6">
                The best time to visit {destination.title} is during the spring and fall months 
                when the weather is mild and perfect for outdoor activities and sightseeing.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Book Your Trip</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Starting from</span>
                  <span className="text-2xl font-bold text-primary">$1,299</span>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <span className="ml-2">4.8 (124 reviews)</span>
                </div>
                <Link to="/contact" className="btn btn-primary w-full">
                  Book Now
                </Link>
                <Link to="/contact" className="btn btn-outline w-full">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>7-10 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Group Size:</span>
                  <span>2-15 people</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span>English</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty:</span>
                  <span className="badge badge-success">Easy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
