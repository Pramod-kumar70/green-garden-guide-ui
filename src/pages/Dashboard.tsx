
import Navbar from '@/components/Navbar';
import DashboardComponent from '@/components/Dashboard';
import Footer from '@/components/Footer';
import { GardenProvider } from '@/contexts/GardenContext';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-garden-light/30">
        <GardenProvider>
          <DashboardComponent />
        </GardenProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
