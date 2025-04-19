
import { useState } from 'react';
import { 
  Bell, 
  Globe, 
  Cpu, 
  Save, 
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

const Settings = () => {
  const [language, setLanguage] = useState('english');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [deviceConnected, setDeviceConnected] = useState(false);
  
  const handleSaveSettings = () => {
    toast.success('Settings saved successfully!');
  };
  
  const handleConnectDevice = () => {
    setDeviceConnected(true);
    toast.success('Smart device connected successfully!');
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent. We\'ll respond shortly!');
    // Reset form here
  };
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-garden-primary mb-6">Settings</h1>
      
      <Tabs defaultValue="preferences" className="space-y-6">
        <TabsList className="bg-garden-light">
          <TabsTrigger 
            value="preferences" 
            className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
          >
            <Globe className="h-4 w-4 mr-2" />
            User Preferences
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger 
            value="devices" 
            className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
          >
            <Cpu className="h-4 w-4 mr-2" />
            Smart Devices
          </TabsTrigger>
          <TabsTrigger 
            value="help" 
            className="data-[state=active]:bg-garden-primary data-[state=active]:text-white"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Help & Support
          </TabsTrigger>
        </TabsList>
        
        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle className="text-garden-primary">Language & Region</CardTitle>
              <CardDescription>
                Select your preferred language and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="input-garden">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="mandarin">Mandarin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveSettings} className="btn-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-garden-primary">Notification Settings</CardTitle>
              <CardDescription>
                Customize how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emailNotifications" className="text-base">Email Notifications</Label>
                    <p className="text-sm text-garden-gray">Receive updates via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-garden-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="smsNotifications" className="text-base">SMS Notifications</Label>
                    <p className="text-sm text-garden-gray">Receive updates via text message</p>
                  </div>
                  <Switch
                    id="smsNotifications"
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                    className="data-[state=checked]:bg-garden-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="weatherAlerts" className="text-base">Weather Alerts</Label>
                    <p className="text-sm text-garden-gray">Get notified about weather conditions</p>
                  </div>
                  <Switch
                    id="weatherAlerts"
                    checked={weatherAlerts}
                    onCheckedChange={setWeatherAlerts}
                    className="data-[state=checked]:bg-garden-primary"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveSettings} className="btn-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Devices Tab */}
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle className="text-garden-primary">Smart Device Connection</CardTitle>
              <CardDescription>
                Connect Arduino or Raspberry Pi devices for automated garden monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!deviceConnected ? (
                <div className="bg-garden-light rounded-lg p-6 text-center">
                  <Cpu className="h-12 w-12 mx-auto text-garden-primary mb-4" />
                  <h3 className="text-lg font-semibold text-garden-primary mb-2">Connect a Smart Device</h3>
                  <p className="text-garden-gray text-sm mb-4">
                    Link your Arduino or Raspberry Pi to automate watering and monitoring
                  </p>
                  <Button onClick={handleConnectDevice} className="btn-primary">
                    Connect Device
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-garden-light rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-garden-primary">Garden Monitor</h3>
                        <p className="text-sm text-garden-gray">Raspberry Pi 4</p>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-sm text-garden-gray">Connected</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-garden-primary mb-2">Device Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="autoWater" className="cursor-pointer">Automatic Watering</Label>
                        <Switch id="autoWater" className="data-[state=checked]:bg-garden-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="soilMonitor" className="cursor-pointer">Soil Moisture Alerts</Label>
                        <Switch id="soilMonitor" defaultChecked className="data-[state=checked]:bg-garden-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="lightMonitor" className="cursor-pointer">Light Level Monitoring</Label>
                        <Switch id="lightMonitor" defaultChecked className="data-[state=checked]:bg-garden-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button onClick={handleSaveSettings} className="btn-primary">
                      <Save className="h-4 w-4 mr-2" />
                      Save Device Settings
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Help & Support Tab */}
        <TabsContent value="help">
          <Card>
            <CardHeader>
              <CardTitle className="text-garden-primary">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1" className="border border-garden-secondary/20 rounded-lg px-4">
                  <AccordionTrigger className="text-garden-primary hover:no-underline hover:text-garden-primary/80">
                    How accurate are the plant recommendations?
                  </AccordionTrigger>
                  <AccordionContent className="text-garden-gray">
                    Our plant recommendations are based on your location, soil type, sunlight availability, and preferences. 
                    They are tailored to your specific conditions using our AI model that has been trained on extensive horticultural data.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-garden-secondary/20 rounded-lg px-4">
                  <AccordionTrigger className="text-garden-primary hover:no-underline hover:text-garden-primary/80">
                    How does the plant health detection work?
                  </AccordionTrigger>
                  <AccordionContent className="text-garden-gray">
                    The plant health detection feature uses computer vision to analyze images of your plants. 
                    It can identify common diseases, nutrient deficiencies, and other issues, then provide recommendations for treatment.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-garden-secondary/20 rounded-lg px-4">
                  <AccordionTrigger className="text-garden-primary hover:no-underline hover:text-garden-primary/80">
                    Can I change my garden profile information?
                  </AccordionTrigger>
                  <AccordionContent className="text-garden-gray">
                    Yes, you can update your garden profile information at any time from the settings menu. 
                    This includes your location, soil type, garden size, and preferences.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-garden-secondary/20 rounded-lg px-4">
                  <AccordionTrigger className="text-garden-primary hover:no-underline hover:text-garden-primary/80">
                    How are the eco-impact scores calculated?
                  </AccordionTrigger>
                  <AccordionContent className="text-garden-gray">
                    Eco-impact scores are calculated based on the CO2 absorption potential of your plants, 
                    their contribution to biodiversity, and your garden's water conservation practices.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-garden-primary mb-4">Still Need Help?</h3>
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="input-garden" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" className="input-garden" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      placeholder="How can we help you?" 
                      className="input-garden w-full" 
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="btn-primary">
                    Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
