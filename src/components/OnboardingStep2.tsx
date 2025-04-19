
import { useState } from 'react';
import { Flower, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface OnboardingStep2Props {
  onFinish: (data: any) => void;
  onBack: () => void;
}

const OnboardingStep2 = ({ onFinish, onBack }: OnboardingStep2Props) => {
  const [preferences, setPreferences] = useState({
    nativePlants: false,
    lowMaintenance: false,
    biodiversity: false,
    edible: false,
    ornamental: false,
    drought: false,
  });

  const handleCheckboxChange = (id: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFinish({ preferences });
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-garden-primary">Planting Preferences</h2>
        <p className="text-garden-gray mt-2">Select your gardening preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="nativePlants" 
              checked={preferences.nativePlants}
              onCheckedChange={() => handleCheckboxChange('nativePlants')}
              className="text-garden-primary border-garden-secondary data-[state=checked]:bg-garden-primary data-[state=checked]:border-garden-primary"
            />
            <div className="space-y-1 leading-none">
              <Label 
                htmlFor="nativePlants" 
                className="font-medium text-garden-gray cursor-pointer flex items-center"
              >
                <Leaf className="h-4 w-4 mr-2 text-garden-primary" />
                Native Plants
              </Label>
              <p className="text-sm text-garden-gray/80">
                Plants indigenous to your region
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox 
              id="lowMaintenance" 
              checked={preferences.lowMaintenance}
              onCheckedChange={() => handleCheckboxChange('lowMaintenance')}
              className="text-garden-primary border-garden-secondary data-[state=checked]:bg-garden-primary data-[state=checked]:border-garden-primary"
            />
            <div className="space-y-1 leading-none">
              <Label 
                htmlFor="lowMaintenance" 
                className="font-medium text-garden-gray cursor-pointer flex items-center"
              >
                <Flower className="h-4 w-4 mr-2 text-garden-primary" />
                Low-Maintenance Plants
              </Label>
              <p className="text-sm text-garden-gray/80">
                Plants that require minimal care
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox 
              id="biodiversity" 
              checked={preferences.biodiversity}
              onCheckedChange={() => handleCheckboxChange('biodiversity')}
              className="text-garden-primary border-garden-secondary data-[state=checked]:bg-garden-primary data-[state=checked]:border-garden-primary"
            />
            <div className="space-y-1 leading-none">
              <Label 
                htmlFor="biodiversity" 
                className="font-medium text-garden-gray cursor-pointer flex items-center"
              >
                <Leaf className="h-4 w-4 mr-2 text-garden-primary" />
                Biodiversity Support
              </Label>
              <p className="text-sm text-garden-gray/80">
                Plants that attract pollinators and wildlife
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox 
              id="edible" 
              checked={preferences.edible}
              onCheckedChange={() => handleCheckboxChange('edible')}
              className="text-garden-primary border-garden-secondary data-[state=checked]:bg-garden-primary data-[state=checked]:border-garden-primary"
            />
            <div className="space-y-1 leading-none">
              <Label 
                htmlFor="edible" 
                className="font-medium text-garden-gray cursor-pointer flex items-center"
              >
                <Leaf className="h-4 w-4 mr-2 text-garden-primary" />
                Edible Plants
              </Label>
              <p className="text-sm text-garden-gray/80">
                Vegetables, fruits, and herbs
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox 
              id="ornamental" 
              checked={preferences.ornamental}
              onCheckedChange={() => handleCheckboxChange('ornamental')}
              className="text-garden-primary border-garden-secondary data-[state=checked]:bg-garden-primary data-[state=checked]:border-garden-primary"
            />
            <div className="space-y-1 leading-none">
              <Label 
                htmlFor="ornamental" 
                className="font-medium text-garden-gray cursor-pointer flex items-center"
              >
                <Flower className="h-4 w-4 mr-2 text-garden-primary" />
                Ornamental Plants
              </Label>
              <p className="text-sm text-garden-gray/80">
                Decorative flowers and foliage
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox 
              id="drought" 
              checked={preferences.drought}
              onCheckedChange={() => handleCheckboxChange('drought')}
              className="text-garden-primary border-garden-secondary data-[state=checked]:bg-garden-primary data-[state=checked]:border-garden-primary"
            />
            <div className="space-y-1 leading-none">
              <Label 
                htmlFor="drought" 
                className="font-medium text-garden-gray cursor-pointer flex items-center"
              >
                <Leaf className="h-4 w-4 mr-2 text-garden-primary" />
                Drought-Resistant Plants
              </Label>
              <p className="text-sm text-garden-gray/80">
                Plants that require less water
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            className="flex-1 border-garden-primary text-garden-primary hover:bg-garden-primary/10"
            onClick={onBack}
          >
            Back
          </Button>
          <Button type="submit" className="flex-1 btn-primary group">
            <span className="flex items-center">
              Finish Setup
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingStep2;
