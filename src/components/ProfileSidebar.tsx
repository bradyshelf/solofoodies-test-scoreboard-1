
import { useState } from 'react';
import { 
  User, 
  Heart, 
  History, 
  Mail, 
  Bell, 
  LogOut,
  ChevronDown,
  Plus,
  Pause,
  RotateCcw
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import RestaurantSwitcher from './RestaurantSwitcher';
import AddRestaurantDialog from './AddRestaurantDialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ProfileSidebarProps {
  onClose: () => void;
}

const ProfileSidebar = ({ onClose }: ProfileSidebarProps) => {
  const { signOut, userRole } = useAuth();
  const navigate = useNavigate();
  const [isAddRestaurantOpen, setIsAddRestaurantOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleAddRestaurant = () => {
    setIsAddRestaurantOpen(true);
  };

  const handleRestaurantAdded = (restaurant: any) => {
    console.log('New restaurant added:', restaurant);
    // In a real app, this would update the restaurant list in state management
  };

  const handleManageSubscriptions = () => {
    navigate('/subscription-management');
    onClose();
  };

  const allMenuItems = [
    {
      title: "Mi perfil",
      icon: User,
      onClick: () => {
        navigate('/profile');
        onClose();
      }
    },
    {
      title: "Colaboraciones",
      icon: Heart,
      onClick: () => {
        console.log("Navigate to collaborations");
        onClose();
      }
    },
    {
      title: "Historial",
      icon: History,
      onClick: () => {
        console.log("Navigate to history");
        onClose();
      }
    },
    {
      title: "Enviar invitación",
      icon: Mail,
      onClick: () => {
        console.log("Navigate to send invitation");
        onClose();
      }
    },
    {
      title: "Suscripción",
      icon: Bell,
      onClick: () => {
        navigate('/subscription-management');
        onClose();
      },
      showForRoles: ['restaurant'] // Only show for restaurant users
    }
  ];

  // Filter menu items based on user role
  const menuItems = allMenuItems.filter(item => {
    if (item.showForRoles) {
      return item.showForRoles.includes(userRole || '');
    }
    return true; // Show items without role restrictions for all users
  });

  const policyItems = [
    {
      title: "Políticas de privacidad",
      onClick: () => {
        navigate('/privacy-policy');
        onClose();
      }
    },
    {
      title: "Condiciones de uso y contratación",
      onClick: () => {
        navigate('/terms-of-service');
        onClose();
      }
    },
    {
      title: "Política de cookies",
      onClick: () => {
        navigate('/cookie-policy');
        onClose();
      }
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header with Restaurant Switcher or Profile Dropdown */}
      {userRole === 'restaurant' ? (
        <div className="p-6 border-b border-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              <div className="flex items-center justify-between space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Pollos Hermanos</h3>
                    <p className="text-sm text-gray-500">@usuarioinstagram</p>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white border border-gray-200 shadow-lg z-50">
              {/* Restaurant Items */}
              <div className="p-2">
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">Pollos Hermanos</p>
                    <p className="text-xs text-gray-500">@usuarioinstagram</p>
                    <p className="text-xs text-blue-600">Madrid, España</p>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">Pollos Hermanos</p>
                    <p className="text-xs text-gray-500">@usuarioinstagram</p>
                    <p className="text-xs text-gray-500">Madrid, España</p>
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-gray-600">
                <span className="text-sm">Restaurantes pausados</span>
              </DropdownMenuItem>

              <div className="p-2">
                <div className="flex items-center justify-between space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src="/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900">@test</p>
                      <p className="text-xs text-red-500">Pausado</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Pause className="w-3 h-3 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <RotateCcw className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleAddRestaurant} className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Agregar nuevo restaurante</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Policy Links */}
              {policyItems.map((item) => (
                <DropdownMenuItem key={item.title} onClick={item.onClick}>
                  <span className="text-sm text-gray-600">{item.title}</span>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator />

              {/* Solofoodies Branding */}
              <div className="p-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SF</span>
                  </div>
                  <span className="text-sm font-medium">Solofoodies</span>
                </div>
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleSignOut} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Pollos Hermanos</h3>
              <p className="text-sm text-gray-500">@usuarioinstagram</p>
            </div>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex-1 px-4 py-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={item.onClick}
              className="w-full flex items-center px-3 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-base text-gray-900">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Policy Items - Only show for non-restaurant users since restaurant users have it in dropdown */}
        {userRole !== 'restaurant' && (
          <>
            <div className="space-y-1">
              {policyItems.map((item) => (
                <button
                  key={item.title}
                  onClick={item.onClick}
                  className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="text-sm text-gray-600">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Solofoodies Branding */}
            <div className="mt-6 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SF</span>
                </div>
                <span className="text-sm font-medium">Solofoodies</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer - Sign Out - Only show for non-restaurant users */}
      {userRole !== 'restaurant' && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-3 py-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="text-base">Cerrar sesión</span>
          </button>
        </div>
      )}

      {/* Add Restaurant Dialog */}
      <AddRestaurantDialog
        isOpen={isAddRestaurantOpen}
        onClose={() => setIsAddRestaurantOpen(false)}
        onAdd={handleRestaurantAdded}
      />
    </div>
  );
};

export default ProfileSidebar;
