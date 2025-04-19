
import { useState } from 'react';
import TabsComponent from './dashboard/TabsComponent';
import DashboardSidebar from './dashboard/DashboardSidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('recommendations');
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Sidebar */}
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
