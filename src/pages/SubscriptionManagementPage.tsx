
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowLeft, X, Pause, ChevronDown, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PauseRestaurantDialog from '@/components/PauseRestaurantDialog';
import { useRestaurants } from '@/contexts/RestaurantContext';

const SubscriptionManagementPage = () => {
  const navigate = useNavigate();
  const [pauseDialogOpen, setPauseDialogOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<{ id: number; name: string } | null>(null);
  const [pausedRestaurantsOpen, setPausedRestaurantsOpen] = useState(false);
  
  const { restaurants, pauseRestaurant, reactivateRestaurant } = useRestaurants();

  const activeRestaurants = restaurants.filter(r => r.status === 'Activo');
  const pausedRestaurants = restaurants.filter(r => r.status === 'Pausado');

  const handleBackClick = () => {
    navigate('/dashboard');
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openProfileSidebar'));
    }, 100);
  };

  const handleClose = () => {
    navigate('/dashboard');
  };

  const handlePause = (restaurantId: number) => {
    const restaurant = activeRestaurants.find(r => r.id === restaurantId);
    if (restaurant) {
      setSelectedRestaurant({ id: restaurantId, name: restaurant.name });
      setPauseDialogOpen(true);
    }
  };

  const handleConfirmPause = () => {
    if (selectedRestaurant) {
      pauseRestaurant(selectedRestaurant.id);
      setPausedRestaurantsOpen(true);
      setPauseDialogOpen(false);
      setSelectedRestaurant(null);
    }
  };

  const handleClosePauseDialog = () => {
    setPauseDialogOpen(false);
    setSelectedRestaurant(null);
  };

  const handleReactivate = (restaurantId: number) => {
    reactivateRestaurant(restaurantId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal-like container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-lg font-semibold text-gray-900">Gestionar suscripciones</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <p className="text-sm text-gray-600">
              Administra las suscripciones de tus restaurantes
            </p>

            {/* Active Restaurants */}
            <div>
              <h2 className="text-sm font-medium text-gray-900 mb-3">Restaurantes activos</h2>
              
              <div className="space-y-3">
                {activeRestaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img
                              src={restaurant.image}
                              alt={restaurant.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm">
                              {restaurant.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {restaurant.instagram}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                <span className="text-xs text-gray-600">{restaurant.status}</span>
                              </div>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-600">{restaurant.plan}</span>
                            </div>
                          </div>
                        </div>
                        
                        {restaurant.canPause && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePause(restaurant.id)}
                            className="text-orange-600 border-orange-300 hover:bg-orange-50 text-xs px-3 py-1"
                          >
                            <Pause className="w-3 h-3 mr-1" />
                            Pausar
                          </Button>
                        )}
                        
                        {!restaurant.canPause && (
                          <span className="text-xs text-blue-600 font-medium">
                            Acceso de por vida
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Paused Restaurants */}
            {pausedRestaurants.length > 0 && (
              <Collapsible open={pausedRestaurantsOpen} onOpenChange={setPausedRestaurantsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-sm font-medium text-gray-900">Restaurantes pausados</h2>
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-medium">{pausedRestaurants.length}</span>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500 transition-transform" />
                </CollapsibleTrigger>
                
                <CollapsibleContent className="mt-3">
                  <div className="space-y-3">
                    {pausedRestaurants.map((restaurant) => (
                      <Card key={restaurant.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                <img
                                  src={restaurant.image}
                                  alt={restaurant.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900 text-sm">
                                  {restaurant.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                  {restaurant.instagram}
                                </p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                                    <span className="text-xs text-gray-600">{restaurant.status}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleReactivate(restaurant.id)}
                              className="text-green-600 border-green-300 hover:bg-green-50 text-xs px-3 py-1"
                            >
                              <RotateCcw className="w-3 h-3 mr-1" />
                              Reactivar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}

            {/* Close Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={handleClose}
                className="w-full"
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pause Confirmation Dialog */}
      <PauseRestaurantDialog
        isOpen={pauseDialogOpen}
        onClose={handleClosePauseDialog}
        onConfirm={handleConfirmPause}
        restaurantName={selectedRestaurant?.name || ''}
      />
    </div>
  );
};

export default SubscriptionManagementPage;
