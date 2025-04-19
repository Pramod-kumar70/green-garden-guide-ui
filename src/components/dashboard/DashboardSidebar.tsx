
import { BarChart4, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const DashboardSidebar = () => {
  return (
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
  );
};

export default DashboardSidebar;
