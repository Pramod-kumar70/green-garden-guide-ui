
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Droplet, Upload, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-garden-primary">Smart Gardening Features</h2>
              <p className="mt-4 text-lg text-garden-gray max-w-3xl mx-auto">
                Our AI-powered platform makes urban gardening easier, more sustainable, and more rewarding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="card-garden h-full">
                <CardHeader className="pb-2">
                  <Leaf className="h-10 w-10 text-garden-primary mb-2" />
                  <CardTitle className="text-xl text-garden-primary">Personalized Plant Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-garden-gray">
                    Get customized plant suggestions based on your location, soil type, sunlight availability, and preferences.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="card-garden h-full">
                <CardHeader className="pb-2">
                  <Droplet className="h-10 w-10 text-garden-primary mb-2" />
                  <CardTitle className="text-xl text-garden-primary">Watering & Care Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-garden-gray">
                    Receive optimal watering schedules and care tips tailored to each plant in your garden.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3 */}
              <Card className="card-garden h-full">
                <CardHeader className="pb-2">
                  <Upload className="h-10 w-10 text-garden-primary mb-2" />
                  <CardTitle className="text-xl text-garden-primary">Plant Health Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-garden-gray">
                    Upload images of your plants to diagnose issues and get treatment recommendations.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 4 */}
              <Card className="card-garden h-full">
                <CardHeader className="pb-2">
                  <BarChart4 className="h-10 w-10 text-garden-primary mb-2" />
                  <CardTitle className="text-xl text-garden-primary">Eco-Impact Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-garden-gray">
                    Monitor your garden's positive environmental impact with metrics on CO2 absorption and biodiversity.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 5 */}
              <Card className="card-garden h-full">
                <CardHeader className="pb-2">
                  <Leaf className="h-10 w-10 text-garden-primary mb-2" />
                  <CardTitle className="text-xl text-garden-primary">Companion Planting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-garden-gray">
                    Discover which plants grow better together to maximize growth and minimize pests naturally.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 6 */}
              <Card className="card-garden h-full bg-garden-primary text-white">
                <CardHeader className="pb-2">
                  <Leaf className="h-10 w-10 text-white mb-2" />
                  <CardTitle className="text-xl text-white">Start Your Garden Today</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-white/90 mb-4 flex-1">
                    Join our community of urban gardeners and start your sustainable gardening journey.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 group">
                    <Link to="/onboarding" className="flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-garden-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-garden-primary text-center mb-12">
              What Our Gardeners Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-garden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-garden-primary">
                        <img
                          src="https://i.pravatar.cc/150?img=1"
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-garden-primary text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 11h2v5l3-5h3l-4-7H9l1 7z"></path>
                          <path d="M19 6.3C20.3 7.67 21 9.23 21 11c0 4.42-4.03 8-9 8s-9-3.58-9-8 4.03-8 9-8c1.77 0 3.44.43 4.88 1.24"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-garden-primary">Sarah Johnson</h3>
                    <p className="text-sm text-garden-gray">Urban Gardener, NYC</p>
                    
                    <p className="mt-4 text-garden-gray text-center">
                      "Green Garden Guide transformed my tiny balcony into a thriving garden! The plant recommendations were perfect for my space."
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-garden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-garden-primary">
                        <img
                          src="https://i.pravatar.cc/150?img=11"
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-garden-primary text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 11h2v5l3-5h3l-4-7H9l1 7z"></path>
                          <path d="M19 6.3C20.3 7.67 21 9.23 21 11c0 4.42-4.03 8-9 8s-9-3.58-9-8 4.03-8 9-8c1.77 0 3.44.43 4.88 1.24"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-garden-primary">Michael Chen</h3>
                    <p className="text-sm text-garden-gray">Rooftop Gardener, Chicago</p>
                    
                    <p className="mt-4 text-garden-gray text-center">
                      "The eco-impact tracking feature makes me proud of my contribution to the environment. It's amazing to see the difference my garden makes!"
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-garden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-garden-primary">
                        <img
                          src="https://i.pravatar.cc/150?img=5"
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-garden-primary text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 11h2v5l3-5h3l-4-7H9l1 7z"></path>
                          <path d="M19 6.3C20.3 7.67 21 9.23 21 11c0 4.42-4.03 8-9 8s-9-3.58-9-8 4.03-8 9-8c1.77 0 3.44.43 4.88 1.24"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-garden-primary">Emily Rodriguez</h3>
                    <p className="text-sm text-garden-gray">Community Garden Leader, LA</p>
                    
                    <p className="mt-4 text-garden-gray text-center">
                      "The plant health detection saved our tomatoes! It identified a fungal issue early, and we were able to treat it before it spread."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-garden-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Urban Space?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of eco-conscious gardeners creating green, sustainable spaces in urban environments.
            </p>
            <Button asChild className="bg-white text-garden-primary hover:bg-white/90 text-lg px-8 py-6 rounded-lg group">
              <Link to="/onboarding" className="flex items-center">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
