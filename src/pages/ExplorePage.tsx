
import React, { useState } from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('explorar');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock collaboration data based on the screenshot
  const collaborations = [
    {
      id: 1,
      restaurantName: 'Restaurante Nombre',
      handle: '@idRestaurante',
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png',
      rating: 5.0,
      reviewCount: 5,
      address: 'C/ Marqués del Riscal, 5, 28010, Madrid',
      collaborationType: 'Free Meal',
      partySize: 2,
    },
    {
      id: 2,
      restaurantName: 'Restaurante Nombre',
      handle: '@idRestaurante',
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png',
      rating: 5.0,
      reviewCount: 5,
      address: 'C/ Marqués del Riscal, 5, 28010, Madrid',
      collaborationType: 'Free Meal',
      partySize: 2,
    },
    {
      id: 3,
      restaurantName: 'Restaurante Nombre',
      handle: '@idRestaurante',
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png',
      rating: 5.0,
      reviewCount: 5,
      address: 'C/ Marqués del Riscal, 5, 28010, Madrid',
      collaborationType: 'Free Meal',
      partySize: 2,
    },
  ];

  const tabs = [
    { id: 'explorar', label: 'EXPLORAR' },
    { id: 'solicitados', label: 'SOLICITADOS' },
    { id: 'favoritos', label: 'FAVORITOS' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 pt-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-red-600 border-red-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Title and Location */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Restaurantes populares
          </h1>
          <div className="flex items-center text-blue-600 text-sm">
            <span>MADRID</span>
            <div className="ml-2 w-4 h-4 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-blue-600"></div>
              <div className="w-3 h-0.5 bg-blue-600 rotate-90 absolute"></div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Busca restaurantes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Collaboration Cards */}
        <div className="space-y-4">
          {collaborations.map((collab) => (
            <Card key={collab.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  {/* Restaurant Image */}
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={collab.image}
                      alt={collab.restaurantName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Restaurant Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base">
                          {collab.restaurantName}
                        </h3>
                        <p className="text-gray-500 text-sm">{collab.handle}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center mt-1 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-red-500 text-red-500"
                            />
                          ))}
                          <span className="text-xs text-gray-500">
                            ({collab.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Colab Button */}
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm rounded-full">
                        Colab
                      </Button>
                    </div>

                    {/* Address */}
                    <div className="flex items-center mt-2 text-blue-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{collab.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
