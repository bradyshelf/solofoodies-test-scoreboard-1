import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Trophy, Medal, Award, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", rating: 4.9, country: "USA", city: "New York", icon: Trophy, iconColor: "text-yellow-500" },
    { rank: 2, name: "Sarah Chen", rating: 4.8, country: "USA", city: "Los Angeles", icon: Medal, iconColor: "text-gray-400" },
    { rank: 3, name: "Mike Rodriguez", rating: 4.7, country: "USA", city: "Chicago", icon: Award, iconColor: "text-amber-600" },
    { rank: 4, name: "Emma Wilson", rating: 4.6, country: "USA", city: "New York", icon: Award, iconColor: "text-orange-500" },
    { rank: 5, name: "David Park", rating: 4.5, country: "USA", city: "San Francisco", icon: Award, iconColor: "text-orange-500" },
    { rank: 6, name: "Lisa Thompson", rating: 4.4, country: "Canada", city: "Toronto", icon: Award, iconColor: "text-orange-500" },
    { rank: 7, name: "James Brown", rating: 4.3, country: "Canada", city: "Vancouver", icon: Award, iconColor: "text-orange-500" },
    { rank: 8, name: "Maria Garcia", rating: 4.2, country: "UK", city: "London", icon: Award, iconColor: "text-orange-500" },
  ];

  const countries = ["all", "USA", "Canada", "UK"];
  
  const getCitiesForCountry = (country: string) => {
    if (country === "all") return ["all"];
    const cities = leaderboardData
      .filter(player => player.country === country)
      .map(player => player.city);
    return ["all", ...Array.from(new Set(cities))];
  };

  const availableCities = getCitiesForCountry(selectedCountry);
  
  // Reset city when country changes
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity("all");
  };
  
  const filteredData = leaderboardData.filter(player => {
    const countryMatch = selectedCountry === "all" || player.country === selectedCountry;
    const cityMatch = selectedCity === "all" || player.city === selectedCity;
    return countryMatch && cityMatch;
  });

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

        {/* Country and City Filters */}
        <div className="flex gap-4 mb-6">
          <Select value={selectedCountry} onValueChange={handleCountryChange}>
            <SelectTrigger className="w-48 bg-white backdrop-blur-sm border shadow-sm">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country === "all" ? "All Countries" : country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-48 bg-white backdrop-blur-sm border shadow-sm">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              {availableCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city === "all" ? "All Cities" : city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-orange-600">156</CardTitle>
              <p className="text-gray-600">Total Foodies</p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-red-600">4.9</CardTitle>
              <p className="text-gray-600">Highest Rating</p>
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
              {filteredData.map((player) => {
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
                        <p className="text-sm text-gray-500">{player.city}, {player.country}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-1 font-bold text-xl text-gray-800">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span>{player.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">out of 5</div>
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