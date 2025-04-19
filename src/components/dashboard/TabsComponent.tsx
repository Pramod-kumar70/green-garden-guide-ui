
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Droplet, Heart } from 'lucide-react';
import RecommendationsTab from './RecommendationsTab';
import CareTab from './CareTab';
import HealthTab from './HealthTab';

interface TabsComponentProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsComponent = ({ activeTab, setActiveTab }: TabsComponentProps) => {
  return (
    <Tabs defaultValue="recommendations" className="space-y-6">
      <TabsList className="bg-garden-light">
        <TabsTrigger 
          value="recommendations" 
          className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
          onClick={() => setActiveTab('recommendations')}
        >
          <Leaf className="h-4 w-4 mr-2" />
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

      <TabsContent value="recommendations">
        <RecommendationsTab />
      </TabsContent>

      <TabsContent value="care">
        <CareTab />
      </TabsContent>

      <TabsContent value="health">
        <HealthTab />
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
