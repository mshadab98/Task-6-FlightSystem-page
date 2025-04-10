import React from 'react';
import { Tag, Clock } from 'lucide-react';

export default function Offers() {
  const specialOffers = [
    {
      title: 'Early Bird Special',
      description: 'Book your summer vacation now and save up to 30% on selected destinations.',
      discount: '30%',
      validUntil: '2025-05-31',
      destinations: ['Paris', 'Rome', 'Barcelona'],
      code: 'EARLY30',
    },
    {
      title: 'Last Minute Deals',
      description: 'Grab our last-minute flight deals with up to 25% off for next week\'s travels.',
      discount: '25%',
      validUntil: '2025-04-15',
      destinations: ['London', 'New York', 'Tokyo'],
      code: 'LAST25',
    },
    {
      title: 'Weekend Getaway',
      description: 'Special weekend fares with 20% off on all domestic flights.',
      discount: '20%',
      validUntil: '2025-06-30',
      destinations: ['Miami', 'Las Vegas', 'San Francisco'],
      code: 'WEEKEND20',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Special Offers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{offer.title}</h2>
                <p className="text-blue-100 mt-1">Save up to {offer.discount}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    Valid until {new Date(offer.validUntil).toLocaleDateString()}
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Destinations:</p>
                    <div className="flex flex-wrap gap-2">
                      {offer.destinations.map((destination, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {destination}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Tag className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-600">{offer.code}</span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}