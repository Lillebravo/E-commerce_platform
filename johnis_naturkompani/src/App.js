import React from 'react';
import { Menu, Search, User, ShoppingCart } from 'lucide-react';
import heroImage from './assets/hiking.webp';

const App = () => {
    return (
      <div className="min-h-screen">
        {/* Sticky Navigation */}
        <nav className="sticky top-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Menu className="h-6 w-6" />
                <span className="text-xl font-bold text-green-800">Johnis Naturkompani</span>
              </div>
              
              <div className="flex-1 max-w-2xl mx-4">
                <div className="flex">
                  <select className="px-4 py-2 bg-gray-100 rounded-l">
                    <option>All Categories</option>
                  </select>
                  <div className="flex-1 relative">
                    <input 
                      type="text"
                      placeholder="What are you looking for?"
                      className="w-full px-4 py-2 bg-gray-100"
                    />
                    <button className="absolute right-0 top-0 h-full px-4 bg-amber-600">
                      <Search className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <User className="h-6 w-6" />
                <ShoppingCart className="h-6 w-6" />
              </div>
            </div>
          </div>
        </nav>
  
        {/* Hero Banner */}
        <div className="relative h-96">
          <img
            src={heroImage}
            alt="Hero banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold">SINGLES WEEK</h1>
              <p className="text-2xl mt-4">EXTRA RABATT PÅ ALLT!</p>
            </div>
          </div>
        </div>
  
        {/* Featured Products */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">VÅRA UTVALDA FAVORITER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow">
                <img
                  src="/api/placeholder/300/300"
                  alt="Product"
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="bg-black text-white px-2 py-1 inline-block mb-2">
                  Save 22%
                </div>
                <h3 className="font-bold">Product Name</h3>
                <p className="text-gray-600">Brand Name</p>
                <p className="text-green-600 mt-2">In Stock</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Category Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['KIDÅKNING', 'SOVSÄCKAR', 'SPARSKIDOR', 'VANDRINGSKLÄDER'].map((category) => (
              <div key={category} className="relative h-64">
                <img
                  src="/api/placeholder/400/300"
                  alt={category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-100 mt-12 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold mb-4">Help & Support</h4>
                <ul className="space-y-2">
                  <li>Return Policy</li>
                  <li>Terms of Service</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company Info</h4>
                <ul className="space-y-2">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Location</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li>Phone: +46 XX XXX XX XX</li>
                  <li>Email: info@example.com</li>
                  <li>Support Hours: 8:00 - 16:00</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Newsletter</h4>
                <input
                  type="email"
                  placeholder="E-mail address"
                  className="w-full px-4 py-2 rounded mb-2"
                />
                <button className="bg-amber-600 text-white px-4 py-2 rounded w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default App;