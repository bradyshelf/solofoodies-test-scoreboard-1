
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RestaurantExploreView = () => {
  const navigate = useNavigate();

  // Mock popular foodies data
  const popularFoodies = [
    {
      id: 1,
      name: 'Nombre Usuario',
      handle: '@probando_nombre',
      image: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
      followers: '13k',
      engagement: '2,15%',
      colabs: '14',
      juntos: '0',
      rating: 5
    },
    {
      id: 2,
      name: 'Nombre Usuario',
      handle: '@probando_nombre',
      image: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
      followers: '13k',
      engagement: '2,15%',
      colabs: '14',
      juntos: '0',
      rating: 5
    },
    {
      id: 3,
      name: 'Nombre Usuario',
      handle: '@probando_nombre',
      image: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
      followers: '13k',
      engagement: '2,15%',
      colabs: '14',
      juntos: '0',
      rating: 5
    }
  ];

  const handleColabClick = (foodieId: number) => {
    console.log('Colab with foodie:', foodieId);
  };

  const handleMessageClick = (foodieId: number) => {
    console.log('Message foodie:', foodieId);
    // Navigate to specific chat conversation with the foodie
    navigate(`/chat/${foodieId}`);
  };

  return (
    <div className="space-y-4">
      {popularFoodies.map(foodie => (
        <Card key={foodie.id} className="overflow-hidden border-gray-100">
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
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-base">
                      {foodie.handle}
                    </h3>
                    <p className="text-gray-500 text-sm">{foodie.name}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mt-1 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-3 h-3 fill-red-500 text-red-500"
                        />
                      ))}
                      <span className="text-xs text-gray-500">
                        ({foodie.rating})
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleMessageClick(foodie.id)}
                      className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </button>
                    <Button 
                      onClick={() => handleColabClick(foodie.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded-full"
                    >
                      Colab
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{foodie.followers}</div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{foodie.engagement}</div>
                    <div className="text-xs text-gray-500">Engagement</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{foodie.colabs}</div>
                    <div className="text-xs text-gray-500">Colabs</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{foodie.juntos}</div>
                    <div className="text-xs text-gray-500">Juntos</div>
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
