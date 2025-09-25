import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Search bar
 */
const SearchBar = () => {
  const navigate = useNavigate();
  
  // State for form inputs
  const [searchData, setSearchData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to destinations page with search parameters
    const searchParams = new URLSearchParams(searchData);
    navigate(`/destinations?${searchParams.toString()}`);
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-8">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white mb-8">
            Find amazing destinations and create unforgettable memories
          </p>
          
          {/* Search Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Origin Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">From</span>
                    </label>
                    <input
                      type="text"
                      name="origin"
                      placeholder="Origin city"
                      className="input input-bordered w-full"
                      value={searchData.origin}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Destination Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">To</span>
                    </label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      className="input input-bordered w-full"
                      value={searchData.destination}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Departure Date */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Departure</span>
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      className="input input-bordered w-full"
                      value={searchData.departureDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Return Date */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Return</span>
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      className="input input-bordered w-full"
                      value={searchData.returnDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Passengers */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Passengers</span>
                    </label>
                    <select
                      name="passengers"
                      className="select select-bordered w-full"
                      value={searchData.passengers}
                      onChange={handleInputChange}
                    >
                      <option value={1}>1 Passenger</option>
                      <option value={2}>2 Passengers</option>
                      <option value={3}>3 Passengers</option>
                      <option value={4}>4 Passengers</option>
                      <option value={5}>5+ Passengers</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary btn-lg">
                    🔍 Search Destinations
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
