
import { useState } from 'react';
import { ChevronDown, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

interface Restaurant {
  id: string;
  name: string;
  handle: string;
  image: string;
}

interface RestaurantSwitcherProps {
  onAddRestaurant: () => void;
}

const RestaurantSwitcher = ({ onAddRestaurant }: RestaurantSwitcherProps) => {
  // Mock data - in real app this would come from context/state management
  const [restaurants] = useState<Restaurant[]>([
    {
      id: '1',
      name: 'Pollos Hermanos',
      handle: '@usuarioinstagram',
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    },
    {
      id: '2', 
      name: 'KFC',
      handle: '@kfc_oficial',
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    },
    {
      id: '3',
      name: 'Pollos Hermanos',
      handle: '@HuellaMolina',
      image: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    }
  ]);

  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant>(restaurants[0]);

  return (
    <div className="p-6 border-b border-gray-200">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-0 h-auto hover:bg-transparent">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={activeRestaurant.image}
                  alt={activeRestaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{activeRestaurant.name}</h3>
                <p className="text-sm text-gray-500">{activeRestaurant.handle}</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-80 bg-white border border-gray-200 shadow-lg" align="start">
          <div className="p-2">
            <div className="text-xs font-medium text-gray-500 mb-2 px-2">ATRÁS</div>
            
            {restaurants.map((restaurant) => (
              <DropdownMenuItem
                key={restaurant.id}
                onClick={() => setActiveRestaurant(restaurant)}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{restaurant.name}</div>
                  <div className="text-sm text-gray-500">{restaurant.handle}</div>
                  <div className="text-xs text-gray-400">Madrid</div>
                </div>
                {activeRestaurant.id === restaurant.id && (
                  <Check className="w-4 h-4 text-green-500" />
                )}
              </DropdownMenuItem>
            ))}
            
            <DropdownMenuSeparator className="my-2" />
            
            <DropdownMenuItem
              onClick={onAddRestaurant}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Plus className="w-5 h-5 text-gray-500" />
              </div>
              <div className="font-medium text-gray-700">Agregar nuevo restaurante</div>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default RestaurantSwitcher;
