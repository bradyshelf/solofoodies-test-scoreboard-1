
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import RestaurantExploreView from './RestaurantExploreView';
import ExplorePage from '@/pages/ExplorePage';

const RoleAwareExplore = () => {
  const { userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-red-500" />
      </div>
    );
  }

  // Show restaurant view (foodies) if user is a restaurant
  if (userRole === 'restaurant') {
    return <RestaurantExploreView />;
  }

  // Show foodie view (restaurants) if user is a foodie or default
  return <ExplorePage />;
};

export default RoleAwareExplore;
