import React, { useEffect, useState } from 'react';
import { Star, Clock, Phone, Shield, Award, HeartHandshake } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Star,
      title: "Quality Professionals",
      description: "All our service providers are thoroughly vetted and highly rated by customers.",
      delay: "0ms"
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We value your time. Our professionals arrive as scheduled or your service is free.",
      delay: "200ms"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Our customer care team is available round the clock to assist you.",
      delay: "400ms"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive insurance coverage for all services.",
      delay: "600ms"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in service delivery and customer satisfaction.",
      delay: "800ms"
    },
    {
      icon: HeartHandshake,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
      delay: "1000ms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-yellow-600 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Our Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">
              Why Choose Our
              <span className="text-yellow-600 block mt-1">Services?</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide exceptional home services with professionalism, care, and an unwavering commitment to quality
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
                style={{
                  transitionDelay: service.delay,
                  transitionDuration: '800ms'
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7 text-yellow-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover Effect Line */}
                <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;