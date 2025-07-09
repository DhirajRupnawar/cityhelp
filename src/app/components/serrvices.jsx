// pages/services.js
import Head from 'next/head';

const services = [
  {
    id: 1,
    title: 'Home Cleaning',
    description: 'Professional cleaning services for your entire home, including deep cleaning and regular maintenance.',
    icon: '🧹'
  },
  {
    id: 2,
    title: 'Laundry Services',
    description: 'Wash, dry, fold, and ironing services to keep your clothes fresh and clean.',
    icon: '👕'
  },
  {
    id: 3,
    title: 'Pet Grooming',
    description: 'Professional grooming services to keep your pets clean, healthy, and looking their best.',
    icon: '🐶'
  },
  {
    id: 4,
    title: 'Plumbing',
    description: 'Expert plumbing services for repairs, installations, and maintenance.',
    icon: '🚰'
  },
  {
    id: 5,
    title: 'Electrical',
    description: 'Certified electricians for all your wiring, repairs, and installation needs.',
    icon: '💡'
  },
  {
    id: 6,
    title: 'Carpentry',
    description: 'Custom woodwork, furniture repair, and general carpentry services.',
    icon: '🪚'
  },
  {
    id: 7,
    title: 'Gardening',
    description: 'Landscaping, lawn care, and plant maintenance services.',
    icon: '🌿'
  },
  {
    id: 8,
    title: 'Personal Grooming',
    description: 'Haircuts, styling, and personal care services at your convenience.',
    icon: '💇'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Services | Home Service Provider</title>
        <meta name="description" content="Browse all our home and personal services" />
      </Head>

      <header className="bg-yellow-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Our Premium Services</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our curated selection of professional services designed to elevate your home and lifestyle.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-5xl mb-6 text-yellow-400">{service.icon}</div>
                <h2 className="text-xl font-bold text-black mb-3">{service.title}</h2>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <button className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer removed as requested */}
    </div>
  );
}