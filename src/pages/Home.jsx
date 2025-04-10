import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

export default function Home() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const featuredDestinations = [
    {
      city: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
      price: '499',
      description: 'The City of Lights, known for its art, fashion, gastronomy, and culture.',
      temperature: '15°C - 25°C',
      bestTime: 'April to June, October',
      thingsToDo: ['Visit the Eiffel Tower', 'Louvre Museum', 'Cruise on the Seine River'],
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80',
      price: '799',
      description: 'A high-tech city blended with rich culture, shrines, and sushi delights.',
      temperature: '10°C - 28°C',
      bestTime: 'March to May, October to November',
      thingsToDo: ['Explore Shibuya Crossing', 'Visit Senso-ji Temple', 'Try sushi at Tsukiji Market'],
    },
    {
      city: 'New York',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
      price: '399',
      description: 'The city that never sleeps — skyscrapers, Broadway shows, and bustling streets.',
      temperature: '5°C - 30°C',
      bestTime: 'April to June, September to November',
      thingsToDo: ['See Times Square', 'Visit Central Park', 'Go up the Empire State Building'],
    },
    {
      city: 'Rome',
      country: 'Italy',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      price: '429',
      description: 'A historic city filled with Roman ruins, cathedrals, and Italian cuisine.',
      temperature: '10°C - 30°C',
      bestTime: 'April to June, September to October',
      thingsToDo: ['Tour the Colosseum', 'Visit the Vatican', 'Enjoy gelato by the Trevi Fountain'],
    },
    {
      city: 'Sydney',
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '899',
      description: 'A sunny harbor city known for its Opera House, beaches, and outdoor vibe.',
      temperature: '15°C - 26°C',
      bestTime: 'September to November, March to May',
      thingsToDo: ['Climb Sydney Harbour Bridge', 'Relax on Bondi Beach', 'Explore Taronga Zoo'],
    },
    {
        city: 'Cape Town',
        country: 'South Africa',
        image: 'https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '729',
        description: 'A coastal gem surrounded by mountains, wildlife, and culture.',
        temperature: '7°C - 27°C',
        bestTime: 'March to May, September to November',
        thingsToDo: ['Hike Table Mountain', 'Visit Robben Island', 'Explore the V&A Waterfront'],
      }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! The booking process was smooth and hassle-free.',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: "Best prices I've found for international flights. Will definitely use again!",
    },
    {
      name: 'Emma Davis',
      rating: 4,
      comment: 'Great customer service and competitive prices.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
            alt="Airplane wing view"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Your Journey Begins Here
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-300">
            Discover amazing destinations and book your next adventure with confidence.
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-6">
          <div className="flex gap-4 mb-4">
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                isRoundTrip
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setIsRoundTrip(true)}
            >
              Round Trip
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                !isRoundTrip
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setIsRoundTrip(false)}
            >
              One Way
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <input
                type="text"
                placeholder="Departure City"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <input
                type="text"
                placeholder="Arrival City"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Departure</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {isRoundTrip && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Return</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Passengers</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
            <Search size={20} />
            <span>Search Flights</span>
          </button>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <img
                src={destination.image}
                alt={destination.city}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{destination.city}, {destination.country}</h3>
                <p className="text-gray-600 text-sm">{destination.description}</p>
                <p className="text-sm text-gray-500">🌡️ Temp: {destination.temperature}</p>
                <p className="text-sm text-gray-500">📅 Best Time: {destination.bestTime}</p>
                <p className="text-sm text-gray-500">🎯 Things to do:</p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  {destination.thingsToDo.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${destination.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.comment}"</p>
                <p className="font-medium text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
