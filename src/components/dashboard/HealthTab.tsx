
import { useState } from 'react';
import { Upload, AlertTriangle, BugOff, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type DiseaseInfo = {
  name: string;
  symptoms: string;
  precautions: string[];
};

const HealthTab = () => {
  const [showDiseaseInfo, setShowDiseaseInfo] = useState(false);

  const commonDiseases: DiseaseInfo[] = [
    {
      name: "Powdery Mildew",
      symptoms: "White powdery spots on leaves and stems",
      precautions: [
        "Ensure good air circulation between plants",
        "Avoid overwatering and keep leaves dry",
        "Remove affected leaves promptly"
      ]
    },
    {
      name: "Root Rot",
      symptoms: "Wilting leaves and dark, mushy roots",
      precautions: [
        "Use well-draining soil",
        "Don't overwater plants",
        "Ensure pots have drainage holes"
      ]
    },
    {
      name: "Leaf Spot Disease",
      symptoms: "Brown or black spots on leaves",
      precautions: [
        "Remove infected leaves",
        "Improve air circulation",
        "Water at soil level to keep leaves dry"
      ]
    }
  ];

  const handleUploadImage = () => {
    setShowDiseaseInfo(true);
    toast.info('Image analysis complete. Showing common plant diseases and precautions.');
  };

  return (
    <div className="space-y-6">
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

      {showDiseaseInfo && (
        <Card>
          <CardHeader>
            <CardTitle className="text-garden-primary flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Common Plant Diseases & Precautions
            </CardTitle>
            <CardDescription>
              Here are some common plant diseases and how to prevent them
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {commonDiseases.map((disease, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-2 mb-2">
                    <BugOff className="h-5 w-5 text-garden-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-garden-primary">{disease.name}</h4>
                      <p className="text-sm text-garden-gray">{disease.symptoms}</p>
                    </div>
                  </div>
                  <div className="ml-7">
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-garden-secondary mt-1" />
                      <div>
                        <h5 className="text-sm font-medium text-garden-secondary mb-1">Precautions:</h5>
                        <ul className="list-disc list-inside text-sm text-garden-gray space-y-1">
                          {disease.precautions.map((precaution, idx) => (
                            <li key={idx}>{precaution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HealthTab;

