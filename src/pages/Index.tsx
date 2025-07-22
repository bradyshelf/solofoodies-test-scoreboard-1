
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center">
      <Button 
        size="lg" 
        className="text-lg px-8 py-4 bg-white text-red-600 hover:bg-gray-100 shadow-lg"
        onClick={() => navigate('/leaderboard')}
      >
        Scoreboard
      </Button>
    </div>
  );
};

export default Index;
