
import { useState } from 'react';
import { Droplet, Leaf, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RecommendationsTab from './dashboard/RecommendationsTab';
import CareTab from './dashboard/CareTab';
import HealthTab from './dashboard/HealthTab';
import DashboardSidebar from './dashboard/DashboardSidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('recommendations');
  
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
        </div>
        
        {/* Sidebar */}
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
