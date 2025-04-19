
import { toast } from 'sonner';
import { PlusCircle, Leaf, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Move the mock data to a separate file later if needed
const recommendedPlants = [
  {
    id: 1,
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    care: 'Low water, indirect light',
    description: 'Perfect for beginners, purifies air'
  },
  {
    id: 2,
    name: 'Aloe Vera',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    care: 'Occasional water, direct light',
    description: 'Medicinal properties, easy to grow'
  },
  {
    id: 3,
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    care: 'Regular water, indirect light',
    description: 'Beautiful flowers, air purifying'
  },
  {
    id: 4,
    name: 'Spider Plant',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    care: 'Moderate water, indirect light',
    description: 'Fast growing, produces "pups"'
  }
];

const companionPlants = [
  { id: 1, primary: 'Tomatoes', companion: 'Basil', benefit: 'Improves flavor, repels pests' },
  { id: 2, primary: 'Carrots', companion: 'Rosemary', benefit: 'Deters carrot fly' },
  { id: 3, primary: 'Cucumbers', companion: 'Sunflowers', benefit: 'Provides shade and support' }
];

const RecommendationsTab = () => {
  const handleAddToGarden = (plantName: string) => {
    toast.success(`${plantName} added to your garden!`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-garden-primary flex items-center">
            <Leaf className="h-5 w-5 mr-2" />
            Recommended Plants for You
          </CardTitle>
          <CardDescription>
            Based on your location, soil type, and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedPlants.map((plant) => (
              <Card key={plant.id} className="card-garden overflow-hidden flex flex-col">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="py-3">
                  <CardTitle className="text-lg text-garden-primary">{plant.name}</CardTitle>
                  <CardDescription className="text-sm">{plant.description}</CardDescription>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-sm text-garden-gray"><span className="font-semibold">Care:</span> {plant.care}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-3">
                  <Button 
                    className="w-full bg-garden-secondary hover:bg-garden-secondary/90 group" 
                    onClick={() => handleAddToGarden(plant.name)}
                  >
                    <PlusCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to My Garden
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-garden-primary flex items-center">
            <RefreshCw className="h-5 w-5 mr-2" />
            Companion Planting Ideas
          </CardTitle>
          <CardDescription>
            Plants that grow better together
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-garden-primary/20">
                  <th className="py-2 px-4 text-left text-garden-primary">Primary Plant</th>
                  <th className="py-2 px-4 text-left text-garden-primary">Companion</th>
                  <th className="py-2 px-4 text-left text-garden-primary">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {companionPlants.map((item) => (
                  <tr key={item.id} className="border-b border-garden-secondary/10 hover:bg-garden-light/50">
                    <td className="py-2 px-4">{item.primary}</td>
                    <td className="py-2 px-4">{item.companion}</td>
                    <td className="py-2 px-4">{item.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Button variant="link" className="text-garden-primary hover:text-garden-primary/80">
              Learn More About Companion Planting
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationsTab;
