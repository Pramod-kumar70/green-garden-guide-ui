
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-garden-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-garden-primary leading-tight">
              Grow Green, Live Clean
            </h1>
            <h2 className="text-xl md:text-2xl text-garden-gray font-light">
              Your Eco-Friendly Gardening Companion
            </h2>
            <p className="text-garden-gray text-lg max-w-lg">
              Turn your urban space into a thriving garden with personalized plant recommendations, 
              care guidance, and eco-impact tracking—all powered by AI.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-primary text-lg group">
                <Link to="/onboarding" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
              alt="Vibrant garden with blooming flowers" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
