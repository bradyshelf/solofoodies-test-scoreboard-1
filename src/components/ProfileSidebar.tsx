
import { 
  User, 
  Heart, 
  History, 
  Mail, 
  Bell, 
  LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from '@/components/ui/sidebar';

interface ProfileSidebarProps {
  onClose: () => void;
}

const ProfileSidebar = ({ onClose }: ProfileSidebarProps) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const menuItems = [
    {
      title: "Mi perfil",
      icon: User,
      onClick: () => {
        console.log("Navigate to profile");
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
        console.log("Navigate to subscription");
        onClose();
      }
    }
  ];

  const policyItems = [
    {
      title: "Políticas de privacidad",
      onClick: () => {
        console.log("Navigate to privacy policy");
        onClose();
      }
    },
    {
      title: "Condiciones de uso y contratación",
      onClick: () => {
        console.log("Navigate to terms");
        onClose();
      }
    },
    {
      title: "Política de cookies",
      onClick: () => {
        console.log("Navigate to cookie policy");
        onClose();
      }
    }
  ];

  return (
    <Sidebar side="right" className="w-80">
      <SidebarHeader className="p-6">
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
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton onClick={item.onClick} className="w-full justify-start py-3">
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-base">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator className="my-4" />

        <SidebarMenu>
          {policyItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton onClick={item.onClick} className="w-full justify-start py-2">
                <span className="text-sm text-gray-600">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="mt-6 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">SF</span>
            </div>
            <span className="text-sm font-medium">Solofoodies</span>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleSignOut} className="w-full justify-start py-3 text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-base">Cerrar sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ProfileSidebar;
