
import { useState } from 'react';
import { 
  MapPin, 
  Cloud, 
  Sun, 
  Ruler 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface OnboardingStep1Props {
  onNext: (data: any) => void;
}

const OnboardingStep1 = ({ onNext }: OnboardingStep1Props) => {
  const [location, setLocation] = useState('');
  const [soilType, setSoilType] = useState('');
  const [sunlight, setSunlight] = useState([50]);
  const [gardenSize, setGardenSize] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({
      location,
      soilType,
      sunlight: sunlight[0],
      gardenSize
    });
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-garden-primary">Profile Setup</h2>
        <p className="text-garden-gray mt-2">Tell us about your garden space</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Location Field */}
        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center text-garden-gray">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </Label>
          <Select value={location} onValueChange={setLocation} required>
            <SelectTrigger className="input-garden">
              <SelectValue placeholder="Select your location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="houston">Houston</SelectItem>
              <SelectItem value="phoenix">Phoenix</SelectItem>
              <SelectItem value="philadelphia">Philadelphia</SelectItem>
              <SelectItem value="san-antonio">San Antonio</SelectItem>
              <SelectItem value="san-diego">San Diego</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Soil Type Field */}
        <div className="space-y-2">
          <Label htmlFor="soilType" className="flex items-center text-garden-gray">
            <Cloud className="h-4 w-4 mr-2" />
            Soil Type
          </Label>
          <Select value={soilType} onValueChange={setSoilType} required>
            <SelectTrigger className="input-garden">
              <SelectValue placeholder="Select soil type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sandy">Sandy</SelectItem>
              <SelectItem value="clay">Clay</SelectItem>
              <SelectItem value="loamy">Loamy</SelectItem>
              <SelectItem value="silty">Silty</SelectItem>
              <SelectItem value="peaty">Peaty</SelectItem>
              <SelectItem value="chalky">Chalky</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sunlight Availability */}
        <div className="space-y-4">
          <Label className="flex items-center text-garden-gray">
            <Sun className="h-4 w-4 mr-2" />
            Sunlight Availability
          </Label>
          <div className="px-2">
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              value={sunlight}
              onValueChange={setSunlight}
              className="[&>span]:bg-garden-primary"
            />
            <div className="flex justify-between text-xs text-garden-gray mt-2">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* Garden Size Field */}
        <div className="space-y-2">
          <Label htmlFor="gardenSize" className="flex items-center text-garden-gray">
            <Ruler className="h-4 w-4 mr-2" />
            Garden Size (sq ft)
          </Label>
          <Input
            id="gardenSize"
            type="number"
            className="input-garden"
            placeholder="Enter square footage"
            value={gardenSize}
            onChange={(e) => setGardenSize(e.target.value)}
            required
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full btn-primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingStep1;
