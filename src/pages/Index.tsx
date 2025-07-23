
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex flex-col items-center justify-center">
      <img 
        src="/lovable-uploads/40b5c75d-7579-4308-992f-6cbaccc19512.png" 
        alt="Solofoodies Logo" 
        className="h-32 w-32 md:h-16 md:w-16 object-contain mb-8"
      />
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
