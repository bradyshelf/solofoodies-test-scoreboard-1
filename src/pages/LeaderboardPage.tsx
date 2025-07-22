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
    { rank: 9, name: "Chen Wei", rating: 4.1, country: "Singapore", city: "Singapore", icon: Award, iconColor: "text-orange-500" },
    { rank: 10, name: "Pierre Dubois", rating: 4.0, country: "France", city: "Paris", icon: Award, iconColor: "text-orange-500" },
    { rank: 11, name: "Anna Schmidt", rating: 3.9, country: "Germany", city: "Berlin", icon: Award, iconColor: "text-orange-500" },
    { rank: 12, name: "Yuki Tanaka", rating: 3.9, country: "Japan", city: "Tokyo", icon: Award, iconColor: "text-orange-500" },
    { rank: 13, name: "Sofia Rossi", rating: 3.8, country: "Italy", city: "Rome", icon: Award, iconColor: "text-orange-500" },
    { rank: 14, name: "Carlos Mendez", rating: 3.8, country: "Spain", city: "Madrid", icon: Award, iconColor: "text-orange-500" },
    { rank: 15, name: "Oliver Smith", rating: 3.7, country: "Australia", city: "Sydney", icon: Award, iconColor: "text-orange-500" },
    { rank: 16, name: "Raj Patel", rating: 3.7, country: "India", city: "Mumbai", icon: Award, iconColor: "text-orange-500" },
    { rank: 17, name: "Lucas Silva", rating: 3.6, country: "Brazil", city: "São Paulo", icon: Award, iconColor: "text-orange-500" },
    { rank: 18, name: "Marie Leblanc", rating: 3.6, country: "Canada", city: "Montreal", icon: Award, iconColor: "text-orange-500" },
    { rank: 19, name: "Ahmed Hassan", rating: 3.5, country: "UAE", city: "Dubai", icon: Award, iconColor: "text-orange-500" },
    { rank: 20, name: "Elena Petrov", rating: 3.5, country: "Russia", city: "Moscow", icon: Award, iconColor: "text-orange-500" },
    { rank: 21, name: "Kim Min-jun", rating: 3.4, country: "South Korea", city: "Seoul", icon: Award, iconColor: "text-orange-500" },
    { rank: 22, name: "Isabella Martinez", rating: 3.4, country: "Mexico", city: "Mexico City", icon: Award, iconColor: "text-orange-500" },
    { rank: 23, name: "Thomas Anderson", rating: 3.3, country: "Sweden", city: "Stockholm", icon: Award, iconColor: "text-orange-500" },
    { rank: 24, name: "Fatima Al-Zahra", rating: 3.3, country: "Morocco", city: "Casablanca", icon: Award, iconColor: "text-orange-500" },
    { rank: 25, name: "João Santos", rating: 3.2, country: "Portugal", city: "Lisbon", icon: Award, iconColor: "text-orange-500" },
    { rank: 26, name: "Rachel Green", rating: 3.2, country: "USA", city: "Miami", icon: Award, iconColor: "text-orange-500" },
    { rank: 27, name: "Dimitri Volkov", rating: 3.1, country: "Russia", city: "St. Petersburg", icon: Award, iconColor: "text-orange-500" },
    { rank: 28, name: "Priya Sharma", rating: 3.1, country: "India", city: "Delhi", icon: Award, iconColor: "text-orange-500" },
    { rank: 29, name: "Marco Bianchi", rating: 3.0, country: "Italy", city: "Milan", icon: Award, iconColor: "text-orange-500" },
    { rank: 30, name: "Liam O'Connor", rating: 3.0, country: "Ireland", city: "Dublin", icon: Award, iconColor: "text-orange-500" },
    { rank: 31, name: "Zara Khan", rating: 2.9, country: "Pakistan", city: "Karachi", icon: Award, iconColor: "text-orange-500" },
    { rank: 32, name: "Viktor Novak", rating: 2.9, country: "Czech Republic", city: "Prague", icon: Award, iconColor: "text-orange-500" },
    { rank: 33, name: "Amelia Clarke", rating: 2.8, country: "UK", city: "Manchester", icon: Award, iconColor: "text-orange-500" },
    { rank: 34, name: "Hassan Ali", rating: 2.8, country: "Egypt", city: "Cairo", icon: Award, iconColor: "text-orange-500" },
    { rank: 35, name: "Sakura Yamamoto", rating: 2.7, country: "Japan", city: "Osaka", icon: Award, iconColor: "text-orange-500" },
    { rank: 36, name: "Benjamin Taylor", rating: 2.7, country: "USA", city: "Seattle", icon: Award, iconColor: "text-orange-500" },
    { rank: 37, name: "Camila Rodriguez", rating: 2.6, country: "Argentina", city: "Buenos Aires", icon: Award, iconColor: "text-orange-500" },
    { rank: 38, name: "Noah Williams", rating: 2.6, country: "Canada", city: "Calgary", icon: Award, iconColor: "text-orange-500" },
    { rank: 39, name: "Anastasia Popov", rating: 2.5, country: "Russia", city: "Novosibirsk", icon: Award, iconColor: "text-orange-500" },
    { rank: 40, name: "Felix Mueller", rating: 2.5, country: "Germany", city: "Munich", icon: Award, iconColor: "text-orange-500" },
    { rank: 41, name: "Grace Kim", rating: 2.4, country: "South Korea", city: "Busan", icon: Award, iconColor: "text-orange-500" },
    { rank: 42, name: "Eduardo Fernandez", rating: 2.4, country: "Chile", city: "Santiago", icon: Award, iconColor: "text-orange-500" },
    { rank: 43, name: "Leah Davis", rating: 2.3, country: "USA", city: "Denver", icon: Award, iconColor: "text-orange-500" },
    { rank: 44, name: "Abdul Rahman", rating: 2.3, country: "Saudi Arabia", city: "Riyadh", icon: Award, iconColor: "text-orange-500" },
    { rank: 45, name: "Ingrid Larsson", rating: 2.2, country: "Norway", city: "Oslo", icon: Award, iconColor: "text-orange-500" },
    { rank: 46, name: "Ryan Mitchell", rating: 2.2, country: "Australia", city: "Melbourne", icon: Award, iconColor: "text-orange-500" },
    { rank: 47, name: "Valentina Costa", rating: 2.1, country: "Italy", city: "Naples", icon: Award, iconColor: "text-orange-500" },
    { rank: 48, name: "Jack Thompson", rating: 2.1, country: "New Zealand", city: "Auckland", icon: Award, iconColor: "text-orange-500" },
    { rank: 49, name: "Aisha Okafor", rating: 2.0, country: "Nigeria", city: "Lagos", icon: Award, iconColor: "text-orange-500" },
    { rank: 50, name: "Ethan Clark", rating: 2.0, country: "USA", city: "Austin", icon: Award, iconColor: "text-orange-500" },
    { rank: 51, name: "Noor Al-Rashid", rating: 1.9, country: "Jordan", city: "Amman", icon: Award, iconColor: "text-orange-500" },
    { rank: 52, name: "Maya Johansson", rating: 1.9, country: "Sweden", city: "Gothenburg", icon: Award, iconColor: "text-orange-500" },
    { rank: 53, name: "Diego Morales", rating: 1.8, country: "Colombia", city: "Bogotá", icon: Award, iconColor: "text-orange-500" },
    { rank: 54, name: "Chloe Martin", rating: 1.8, country: "France", city: "Lyon", icon: Award, iconColor: "text-orange-500" },
    { rank: 55, name: "Jin-woo Lee", rating: 1.7, country: "South Korea", city: "Incheon", icon: Award, iconColor: "text-orange-500" },
    { rank: 56, name: "Lucia Gonzalez", rating: 1.7, country: "Spain", city: "Barcelona", icon: Award, iconColor: "text-orange-500" },
    { rank: 57, name: "Owen Baker", rating: 1.6, country: "UK", city: "Birmingham", icon: Award, iconColor: "text-orange-500" },
    { rank: 58, name: "Anya Kowalski", rating: 1.6, country: "Poland", city: "Warsaw", icon: Award, iconColor: "text-orange-500" },
    { rank: 59, name: "Marcus Johnson", rating: 1.5, country: "USA", city: "Portland", icon: Award, iconColor: "text-orange-500" },
    { rank: 60, name: "Leila Hosseini", rating: 1.5, country: "Iran", city: "Tehran", icon: Award, iconColor: "text-orange-500" },
    { rank: 61, name: "Hannah White", rating: 1.4, country: "Canada", city: "Ottawa", icon: Award, iconColor: "text-orange-500" },
    { rank: 62, name: "Adrian Popovic", rating: 1.4, country: "Serbia", city: "Belgrade", icon: Award, iconColor: "text-orange-500" },
    { rank: 63, name: "Tyler Brown", rating: 1.3, country: "USA", city: "Phoenix", icon: Award, iconColor: "text-orange-500" },
    { rank: 64, name: "Ravi Kumar", rating: 1.3, country: "India", city: "Bangalore", icon: Award, iconColor: "text-orange-500" },
    { rank: 65, name: "Sophie Dubois", rating: 1.2, country: "Belgium", city: "Brussels", icon: Award, iconColor: "text-orange-500" },
    { rank: 66, name: "Alex Turner", rating: 1.2, country: "Australia", city: "Perth", icon: Award, iconColor: "text-orange-500" },
    { rank: 67, name: "Isabella Rossi", rating: 1.1, country: "Italy", city: "Florence", icon: Award, iconColor: "text-orange-500" },
    { rank: 68, name: "Mohammed Al-Malik", rating: 1.1, country: "Kuwait", city: "Kuwait City", icon: Award, iconColor: "text-orange-500" },
    { rank: 69, name: "Emma Andersson", rating: 1.0, country: "Finland", city: "Helsinki", icon: Award, iconColor: "text-orange-500" },
    { rank: 70, name: "Gabriel Costa", rating: 1.0, country: "Brazil", city: "Rio de Janeiro", icon: Award, iconColor: "text-orange-500" },
    { rank: 71, name: "Mia Thompson", rating: 0.9, country: "USA", city: "Boston", icon: Award, iconColor: "text-orange-500" },
    { rank: 72, name: "Kenji Nakamura", rating: 0.9, country: "Japan", city: "Kyoto", icon: Award, iconColor: "text-orange-500" },
    { rank: 73, name: "Luna Martinez", rating: 0.8, country: "Peru", city: "Lima", icon: Award, iconColor: "text-orange-500" },
    { rank: 74, name: "Samuel Lee", rating: 0.8, country: "USA", city: "Nashville", icon: Award, iconColor: "text-orange-500" },
    { rank: 75, name: "Zoe Campbell", rating: 0.7, country: "Scotland", city: "Edinburgh", icon: Award, iconColor: "text-orange-500" },
    { rank: 76, name: "Aleksandr Petrov", rating: 0.7, country: "Bulgaria", city: "Sofia", icon: Award, iconColor: "text-orange-500" },
    { rank: 77, name: "Olivia Davis", rating: 0.6, country: "USA", city: "Las Vegas", icon: Award, iconColor: "text-orange-500" },
    { rank: 78, name: "Hiroshi Sato", rating: 0.6, country: "Japan", city: "Hiroshima", icon: Award, iconColor: "text-orange-500" },
    { rank: 79, name: "Elena Garcia", rating: 0.5, country: "Venezuela", city: "Caracas", icon: Award, iconColor: "text-orange-500" },
    { rank: 80, name: "William Jones", rating: 0.5, country: "Wales", city: "Cardiff", icon: Award, iconColor: "text-orange-500" },
    { rank: 81, name: "Aria Hosseini", rating: 0.4, country: "Iran", city: "Isfahan", icon: Award, iconColor: "text-orange-500" },
    { rank: 82, name: "Daniel Nielsen", rating: 0.4, country: "Denmark", city: "Copenhagen", icon: Award, iconColor: "text-orange-500" },
    { rank: 83, name: "Sofia Petrov", rating: 0.3, country: "Macedonia", city: "Skopje", icon: Award, iconColor: "text-orange-500" },
    { rank: 84, name: "Jackson Miller", rating: 0.3, country: "USA", city: "Atlanta", icon: Award, iconColor: "text-orange-500" },
    { rank: 85, name: "Layla Al-Zahra", rating: 0.2, country: "Lebanon", city: "Beirut", icon: Award, iconColor: "text-orange-500" },
    { rank: 86, name: "Mason Wilson", rating: 0.2, country: "Canada", city: "Halifax", icon: Award, iconColor: "text-orange-500" },
    { rank: 87, name: "Chiara Conti", rating: 0.1, country: "Italy", city: "Venice", icon: Award, iconColor: "text-orange-500" },
    { rank: 88, name: "Adam Kowalczyk", rating: 0.1, country: "Poland", city: "Krakow", icon: Award, iconColor: "text-orange-500" },
    { rank: 89, name: "Harper Taylor", rating: 0.0, country: "USA", city: "Detroit", icon: Award, iconColor: "text-orange-500" },
    { rank: 90, name: "Yuki Suzuki", rating: 0.0, country: "Japan", city: "Nagoya", icon: Award, iconColor: "text-orange-500" },
    { rank: 91, name: "Amara Okafor", rating: -0.1, country: "Ghana", city: "Accra", icon: Award, iconColor: "text-orange-500" },
    { rank: 92, name: "Logan Brown", rating: -0.1, country: "USA", city: "Minneapolis", icon: Award, iconColor: "text-orange-500" },
    { rank: 93, name: "Nadia Volkov", rating: -0.2, country: "Ukraine", city: "Kiev", icon: Award, iconColor: "text-orange-500" },
    { rank: 94, name: "Caleb Anderson", rating: -0.2, country: "USA", city: "Salt Lake City", icon: Award, iconColor: "text-orange-500" },
    { rank: 95, name: "Fatou Diallo", rating: -0.3, country: "Senegal", city: "Dakar", icon: Award, iconColor: "text-orange-500" },
    { rank: 96, name: "Blake Wilson", rating: -0.3, country: "USA", city: "Kansas City", icon: Award, iconColor: "text-orange-500" },
    { rank: 97, name: "Aaliyah Johnson", rating: -0.4, country: "USA", city: "Tampa", icon: Award, iconColor: "text-orange-500" },
    { rank: 98, name: "Kai Chen", rating: -0.4, country: "Taiwan", city: "Taipei", icon: Award, iconColor: "text-orange-500" },
    { rank: 99, name: "Maya Patel", rating: -0.5, country: "India", city: "Chennai", icon: Award, iconColor: "text-orange-500" },
    { rank: 100, name: "Jesse Davis", rating: -0.5, country: "USA", city: "Cleveland", icon: Award, iconColor: "text-orange-500" },
  ];

  const countries = [
    "all", "USA", "Canada", "UK", "Singapore", "France", "Germany", "Japan", 
    "Italy", "Spain", "Australia", "India", "Brazil", "UAE", "Russia", 
    "South Korea", "Mexico", "Sweden", "Morocco", "Portugal", "Pakistan", 
    "Czech Republic", "Egypt", "Argentina", "Chile", "Saudi Arabia", "Norway", 
    "New Zealand", "Nigeria", "Jordan", "Iran", "Ireland", "Belgium", "Kuwait", 
    "Finland", "Peru", "Scotland", "Bulgaria", "Venezuela", "Wales", "Denmark", 
    "Macedonia", "Lebanon", "Ghana", "Ukraine", "Senegal", "Taiwan", "Poland"
  ];
  
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
  
  const filteredData = leaderboardData
    .filter(player => {
      const countryMatch = selectedCountry === "all" || player.country === selectedCountry;
      const cityMatch = selectedCity === "all" || player.city === selectedCity;
      return countryMatch && cityMatch;
    })
    .slice(0, 10); // Show only top 10

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
              {filteredData.map((player, index) => {
                const IconComponent = player.icon;
                return (
                  <div 
                    key={player.rank}
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
                        <span className="font-bold text-gray-700">#{index + 1}</span>
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