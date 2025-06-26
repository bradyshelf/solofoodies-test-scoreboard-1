
import React, { useState } from 'react';
import { Search, MapPin, Star, Users, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RestaurantExploreView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock popular foodie profiles data
  const popularFoodies = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      handle: '@mariaeats',
      avatar: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png',
      followerCount: '125K',
      instagramFollowers: 125000,
      youtubeSubscribers: 45000,
      rating: 4.9,
      reviewCount: 47,
      location: 'Madrid, Spain',
      niches: ['Mediterranean', 'Vegan', 'Fine Dining'],
      bio: 'Food enthusiast sharing the best culinary experiences in Madrid',
      collaborationRate: 'Free meal for content',
      engagementRate: '8.5%'
    },
    {
      id: 2,
      name: 'Carlos Martinez',
      handle: '@carlosfoodie',
      avatar: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png',
      followerCount: '89K',
      instagramFollowers: 89000,
      youtubeSubscribers: 23000,
      rating: 4.8,
      reviewCount: 32,
      location: 'Barcelona, Spain',
      niches: ['Street Food', 'Traditional', 'Budget Eats'],
      bio: 'Discovering hidden gems and authentic flavors across Spain',
      collaborationRate: '€200 + Free meal',
      engagementRate: '12.3%'
    },
    {
      id: 3,
      name: 'Sofia Chen',
      handle: '@sofiafoodstories',
      avatar: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png',
      followerCount: '200K',
      instagramFollowers: 200000,
      youtubeSubscribers: 87000,
      rating: 5.0,
      reviewCount: 68,
      location: 'Valencia, Spain',
      niches: ['Asian Fusion', 'Modern Cuisine', 'Brunch'],
      bio: 'Creating visual food stories that inspire culinary adventures',
      collaborationRate: '€500 + Free meal',
      engagementRate: '9.8%'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
            Discover Food Influencers
          </h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search foodies by name, niche, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Popular Foodie Cards */}
        <div className="space-y-4">
          {popularFoodies.map((foodie) => (
            <Card key={foodie.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  {/* Foodie Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={foodie.avatar}
                      alt={foodie.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Foodie Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base">
                          {foodie.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{foodie.handle}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center mt-1 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(foodie.rating) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-xs text-gray-500">
                            ({foodie.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Collaborate Button */}
                      <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 text-sm rounded-full">
                        Collaborate
                      </Button>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 mb-3">{foodie.bio}</p>

                    {/* Stats */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-red-600">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="font-medium">{foodie.followerCount}</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                          <Instagram className="w-4 h-4 mr-1" />
                          <span>{(foodie.instagramFollowers / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex items-center text-red-600">
                          <Youtube className="w-4 h-4 mr-1" />
                          <span>{(foodie.youtubeSubscribers / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="text-green-600">
                          <span className="font-medium">{foodie.engagementRate}</span>
                          <span className="text-xs ml-1">engagement</span>
                        </div>
                      </div>

                      {/* Niches */}
                      <div className="flex flex-wrap gap-1">
                        {foodie.niches.map((niche, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {niche}
                          </Badge>
                        ))}
                      </div>

                      {/* Location and Rate */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-blue-600">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span>{foodie.location}</span>
                        </div>
                        <div className="text-green-600 font-medium">
                          {foodie.collaborationRate}
                        </div>
                      </div>
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

export default RestaurantExploreView;
