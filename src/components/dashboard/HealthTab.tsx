
import { useState, useRef } from 'react';
import { Upload, AlertTriangle, BugOff, Shield, Pill } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type DiseaseInfo = {
  name: string;
  symptoms: string;
  precautions: string[];
  cures: string[];
};

const HealthTab = () => {
  const [showDiseaseInfo, setShowDiseaseInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const commonDiseases: DiseaseInfo[] = [
    {
      name: "Powdery Mildew",
      symptoms: "White powdery spots on leaves and stems",
      precautions: [
        "Ensure good air circulation between plants",
        "Avoid overwatering and keep leaves dry",
        "Remove affected leaves promptly"
      ],
      cures: [
        "Apply neem oil solution to affected areas",
        "Use sulfur-based fungicide",
        "Prune affected parts and dispose properly"
      ]
    },
    {
      name: "Root Rot",
      symptoms: "Wilting leaves and dark, mushy roots",
      precautions: [
        "Use well-draining soil",
        "Don't overwater plants",
        "Ensure pots have drainage holes"
      ],
      cures: [
        "Remove plant from soil and trim affected roots",
        "Repot in fresh, sterile potting mix",
        "Apply fungicide specifically for root rot"
      ]
    },
    {
      name: "Leaf Spot Disease",
      symptoms: "Brown or black spots on leaves",
      precautions: [
        "Remove infected leaves",
        "Improve air circulation",
        "Water at soil level to keep leaves dry"
      ],
      cures: [
        "Apply copper-based fungicide",
        "Remove severely infected leaves",
        "Increase spacing between plants"
      ]
    }
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
      // Simulate image analysis completion after a delay (to mimic real processing)
      setTimeout(() => {
        setShowDiseaseInfo(true);
        toast.info("Image analysis complete. Showing common plant diseases and cures.");
      }, 1500);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
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
              <Upload className="h-12 w-12 mx-auto text-garden-secondary mb-4" />
            )}
            
            <h3 className="text-lg font-semibold text-garden-primary mb-2">
              {selectedImage ? "Plant Image Uploaded" : "Upload Plant Image"}
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

      {showDiseaseInfo && (
        <Card>
          <CardHeader>
            <CardTitle className="text-garden-primary flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Plant Diseases & Treatments
            </CardTitle>
            <CardDescription>
              Detected diseases, their symptoms, precautions, and cures
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
