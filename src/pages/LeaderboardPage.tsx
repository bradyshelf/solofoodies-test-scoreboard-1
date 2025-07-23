import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Trophy, Medal, Award, Star, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("Spain");
  const [selectedCity, setSelectedCity] = useState("all");

  // Generate 150 diverse foodie influencers with at least 10 per city
  const generateLeaderboardData = () => {
    const names = [
      'Alex Chen', 'Maya Patel', 'Jordan Smith', 'Zoe Williams', 'Kai Nakamura',
      'Luna Rodriguez', 'Finn O\'Connor', 'Nova Kim', 'River Thompson', 'Sage Davis',
      'Phoenix Lee', 'Aria Johnson', 'Atlas Brown', 'Ivy Martinez', 'Orion Taylor',
      'Hazel Wilson', 'Leo Garcia', 'Ruby Anderson', 'Jasper Moore', 'Stella Jackson',
      'Owen White', 'Cora Lewis', 'Milo Clark', 'Luna Walker', 'Felix Hall',
      'Iris Allen', 'Theo Young', 'Jade King', 'Ezra Wright', 'Rose Lopez',
      'Asher Hill', 'Wren Scott', 'Kai Green', 'Lyra Adams', 'Cruz Baker',
      'Ember Gonzalez', 'Ryder Nelson', 'Sage Carter', 'Nova Mitchell', 'River Perez',
      'Atlas Roberts', 'Ivy Turner', 'Phoenix Phillips', 'Hazel Campbell', 'Leo Parker',
      'Ruby Evans', 'Jasper Edwards', 'Stella Collins', 'Owen Stewart', 'Cora Sanchez',
      'Milo Morris', 'Luna Rogers', 'Felix Reed', 'Iris Cook', 'Theo Bailey',
      'Jade Rivera', 'Ezra Cooper', 'Rose Richardson', 'Asher Cox', 'Wren Howard',
      'Kai Ward', 'Lyra Torres', 'Cruz Peterson', 'Ember Gray', 'Ryder Ramirez',
      'Sage James', 'Nova Watson', 'River Brooks', 'Atlas Kelly', 'Ivy Sanders',
      'Phoenix Price', 'Hazel Bennett', 'Leo Wood', 'Ruby Barnes', 'Jasper Ross',
      'Stella Henderson', 'Owen Coleman', 'Cora Jenkins', 'Milo Perry', 'Luna Powell',
      'Felix Long', 'Iris Patterson', 'Theo Hughes', 'Jade Flores', 'Ezra Washington',
      'Rose Butler', 'Asher Simmons', 'Wren Foster', 'Kai Gonzales', 'Lyra Bryant',
      'Cruz Alexander', 'Ember Russell', 'Ryder Griffin', 'Sage Diaz', 'Nova Hayes',
      'River Myers', 'Atlas Ford', 'Ivy Hamilton', 'Phoenix Graham', 'Hazel Sullivan',
      'Blake Torres', 'Quinn Martinez', 'Rowan Lee', 'Skye Anderson', 'Dante Wilson',
      'Aria Thompson', 'Zara Johnson', 'Luca Brown', 'Nora Garcia', 'Elias Davis',
      'Cleo Rodriguez', 'Jaxon Smith', 'Vera Williams', 'Enzo Chen', 'Tessa Patel',
      'Miles Taylor', 'Delia Moore', 'Cyrus Jackson', 'Isla White', 'Roman Clark',
      'Nyx Lewis', 'Kael Walker', 'Zola Hall', 'Orion Allen', 'Lyric Young',
      'Vale King', 'Knox Wright', 'Echo Lopez', 'Sage Hill', 'Rain Scott',
      'Blaze Green', 'Story Adams', 'River Baker', 'Nova Gonzalez', 'Sky Nelson',
      'Luna Carter', 'Fox Mitchell', 'Star Perez', 'Wolf Roberts', 'Dawn Turner',
      'Storm Phillips', 'Cloud Campbell', 'Ocean Parker', 'Wind Evans', 'Fire Edwards',
      'Earth Collins', 'Moon Stewart'
    ];

    const locations = [
      { country: 'United States', city: 'New York' },
      { country: 'United States', city: 'Los Angeles' },
      { country: 'United States', city: 'Chicago' },
      { country: 'United Kingdom', city: 'London' },
      { country: 'United Kingdom', city: 'Manchester' },
      { country: 'Canada', city: 'Toronto' },
      { country: 'Canada', city: 'Vancouver' },
      { country: 'Australia', city: 'Sydney' },
      { country: 'Australia', city: 'Melbourne' },
      { country: 'Japan', city: 'Tokyo' },
      { country: 'Japan', city: 'Osaka' },
      { country: 'France', city: 'Paris' },
      { country: 'Germany', city: 'Berlin' },
      { country: 'Italy', city: 'Rome' },
      { country: 'Spain', city: 'Barcelona' }
    ];

    const data = [];
    
    // Ensure at least 10 entries per city
    locations.forEach((location, locationIndex) => {
      for (let i = 0; i < 10; i++) {
        const nameIndex = (locationIndex * 10 + i) % names.length;
        const currentIndex = data.length;
        data.push({
          id: currentIndex + 1,
          name: names[nameIndex],
          ...location,
          rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0 stars
          verified: Math.random() > 0.3, // 70% verified
          icon: currentIndex === 0 ? Trophy : currentIndex === 1 ? Medal : Award,
          iconColor: currentIndex === 0 ? "text-yellow-500" : currentIndex === 1 ? "text-gray-400" : currentIndex === 2 ? "text-amber-600" : "text-orange-500"
        });
      }
    });

    // Shuffle the data to randomize order
    return data.sort(() => Math.random() - 0.5);
  };

  const leaderboardData = generateLeaderboardData();

  const countries = [
    "all", "Spain"
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
    .sort((a, b) => b.rating - a.rating) // Sort by rating descending (highest first)
    .slice(0, 10); // Show only top 10

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
      {/* Top Navigation Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Solofoodies</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 flex-1 text-center">Leaderboard</h1>
          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
            Iniciar Sesión
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">



        {/* Leaderboard */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Top Foodies
              </CardTitle>
              <div className="flex gap-4">
                <Select value={selectedCountry} onValueChange={handleCountryChange}>
                  <SelectTrigger className="w-40 bg-white backdrop-blur-sm border shadow-sm">
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
                  <SelectTrigger className="w-40 bg-white backdrop-blur-sm border shadow-sm">
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
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.map((player, index) => {
                const IconComponent = player.icon;
                return (
                  <div 
                    key={player.id}
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

      {/* Footer */}
      <footer className="bg-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-semibold text-gray-800">Solofoodies</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Conectando restaurantes y creadores de contenido gastronómico en todo el mundo a través de colaboraciones significativas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-gray-800 text-xs font-bold">T</span>
                  </div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Plataforma</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">¿Por qué Solofoodies?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">¿Cómo funciona Solofoodies?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Historias de éxito</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">¿Para quién es Solofoodies?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Planes y Precios</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 SoloFoodies. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Términos de Servicio</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeaderboardPage;