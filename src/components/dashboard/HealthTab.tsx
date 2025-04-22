
import { useState, useRef } from 'react';
import { Upload, AlertTriangle, BugOff, Shield, Pill, AloeVera, Snake } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type DiseaseInfo = {
  name: string;
  symptoms: string;
  precautions: string[];
  cures: string[];
};

const plantDiseases = {
  aloeVera: [
    {
      name: "Aloe Rust",
      symptoms: "Brown, circular spots on leaves",
      precautions: [
        "Avoid overwatering",
        "Ensure good air circulation",
        "Keep leaves dry when watering"
      ],
      cures: [
        "Remove affected leaves",
        "Apply fungicide suitable for succulents",
        "Improve growing conditions"
      ]
    },
    {
      name: "Soft Rot",
      symptoms: "Mushy, water-soaked areas on leaves",
      precautions: [
        "Avoid overwatering",
        "Use well-draining soil",
        "Keep plant in proper temperature"
      ],
      cures: [
        "Remove infected parts",
        "Reduce watering",
        "Apply copper-based fungicide"
      ]
    }
  ],
  snakePlant: [
    {
      name: "Root Rot",
      symptoms: "Yellowing leaves, mushy base",
      precautions: [
        "Use well-draining soil",
        "Water only when soil is dry",
        "Avoid standing water in pot"
      ],
      cures: [
        "Remove plant from soil",
        "Cut away rotted roots",
        "Repot in fresh, dry soil"
      ]
    },
    {
      name: "Leaf Spot",
      symptoms: "Dark spots on leaves with yellow halos",
      precautions: [
        "Avoid wetting leaves",
        "Maintain good air circulation",
        "Keep leaves clean"
      ],
      cures: [
        "Remove affected leaves",
        "Apply fungicide",
        "Adjust watering practices"
      ]
    }
  ]
};

const HealthTab = () => {
  const [showDiseaseInfo, setShowDiseaseInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [plantType, setPlantType] = useState<'aloeVera' | 'snakePlant' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
      // Simulate image recognition - in this example we'll randomly choose between aloe vera and snake plant
      // In a real app, this would use actual image recognition
      const randomPlant = Math.random() > 0.5 ? 'aloeVera' : 'snakePlant';
      
      setTimeout(() => {
        setPlantType(randomPlant);
        setShowDiseaseInfo(true);
        toast.info(`${randomPlant === 'aloeVera' ? 'Aloe Vera' : 'Snake Plant'} detected. Showing specific diseases and cures.`);
      }, 1500);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const getPlantIcon = () => {
    if (!plantType) return <Upload className="h-12 w-12" />;
    return plantType === 'aloeVera' 
      ? <AloeVera className="h-12 w-12" />
      : <Snake className="h-12 w-12" />;
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
            {selectedImage ? (
              <div className="mb-4">
                <img 
                  src={selectedImage} 
                  alt="Selected plant" 
                  className="max-h-64 mx-auto rounded-lg"
                />
              </div>
            ) : (
              <div className="text-garden-secondary mb-4">
                {getPlantIcon()}
              </div>
            )}
            
            <h3 className="text-lg font-semibold text-garden-primary mb-2">
              {selectedImage ? `${plantType === 'aloeVera' ? 'Aloe Vera' : 'Snake Plant'} Image Uploaded` : "Upload Plant Image"}
            </h3>
            
            <p className="text-garden-gray text-sm mb-4">
              {selectedImage 
                ? "Your plant image has been uploaded for analysis" 
                : "Drag and drop your plant image here, or click to select a file"
              }
            </p>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            
            <Button 
              onClick={handleUploadClick} 
              className="bg-garden-secondary hover:bg-garden-secondary/90"
            >
              {selectedImage ? "Select Another Image" : "Select Image"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {showDiseaseInfo && plantType && (
        <Card>
          <CardHeader>
            <CardTitle className="text-garden-primary flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              {plantType === 'aloeVera' ? 'Aloe Vera' : 'Snake Plant'} Diseases & Treatments
            </CardTitle>
            <CardDescription>
              Common diseases, their symptoms, precautions, and cures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {plantDiseases[plantType].map((disease, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-2 mb-2">
                    <BugOff className="h-5 w-5 text-garden-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-garden-primary">{disease.name}</h4>
                      <p className="text-sm text-garden-gray">{disease.symptoms}</p>
                    </div>
                  </div>
                  
                  <div className="ml-7 space-y-4">
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

                    <div className="flex items-start gap-2">
                      <Pill className="h-5 w-5 text-garden-primary mt-1" />
                      <div>
                        <h5 className="text-sm font-medium text-garden-primary mb-1">Cures:</h5>
                        <ul className="list-disc list-inside text-sm text-garden-gray space-y-1">
                          {disease.cures.map((cure, idx) => (
                            <li key={idx}>{cure}</li>
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
