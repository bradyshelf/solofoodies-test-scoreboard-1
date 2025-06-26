
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Instagram } from 'lucide-react';

const RestaurantExploreView = () => {
  // Mock popular foodies data
  const popularFoodies = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      handle: '@mariafoodielife',
      image: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
      followers: '25.4K',
      engagement: '4.2%',
      location: 'Madrid, Spain',
      niche: 'Mediterranean Cuisine',
      rating: 4.8,
      collaborations: 12
    },
    {
      id: 2,
      name: 'Carlos Mendez',
      handle: '@carloseatsmadrid',
      image: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
      followers: '18.7K',
      engagement: '5.1%',
      location: 'Madrid, Spain',
      niche: 'Fine Dining',
      rating: 4.9,
      collaborations: 8
    },
    {
      id: 3,
      name: 'Ana Silva',
      handle: '@anamadridfood',
      image: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
      followers: '32.1K',
      engagement: '3.8%',
      location: 'Madrid, Spain',
      niche: 'Casual Dining',
      rating: 4.7,
      collaborations: 15
    }
  ];

  const handleInviteClick = (foodieId: number) => {
    console.log('Invite foodie:', foodieId);
    // Handle invite logic here
  };

  return (
    <div className="space-y-4">
      {popularFoodies.map(foodie => (
        <Card key={foodie.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              {/* Foodie Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img 
                  src={foodie.image} 
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
                    <p className="text-gray-500 text-xs">{foodie.handle}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center mt-1 space-x-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{foodie.followers}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Instagram className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{foodie.engagement}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(foodie.rating) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-xs text-gray-500">
                          ({foodie.collaborations})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Invite Button */}
                  <Button 
                    onClick={() => handleInviteClick(foodie.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-sm rounded-full"
                  >
                    Invite
                  </Button>
                </div>

                {/* Niche and Location */}
                <div className="space-y-1">
                  <div className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {foodie.niche}
                  </div>
                  <div className="flex items-center text-blue-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{foodie.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RestaurantExploreView;
