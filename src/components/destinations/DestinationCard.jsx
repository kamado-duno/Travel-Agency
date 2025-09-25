import { Link } from 'react-router-dom';

/**
 * Destination card 
 */
const DestinationCard = ({ destination }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </figure>
      
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">
          {destination.title}
          <div className="badge badge-secondary">Popular</div>
        </h2>
        
        <p className="text-base-content/70 line-clamp-3">
          {destination.description}
        </p>
        
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <div className="rating rating-sm">
              <input type="radio" name={`rating-${destination.id}`} className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name={`rating-${destination.id}`} className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name={`rating-${destination.id}`} className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name={`rating-${destination.id}`} className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name={`rating-${destination.id}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
            </div>
            <span className="text-sm text-base-content/60">4.8</span>
          </div>
          
          <Link 
            to={`/destinations/${destination.slug}`}
            className="btn btn-primary btn-sm"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
