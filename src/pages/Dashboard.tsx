import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify, Home, Search, LayoutDashboard, MessageSquare, User, Menu } from 'lucide-react';
import ProfileSidebar from '@/components/ProfileSidebar';
import RoleAwareExplore from '@/components/RoleAwareExplore';

const Dashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('explore');

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return <div className="p-4">Search functionality coming soon...</div>;
      case 'explore':
        return <RoleAwareExplore />;
      case 'messages':
        return <div className="p-4">Messages functionality coming soon...</div>;
      case 'profile':
        return <ProfileSidebar />;
      default:
        return <RoleAwareExplore />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5 mr-2" />
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Dashboard Menu</SheetTitle>
                <SheetDescription>
                  Navigate through your dashboard options.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('explore')}>
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Explore
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('search')}>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('messages')}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('profile')}>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="md:flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 bg-gray-100 border-r border-gray-200">
          <div className="p-4">
            <div className="pb-4">
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('explore')}>
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Explore
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('search')}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('messages')}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('profile')}>
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
