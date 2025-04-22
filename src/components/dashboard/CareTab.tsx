
import { Droplet, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGarden } from '@/contexts/GardenContext';

const CareTab = () => {
  const { gardenPlants } = useGarden();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-garden-primary flex items-center">
            <Droplet className="h-5 w-5 mr-2" />
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
                {gardenPlants.map((plant) => (
                  <div key={plant.id} className="flex justify-between items-center">
                    <span className="text-garden-gray">{plant.name}</span>
                    <Button size="sm" variant="outline" className="h-8 border-garden-secondary text-garden-secondary hover:bg-garden-secondary/10">
                      <Droplet className="h-3 w-3 mr-1" />
                      Mark as Watered
                    </Button>
                  </div>
                ))}
                {gardenPlants.length === 0 && (
                  <p className="text-garden-gray/70 text-sm italic">No plants added to your garden yet</p>
                )}
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
    </div>
  );
};

export default CareTab;
