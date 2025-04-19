
import Navbar from '@/components/Navbar';
import SettingsComponent from '@/components/Settings';
import Footer from '@/components/Footer';

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-garden-light/30">
        <SettingsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
