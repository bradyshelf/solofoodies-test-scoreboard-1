import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LeaderboardPage = () => {
  const navigate = useNavigate();

  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", score: 2847, icon: Trophy, iconColor: "text-yellow-500" },
    { rank: 2, name: "Sarah Chen", score: 2634, icon: Medal, iconColor: "text-gray-400" },
    { rank: 3, name: "Mike Rodriguez", score: 2521, icon: Award, iconColor: "text-amber-600" },
    { rank: 4, name: "Emma Wilson", score: 2398, icon: Award, iconColor: "text-orange-500" },
    { rank: 5, name: "David Park", score: 2276, icon: Award, iconColor: "text-orange-500" },
    { rank: 6, name: "Lisa Thompson", score: 2154, icon: Award, iconColor: "text-orange-500" },
    { rank: 7, name: "James Brown", score: 2087, icon: Award, iconColor: "text-orange-500" },
    { rank: 8, name: "Maria Garcia", score: 1998, icon: Award, iconColor: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-white">Leaderboard</h1>
          <div></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-orange-600">156</CardTitle>
              <p className="text-gray-600">Total Players</p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-red-600">2,847</CardTitle>
              <p className="text-gray-600">Highest Score</p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-pink-600">47</CardTitle>
              <p className="text-gray-600">Active Today</p>
            </CardHeader>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-800">
              Top Foodies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboardData.map((player) => {
                const IconComponent = player.icon;
                return (
                  <div 
                    key={player.rank}
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
                        <span className="font-bold text-gray-700">#{player.rank}</span>
                      </div>
                      <IconComponent className={`w-6 h-6 ${player.iconColor}`} />
                      <div>
                        <h3 className="font-semibold text-gray-800">{player.name}</h3>
                        <p className="text-sm text-gray-500">Player</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-gray-800">
                        {player.score.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">points</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardPage;