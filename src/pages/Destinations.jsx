import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DestinationCard } from '../components';
import travelData from '../data/travel.json';

/**
 * Destinations page component
 * Displays a grid of destination cards with search and filter functionality
 */
const Destinations = () => {
  const [searchParams] = useSearchParams();
  const [destinations, setDestinations] = useState(travelData);
  const [filteredDestinations, setFilteredDestinations] = useState(travelData);
  const [searchTerm, setSearchTerm] = useState('');

  // Get search parameters from URL
  const urlDestination = searchParams.get('destination') || '';
  const urlOrigin = searchParams.get('origin') || '';

  useEffect(() => {
    // Filter destinations based on search parameters
    let filtered = destinations;

    if (urlDestination) {
      filtered = filtered.filter(dest =>
        dest.title.toLowerCase().includes(urlDestination.toLowerCase()) ||
        dest.description.toLowerCase().includes(urlDestination.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(dest =>
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  }, [destinations, urlDestination, searchTerm]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
        <p className="text-xl text-base-content/70">
          Discover amazing places around the world
        </p>
        {urlDestination && (
          <div className="mt-4">
            <span className="badge badge-primary badge-lg">
              Searching for: {urlDestination}
            </span>
          </div>
        )}
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="form-control w-full md:w-auto">
            <input
              type="text"
              placeholder="Search destinations..."
              className="input input-bordered w-full md:w-80"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Results Count */}
          <div className="text-base-content/70">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        /* No Results Message */
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">No destinations found</h3>
          <p className="text-base-content/70 mb-4">
            Try adjusting your search criteria or browse all destinations
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              window.history.replaceState({}, '', '/destinations');
            }}
            className="btn btn-primary"
          >
            Show All Destinations
          </button>
        </div>
      )}
    </div>
  );
};

export default Destinations;
