
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, X, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SubscriptionManagementPage = () => {
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "Pollos Hermanos",
      instagram: "@UsuarioInstagram",
      status: "Activo",
      plan: "Pago único",
      canPause: false
    },
    {
      id: 2,
      name: "McDonalds 2",
      instagram: "@kadjacjo",
      status: "Activo",
      plan: "Plan Mensual",
      canPause: true
    },
    {
      id: 3,
      name: "McDonalds",
      instagram: "@cento",
      status: "Activo",
      plan: "Plan Mensual",
      canPause: true
    }
  ];

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
    console.log('Pausing restaurant:', restaurantId);
    // Handle pause functionality here
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

            <div>
              <h2 className="text-sm font-medium text-gray-900 mb-3">Restaurantes activos</h2>
              
              <div className="space-y-3">
                {restaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-600">
                              {restaurant.name.charAt(0)}
                            </span>
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
    </div>
  );
};

export default SubscriptionManagementPage;
