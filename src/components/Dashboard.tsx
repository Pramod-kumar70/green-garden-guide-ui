
import { useState } from 'react';
import { 
  Droplet, 
  Upload, 
  Calendar, 
  PlusCircle, 
  Plant, 
  BarChart4, 
  RefreshCw,
  Info,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

// Mock data for plants
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

// Mock companion planting data
const companionPlants = [
  { id: 1, primary: 'Tomatoes', companion: 'Basil', benefit: 'Improves flavor, repels pests' },
  { id: 2, primary: 'Carrots', companion: 'Rosemary', benefit: 'Deters carrot fly' },
  { id: 3, primary: 'Cucumbers', companion: 'Sunflowers', benefit: 'Provides shade and support' }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('recommendations');
  
  const handleAddToGarden = (plantName: string) => {
    toast.success(`${plantName} added to your garden!`);
  };
  
  const handleUploadImage = () => {
    toast.info('Image upload functionality will be available soon!');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <Tabs defaultValue="recommendations" className="space-y-6">
            <TabsList className="bg-garden-light">
              <TabsTrigger 
                value="recommendations" 
                className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
                onClick={() => setActiveTab('recommendations')}
              >
                <Plant className="h-4 w-4 mr-2" />
                Plant Recommendations
              </TabsTrigger>
              <TabsTrigger 
                value="care" 
                className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
                onClick={() => setActiveTab('care')}
              >
                <Droplet className="h-4 w-4 mr-2" />
                Watering & Care
              </TabsTrigger>
              <TabsTrigger 
                value="health" 
                className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
                onClick={() => setActiveTab('health')}
              >
                <Heart className="h-4 w-4 mr-2" />
                Plant Health
              </TabsTrigger>
            </TabsList>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-garden-primary flex items-center">
                    <Plant className="h-5 w-5 mr-2" />
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
            </TabsContent>

            {/* Care Tab */}
            <TabsContent value="care" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-garden-primary flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Watering Schedule
                  </CardTitle>
                  <CardDescription>
                    Keep your plants happy and healthy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-garden-light p-4 rounded-lg">
                      <p className="text-garden-gray font-semibold mb-2">Today's Watering Tasks</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-garden-gray">Snake Plant</span>
                          <Button size="sm" variant="outline" className="h-8 border-garden-secondary text-garden-secondary hover:bg-garden-secondary/10">
                            <Droplet className="h-3 w-3 mr-1" />
                            Mark as Watered
                          </Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-garden-gray">Aloe Vera</span>
                          <Button size="sm" variant="outline" className="h-8 border-garden-secondary text-garden-secondary hover:bg-garden-secondary/10">
                            <Droplet className="h-3 w-3 mr-1" />
                            Mark as Watered
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-garden-light p-4 rounded-lg">
                      <p className="text-garden-gray font-semibold mb-2">Upcoming Tasks</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-garden-gray">Peace Lily</span>
                            <span className="text-xs text-garden-gray/70 ml-2">Tomorrow</span>
                          </div>
                          <Button size="sm" variant="ghost" className="h-8 text-garden-gray/70 hover:text-garden-gray">
                            <Info className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-garden-gray">Spider Plant</span>
                            <span className="text-xs text-garden-gray/70 ml-2">In 3 days</span>
                          </div>
                          <Button size="sm" variant="ghost" className="h-8 text-garden-gray/70 hover:text-garden-gray">
                            <Info className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-garden-primary flex items-center">
                    <Info className="h-5 w-5 mr-2" />
                    Care Tips
                  </CardTitle>
                  <CardDescription>
                    Personalized advice for your garden
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-garden-light p-4 rounded-lg">
                      <h4 className="font-semibold text-garden-primary mb-2">Snake Plant</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-garden-gray">
                        <li>Water only when soil is completely dry</li>
                        <li>Thrives in low light conditions</li>
                        <li>Rotate occasionally for even growth</li>
                      </ul>
                    </div>
                    <div className="bg-garden-light p-4 rounded-lg">
                      <h4 className="font-semibold text-garden-primary mb-2">Aloe Vera</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-garden-gray">
                        <li>Place in bright, indirect sunlight</li>
                        <li>Allow soil to dry completely between waterings</li>
                        <li>Use well-draining soil to prevent rot</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Health Tab */}
            <TabsContent value="health" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-garden-primary flex items-center">
                    <Upload className="h-5 w-5 mr-2" />
                    Plant Health Detection
                  </CardTitle>
                  <CardDescription>
                    Upload images to check your plant's health
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-garden-secondary/50 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto text-garden-secondary mb-4" />
                    <h3 className="text-lg font-semibold text-garden-primary mb-2">Upload Plant Image</h3>
                    <p className="text-garden-gray text-sm mb-4">
                      Drag and drop your plant image here, or click to select a file
                    </p>
                    <Button onClick={handleUploadImage} className="bg-garden-secondary hover:bg-garden-secondary/90">
                      Select Image
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="w-full md:w-80 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-garden-primary flex items-center text-lg">
                <BarChart4 className="h-5 w-5 mr-2" />
                Your Eco-Impact Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-garden-gray">CO2 Absorption</span>
                    <span className="text-sm font-semibold text-garden-primary">68%</span>
                  </div>
                  <Progress value={68} className="h-2 bg-garden-light [&>div]:bg-garden-primary" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-garden-gray">Biodiversity</span>
                    <span className="text-sm font-semibold text-garden-primary">42%</span>
                  </div>
                  <Progress value={42} className="h-2 bg-garden-light [&>div]:bg-garden-primary" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-garden-gray">Water Conservation</span>
                    <span className="text-sm font-semibold text-garden-primary">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-garden-light [&>div]:bg-garden-primary" />
                </div>
                
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-garden-primary mb-2">Tips to Improve</h4>
                  <ul className="text-xs space-y-1 text-garden-gray">
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Add more flowering plants to boost biodiversity</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Consider a rain collection system</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Add more native plants to your garden</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-garden-primary flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Garden Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-garden-gray space-y-2">
                <div className="flex justify-between">
                  <span>Upcoming Tasks</span>
                  <span className="text-garden-primary font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Planting Season</span>
                  <span className="text-garden-accent font-medium">Spring</span>
                </div>
                <div className="flex justify-between">
                  <span>Optimal Planting Days</span>
                  <span className="text-garden-primary font-medium">12</span>
                </div>
                <Button variant="link" className="p-0 h-auto text-garden-primary text-sm" onClick={() => toast.info('Calendar details coming soon!')}>
                  View Full Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
