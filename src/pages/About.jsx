/**
 * About page component
 * Displays information about the travel agency company
 */
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-r from-primary to-secondary rounded-lg mb-8">
        <div className="hero-content text-center text-primary-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About TravelAgency</h1>
            <p className="mb-5 text-lg">
              Your trusted partner in creating unforgettable travel experiences
              since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Our Story */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Our Story</h2>
            <p className="text-base-content/80 mb-4">
              Founded in 2010, TravelAgency began as a small family business
              with a simple mission: to help people discover the world's most
              beautiful destinations while creating memories that last a
              lifetime.
            </p>
            <p className="text-base-content/80 mb-4">
              Over the years, we've grown from a local travel service to a
              globally recognized agency, but our core values remain the same.
              We believe that travel has the power to transform lives, broaden
              perspectives, and bring people together.
            </p>
            <p className="text-base-content/80">
              Today, we're proud to have helped over 50,000 travelers explore
              more than 100 destinations worldwide, and we're just getting
              started.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Our Mission</h2>
            <p className="text-base-content/80 mb-4">
              To provide exceptional travel experiences that exceed our
              customers' expectations while promoting sustainable and
              responsible tourism practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-content text-xs">✓</span>
                </div>
                <span>
                  Personalized travel planning tailored to your preferences
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-content text-xs">✓</span>
                </div>
                <span>24/7 customer support throughout your journey</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-content text-xs">✓</span>
                </div>
                <span>
                  Sustainable tourism practices that benefit local communities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full bg-primary">
                  <div className="flex items-center justify-center h-full text-primary-content text-2xl">
                    👨‍💼
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">John Smith</h3>
              <p className="text-primary">CEO & Founder</p>
              <p className="text-sm text-base-content/70">
                With 15+ years in the travel industry, John leads our team with
                passion and expertise.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full bg-secondary">
                  <div className="flex items-center justify-center h-full text-secondary-content text-2xl">
                    👩‍💼
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Sarah Johnson</h3>
              <p className="text-secondary">Travel Consultant</p>
              <p className="text-sm text-base-content/70">
                Sarah specializes in luxury travel and has visited over 80
                countries worldwide.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full bg-accent">
                  <div className="flex items-center justify-center h-full text-accent-content text-2xl">
                    👨‍💻
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Mike Chen</h3>
              <p className="text-accent">Adventure Specialist</p>
              <p className="text-sm text-base-content/70">
                Mike designs thrilling adventure tours and outdoor experiences
                for adrenaline seekers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <span className="text-3xl">✈️</span>
          </div>
          <div className="stat-title">Happy Travelers</div>
          <div className="stat-value text-primary">50K+</div>
          <div className="stat-desc">Since 2010</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <span className="text-3xl">🌍</span>
          </div>
          <div className="stat-title">Destinations</div>
          <div className="stat-value text-secondary">100+</div>
          <div className="stat-desc">Worldwide</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-accent">
            <span className="text-3xl">⭐</span>
          </div>
          <div className="stat-title">Customer Rating</div>
          <div className="stat-value text-accent">4.9</div>
          <div className="stat-desc">Out of 5 stars</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-info">
            <span className="text-3xl">🏆</span>
          </div>
          <div className="stat-title">Awards Won</div>
          <div className="stat-value text-info">25</div>
          <div className="stat-desc">Industry recognition</div>
        </div>
      </div>
    </div>
  );
};

export default About;
