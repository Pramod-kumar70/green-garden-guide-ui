
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingStep1 from '@/components/OnboardingStep1';
import OnboardingStep2 from '@/components/OnboardingStep2';
import { toast } from 'sonner';
import { Leaf } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    location: '',
    soilType: '',
    sunlight: 0,
    gardenSize: '',
    preferences: {}
  });
  const navigate = useNavigate();

  const handleStep1Data = (data: any) => {
    setUserData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStep2Data = (data: any) => {
    setUserData(prev => ({ ...prev, ...data }));
    // Here you would normally send the data to your backend
    toast.success('Profile setup complete!', {
      description: 'Redirecting to your personalized dashboard'
    });
    // Simulate API call
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleBackToStep1 = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-garden-light to-white flex flex-col">
      <div className="flex items-center justify-center py-6">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-garden-primary" />
          <span className="ml-2 text-xl font-display font-bold text-garden-primary">Green Garden Guide</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-10">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-xl border border-garden-secondary/20 p-6 sm:p-8">
            {/* Progress steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    step >= 1 ? 'bg-garden-primary text-white' : 'bg-garden-light text-garden-gray'
                  }`}>
                    1
                  </div>
                  <div className={`ml-2 ${step >= 1 ? 'text-garden-primary font-medium' : 'text-garden-gray'}`}>
                    Profile
                  </div>
                </div>
                <div className={`flex-grow border-t mx-4 ${step >= 2 ? 'border-garden-primary' : 'border-garden-light'}`}></div>
                <div className="flex items-center">
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    step >= 2 ? 'bg-garden-primary text-white' : 'bg-garden-light text-garden-gray'
                  }`}>
                    2
                  </div>
                  <div className={`ml-2 ${step >= 2 ? 'text-garden-primary font-medium' : 'text-garden-gray'}`}>
                    Preferences
                  </div>
                </div>
              </div>
            </div>

            {step === 1 && <OnboardingStep1 onNext={handleStep1Data} />}
            {step === 2 && <OnboardingStep2 onFinish={handleStep2Data} onBack={handleBackToStep1} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
