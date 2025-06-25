
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Users, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, userRole, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Solo Foodies</span>
            </div>
            <Button
              onClick={signOut}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Solo Foodies!
          </h1>
          <p className="text-gray-600">
            Hello {user?.email}, you're logged in as a {userRole}.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userRole === 'restaurant' ? (
            <>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <CardTitle>Find Food Creators</CardTitle>
                  <CardDescription>
                    Search and discover talented food influencers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Browse Creators</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                    <Utensils className="w-5 h-5 text-red-500" />
                  </div>
                  <CardTitle>Create Collaboration</CardTitle>
                  <CardDescription>
                    Set up new partnership opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Create Collab</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                  <CardTitle>My Collaborations</CardTitle>
                  <CardDescription>
                    Manage your active partnerships
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">View All</Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <Utensils className="w-5 h-5 text-green-500" />
                  </div>
                  <CardTitle>Browse Restaurants</CardTitle>
                  <CardDescription>
                    Discover collaboration opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-500 hover:bg-green-600">Browse Opportunities</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <CardTitle>My Portfolio</CardTitle>
                  <CardDescription>
                    Showcase your content and stats
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-500 hover:bg-green-600">Edit Portfolio</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <CardTitle>My Collaborations</CardTitle>
                  <CardDescription>
                    Track your active partnerships
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">View All</Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
