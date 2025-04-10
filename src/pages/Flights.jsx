import React from 'react';
import { Plane } from 'lucide-react';

export default function Flights() {
  const availableFlights = [
    {
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departure: '2025-04-01 08:00',
      arrival: '2025-04-01 20:00',
      price: 599,
      airline: 'SkyWay Airlines',
      stops: 0,
    },
    {
      from: 'Los Angeles (LAX)',
      to: 'Tokyo (HND)',
      departure: '2025-04-02 10:30',
      arrival: '2025-04-03 14:30',
      price: 899,
      airline: 'SkyWay Airlines',
      stops: 1,
    },
    {
      from: 'Chicago (ORD)',
      to: 'Paris (CDG)',
      departure: '2025-04-03 15:45',
      arrival: '2025-04-04 07:45',
      price: 749,
      airline: 'SkyWay Airlines',
      stops: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Flights</h1>
        
        <div className="space-y-6">
          {availableFlights.map((flight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <Plane className="h-6 w-6 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-900">{flight.airline}</span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Departure</p>
                      <p className="font-medium">{flight.from}</p>
                      <p className="text-sm text-gray-500">{new Date(flight.departure).toLocaleString()}</p>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">
                          {flight.stops === 0 ? 'Direct Flight' : `${flight.stops} Stop`}
                        </p>
                        <div className="relative mt-2">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <span className="bg-white px-2 text-sm text-gray-500">
                              {Math.round((new Date(flight.arrival).getTime() - new Date(flight.departure).getTime()) / (1000 * 60 * 60))}h
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Arrival</p>
                      <p className="font-medium">{flight.to}</p>
                      <p className="text-sm text-gray-500">{new Date(flight.arrival).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col items-center">
                  <p className="text-3xl font-bold text-blue-600">${flight.price}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}