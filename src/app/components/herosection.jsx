import React from 'react';
import { MapPin, Search, Star, Phone, Mail, Clock } from 'lucide-react';

export default function HomeServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
        {/* Faint Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Premium <span className="text-yellow-600">Home Services</span> at Your Doorstep
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Book trusted professionals for all your home needs - from cleaning to repairs, all in one place.
                </p>
              </div>

              {/* Search Section */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-700"
                    />
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-700"
                    />
                  </div>
                </div>
                <button className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-3 sm:py-4 rounded-lg font-medium sm:font-semibold text-base sm:text-lg transition-all duration-200 shadow-sm hover:shadow-md">
                  Find Services
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black">Verified Pros</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Background checked</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black">Fast Booking</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Available 24/7</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm col-span-2 sm:col-span-1">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black">Live Support</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Right Side - Promotion Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 relative overflow-hidden h-full max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-yellow-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-yellow-200 rounded-full opacity-20"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                      LIMITED TIME OFFER
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-2">
                      30% Off First Service
                    </h2>
                    <p className="text-gray-600 text-sm">
                      New customers get exclusive discount
                    </p>
                  </div>

                  {/* Promotional Content */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="bg-yellow-50 rounded-xl p-4 sm:p-5 text-center mb-6 border border-yellow-100">
                      <h3 className="text-xl font-bold text-black mb-1">₹499<span className="text-sm font-normal text-gray-600">/service</span></h3>
                      <p className="text-gray-600 text-sm mb-3">Starting price</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Professional service</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Quality guaranteed</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Easy online booking</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-all duration-200 mb-4">
                      Claim Your Discount
                    </button>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">
                        Offer expires soon • Terms apply
                      </p>
                      <div className="flex items-center justify-center gap-3 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>1800-123-4567</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          <span>help@homeservice.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-300 rounded-full opacity-20 animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-pulse hidden sm:block" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              We provide exceptional home services with professionalism and care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Quality Professionals</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                All our service providers are thoroughly vetted and highly rated by customers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">On-Time Guarantee</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We value your time. Our professionals arrive as scheduled or your service is free.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our customer care team is available round the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Promotion Banner (shown only on mobile) */}
      <div className="lg:hidden bg-yellow-600 py-6 px-4">
        <div className="max-w-md mx-auto text-center text-white">
          <h3 className="text-xl font-bold mb-2">Get 30% Off Your First Service</h3>
          <p className="text-sm mb-4">Use code WELCOME30 at checkout</p>
          <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}