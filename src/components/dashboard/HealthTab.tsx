
import { Upload } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HealthTab = () => {
  const handleUploadImage = () => {
    toast.info('Image upload functionality will be available soon!');
  };

  return (
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
  );
};

export default HealthTab;
