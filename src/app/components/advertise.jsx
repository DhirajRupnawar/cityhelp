// components/HomeServicesLayout.js
import React from 'react';
import Image from 'next/image';

const HomeServicesLayout = () => {
  const homeServices = [
    {
      id: 1,
      title: "Plumbing Services",
      description: "Professional plumbing repairs, installations, and maintenance for your home.",
      price: "Starting from $80",
      rating: 4.8,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Electrical Services",
      description: "Licensed electricians for all your electrical needs and safety inspections.",
      price: "Starting from $100",
      rating: 4.9,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Cleaning Services",
      description: "Deep cleaning and regular maintenance for a spotless home.",
      price: "Starting from $60",
      rating: 4.7,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "HVAC Services",
      description: "Heating, ventilation, and air conditioning repair and installation.",
      price: "Starting from $120",
      rating: 4.6,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Landscaping",
      description: "Garden design, lawn care, and outdoor maintenance services.",
      price: "Starting from $90",
      rating: 4.8,
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Painting Services",
      description: "Interior and exterior painting with premium quality materials.",
      price: "Starting from $150",
      rating: 4.5,
      image: "/api/placeholder/300/200"
    }
  ];

  const adBannerData = {
    title: "Get 20% Off Your First Service!",
    subtitle: "Professional Home Services",
    description: "Book any home service today and save on your first appointment. Quality guaranteed!",
    buttonText: "Book Now",
    image: "/api/placeholder/280/400",
    offer: "LIMITED TIME OFFER"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side - Advertisement Banner */}
          <div className="lg:w-1/4 lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={adBannerData.image}
                  alt="Home Services Ad"
                  width={280}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {adBannerData.offer}
                </div>
              </div>
              
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{adBannerData.title}</h3>
                <p className="text-blue-100 text-sm mb-1">{adBannerData.subtitle}</p>
                <p className="text-blue-100 text-sm mb-6">{adBannerData.description}</p>
                
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-200">
                  {adBannerData.buttonText}
                </button>
                
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-blue-100 mt-1">Trusted by 10,000+ customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Professional Home Services</h1>
              <p className="text-gray-600">Find trusted professionals for all your home maintenance needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {homeServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span className="text-sm text-gray-600">{service.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Book Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Content Section */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Home Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Licensed Professionals</h3>
                  <p className="text-gray-600">All our service providers are licensed, insured, and background-checked.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Get your home service needs addressed quickly with our same-day booking.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Money-Back Guarantee</h3>
                  <p className="text-gray-600">100% satisfaction guaranteed or your money back. Quality service every time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesLayout;