import { useState } from "react";

/**
 * Contact page component
 * Displays contact information and a contact form
 */
const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelType: "leisure",
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (no actual backend logic required)
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! We will get back to you within 24 hours."
      );
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        travelType: "leisure",
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-base-content/70">
          Get in touch with our travel experts to plan your perfect trip
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Get in Touch</h2>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-content">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-base-content/70">
                      Muster Straße 123, Muster Stadt
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-secondary-content">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-base-content/70">+49 123 456789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-content">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-base-content/70">
                      info@travelagency.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-info rounded-full flex items-center justify-center">
                    <span className="text-info-content">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-base-content/70">
                      Mon-Fri: 9AM-6PM
                      <br />
                      Sat-Sun: 10AM-4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-success">✓</span>
                  <span>Expert travel consultants</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-success">✓</span>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-success">✓</span>
                  <span>Best price guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-success">✓</span>
                  <span>Customized travel packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send us a Message</h2>

            {submitMessage && (
              <div className="alert alert-success mb-6">
                <span>{submitMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="input input-bordered"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+49 (123) 456-7890"
                  className="input input-bordered"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              {/* Travel Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Travel Type</span>
                </label>
                <select
                  name="travelType"
                  className="select select-bordered"
                  value={formData.travelType}
                  onChange={handleInputChange}
                >
                  <option value="leisure">Leisure Travel</option>
                  <option value="business">Business Travel</option>
                  <option value="adventure">Adventure Travel</option>
                  <option value="family">Family Vacation</option>
                  <option value="honeymoon">Honeymoon</option>
                  <option value="group">Group Travel</option>
                </select>
              </div>

              {/* Subject */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject *</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What can we help you with?"
                  className="input input-bordered"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message *</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                  className="textarea textarea-bordered h-32"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
