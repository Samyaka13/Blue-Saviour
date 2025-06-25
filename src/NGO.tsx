
import React, { useState } from 'react';
import Bag from '@/assets/bag.jpeg'
import lp from '@/assets/litterpicker.webp'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const NGO: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');
  const [availability, setAvailability] = useState('all');
  const [donationAmount, setDonationAmount] = useState('');
  const [activeTab, setActiveTab] = useState('monetary');

  const equipmentItems = [
   
  
    {
      id: 3,
      name: 'Beach Cleanup Set',
      ngo: 'Clean Shores Initiative',
      quantity: 12,
      imageUrl: 'https://readdy.ai/api/search-image?query=Beach%20cleanup%20equipment%20set%20with%20reusable%20bags%2C%20gloves%2C%20and%20trash%20pickers%20on%20a%20clean%20light%20blue%20background%2C%20professional%20product%20photography%20with%20soft%20shadows&width=300&height=200&seq=3&orientation=landscape'
    },
   
    {
      id: 3,
      name: 'Garbage Bags',
      ngo: 'NEEL',
      quantity: 1,
      imageUrl: Bag
    },
    {
      id: 3,
      name: 'Litter Picker',
      ngo: 'Samudra Rakshak',
      quantity: 14,
      imageUrl: lp
    },
  
   
    
   
  ];

  const neededSupplies = [
    { id: 1, name: 'Reusable Water Bottles', quantity: 50 },
    { id: 2, name: 'Biodegradable Trash Bags', quantity: 200 },
    { id: 3, name: 'Solar Chargers', quantity: 25 },
    { id: 4, name: 'Waterproof Notebooks', quantity: 100 },
    { id: 5, name: 'LED Headlamps', quantity: 30 },
    { id: 6, name: 'First Aid Kits', quantity: 15 },
    { id: 7, name: 'Water Filtration Systems', quantity: 10 },
    { id: 8, name: 'GPS Trackers', quantity: 8 },
    { id: 9, name: 'Weather-Resistant Markers', quantity: 75 },
    { id: 10, name: 'Portable Power Banks', quantity: 40 }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#1a5f7a] text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-water text-2xl"></i>
            <h1 className="text-xl font-bold">Blue-Saviour</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-[#f8c537] !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-bell mr-2"></i>
              Notifications
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#f8c537] !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-user-circle mr-2"></i>
              Account
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - GearUp Equipment Library (60%) */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1a5f7a]">GearUp Equipment Library</h2>
                <Badge variant="outline" className="bg-[#e3f2f5] text-[#1a5f7a] px-3 py-1">
                  <i className="fas fa-box-open mr-2"></i>
                  86 Items Available
                </Badge>
              </div>

              {/* Search and Filters */}
              <div className="mb-6">
                <div className="relative mb-4">
                  <Input
                    type="text"
                    placeholder="Search equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border-[#dde5e7] focus:border-[#1a5f7a] text-sm"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-[140px] bg-white border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="monitoring">Monitoring</SelectItem>
                      <SelectItem value="cleanup">Cleanup</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-[140px] bg-white border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="west">West Coast</SelectItem>
                      <SelectItem value="east">East Coast</SelectItem>
                      <SelectItem value="gulf">Gulf Region</SelectItem>
                      <SelectItem value="islands">Island Bases</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={availability} onValueChange={setAvailability}>
                    <SelectTrigger className="w-[140px] bg-white border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="available">Available Now</SelectItem>
                      <SelectItem value="limited">Limited Stock</SelectItem>
                      <SelectItem value="reserved">Reserved</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="border-[#dde5e7] hover:bg-[#e3f2f5] text-[#1a5f7a] !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-sliders-h mr-2"></i>
                    More Filters
                  </Button>
                </div>
              </div>

              {/* Equipment Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {equipmentItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden border border-[#dde5e7] hover:shadow-lg transition-shadow duration-300">
                    <div className="h-[200px] overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg font-bold text-[#1a5f7a]">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 pb-2">
                      <p className="text-sm text-gray-600 mb-2">
                        <i className="fas fa-building mr-2"></i>
                        {item.ngo}
                      </p>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-[#e3f2f5] text-[#1a5f7a]">
                          <i className="fas fa-cubes mr-1"></i>
                          {item.quantity} Available
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-2">
                      <Button className="w-full bg-[#ff7e4d] hover:bg-[#ff6a33] text-white !rounded-button whitespace-nowrap cursor-pointer">
                        Request Item
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-chevron-left text-xs"></i>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 bg-[#1a5f7a] text-white border-[#1a5f7a] !rounded-button whitespace-nowrap cursor-pointer">1</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">2</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">3</Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-chevron-right text-xs"></i>
                  </Button>
                </div>
              </div>
            </div>

            {/* Admin Button */}
            <div className="fixed bottom-8 right-8 z-10">
              <Button className="bg-[#f8c537] hover:bg-[#f5b400] text-[#1a5f7a] font-bold shadow-lg !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-plus mr-2"></i>
                Add to Inventory
              </Button>
            </div>
          </div>

          {/* Right Column - The Ripple Fund (40%) */}
          <div className="w-full md:w-2/5">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1a5f7a]">The Ripple Fund</h2>
                <Badge variant="outline" className="bg-[#e3f2f5] text-[#1a5f7a] px-3 py-1">
                  <i className="fas fa-hand-holding-heart mr-2"></i>
                  Impact Partner
                </Badge>
              </div>

              <Tabs defaultValue="monetary" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6 bg-[#e3f2f5]">
                  <TabsTrigger 
                    value="monetary" 
                    className={`data-[state=active]:bg-[#1a5f7a] data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    <i className="fas fa-dollar-sign mr-2"></i>
                    Monetary
                  </TabsTrigger>
                  <TabsTrigger 
                    value="equipment" 
                    className={`data-[state=active]:bg-[#1a5f7a] data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    <i className="fas fa-tools mr-2"></i>
                    Equipment
                  </TabsTrigger>
                  <TabsTrigger 
                    value="supplies" 
                    className={`data-[state=active]:bg-[#1a5f7a] data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    <i className="fas fa-box mr-2"></i>
                    Supplies
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monetary" className="mt-0">
                  <div className="bg-[#e3f2f5] rounded-lg p-4 mb-6">
                    <p className="text-sm text-[#1a5f7a]">
                      Your donations help fund critical conservation efforts and provide essential resources to our partner NGOs.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-[#1a5f7a]">Choose an amount</h3>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {['₹25', '₹50', '₹100', '₹250'].map((amount) => (
                        <Button 
                          key={amount} 
                          variant="outline"
                          onClick={() => setDonationAmount(amount.substring(1))}
                          className={`border-2 ₹{donationAmount === amount.substring(1) ? 'border-[#1a5f7a] bg-[#e3f2f5]' : 'border-[#dde5e7]'} hover:border-[#1a5f7a] hover:bg-[#e3f2f5] text-[#1a5f7a] font-bold !rounded-button whitespace-nowrap cursor-pointer`}
                        >
                          {amount}
                        </Button>
                      ))}
                    </div>
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                      <Input
                        type="text"
                        placeholder="Custom amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="pl-8 border-[#dde5e7]"
                      />
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-[#1a5f7a]">Donation frequency</h3>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 bg-[#e3f2f5] border-[#1a5f7a] text-[#1a5f7a] font-medium !rounded-button whitespace-nowrap cursor-pointer">One-time</Button>
                        <Button variant="outline" className="flex-1 border-[#dde5e7] text-gray-600 font-medium !rounded-button whitespace-nowrap cursor-pointer">Monthly</Button>
                      </div>
                    </div>

                    <Button className="w-full bg-[#ff7e4d] hover:bg-[#ff6a33] text-white font-bold py-3 !rounded-button whitespace-nowrap cursor-pointer">
                      Donate Now
                    </Button>
                  </div>

                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <i className="fas fa-lock mr-2"></i>
                      Secure Payment
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-receipt mr-2"></i>
                      Tax Deductible
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="equipment" className="mt-0">
                  <div className="bg-[#e3f2f5] rounded-lg p-4 mb-6">
                    <p className="text-sm text-[#1a5f7a]">
                      Donate your gently used or new equipment to support conservation efforts around the world.
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="item-name" className="text-[#1a5f7a] font-medium">Equipment Name</Label>
                      <Input id="item-name" placeholder="e.g., Underwater Camera" className="mt-1 border-[#dde5e7]" />
                    </div>
                    
                    <div>
                      <Label htmlFor="item-condition" className="text-[#1a5f7a] font-medium">Condition</Label>
                      <Select>
                        <SelectTrigger id="item-condition" className="mt-1 border-[#dde5e7] !rounded-button whitespace-nowrap cursor-pointer">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="like-new">Like New</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="item-quantity" className="text-[#1a5f7a] font-medium">Quantity</Label>
                      <Input id="item-quantity" type="number" defaultValue="1" min="1" className="mt-1 border-[#dde5e7]" />
                    </div>
                    
                    <div>
                      <Label className="text-[#1a5f7a] font-medium">Upload Images</Label>
                      <div className="mt-1 border-2 border-dashed border-[#dde5e7] rounded-lg p-6 text-center cursor-pointer hover:bg-[#f5f1e8] transition-colors">
                        <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                        <p className="text-sm text-gray-500">Drag and drop files here or click to browse</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#1a5f7a] hover:bg-[#144a5f] text-white font-bold py-3 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-gift mr-2"></i>
                    Offer Equipment
                  </Button>
                </TabsContent>

                <TabsContent value="supplies" className="mt-0">
                  <div className="bg-[#e3f2f5] rounded-lg p-4 mb-6">
                    <p className="text-sm text-[#1a5f7a]">
                      Our partner organizations need these specific supplies for their ongoing conservation projects.
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-[#1a5f7a]">Needed Supplies</h3>
                      <Badge variant="outline" className="bg-[#e3f2f5] text-[#1a5f7a]">
                        Updated June 22, 2025
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Select items to sponsor for our partner organizations.
                    </p>
                  </div>

                  <ScrollArea className="h-[300px] pr-4 mb-6">
                    <div className="space-y-3">
                      {neededSupplies.map((supply) => (
                        <div key={supply.id} className="flex items-center justify-between p-3 border border-[#dde5e7] rounded-lg hover:bg-[#f5f1e8] transition-colors">
                          <div>
                            <h4 className="font-medium text-[#1a5f7a]">{supply.name}</h4>
                            <p className="text-sm text-gray-500">Need: {supply.quantity} units</p>
                          </div>
                          <Button variant="outline" className="bg-white border-[#ff7e4d] text-[#ff7e4d] hover:bg-[#ff7e4d] hover:text-white !rounded-button whitespace-nowrap cursor-pointer">
                            Sponsor
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <Separator className="my-6" />

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">
                      Don't see what you're looking to donate?
                    </p>
                    <Button variant="outline" className="border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#e3f2f5] !rounded-button whitespace-nowrap cursor-pointer">
                      <i className="fas fa-comment-alt mr-2"></i>
                      Contact Our Team
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-lg font-bold text-[#1a5f7a] mb-4">Your Impact</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff7e4d] mb-1">156</div>
                  <div className="text-xs text-gray-600">Items Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f8c537] mb-1">23</div>
                  <div className="text-xs text-gray-600">NGOs Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a5f7a] mb-1">₹12.4k</div>
                  <div className="text-xs text-gray-600">Funds Raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a5f7a] text-white py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Resource Hub</h3>
              <p className="text-sm text-gray-300 mb-4">
                Connecting conservation organizations with the resources they need to protect our oceans and coastlines.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Partner NGOs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Success Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Volunteer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Equipment Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Conservation Tips</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Donation FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Stay updated with our latest resources and conservation efforts.
              </p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-[#144a5f] border-none text-white text-sm rounded-l-md focus:ring-[#f8c537] focus:border-[#f8c537]" 
                />
                <Button className="bg-[#f8c537] hover:bg-[#f5b400] text-[#1a5f7a] rounded-l-none !rounded-button whitespace-nowrap cursor-pointer">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#144a5f] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2025 Resource Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-300">Secure payments with:</span>
              <div className="flex space-x-2">
                <i className="fab fa-cc-visa text-xl text-gray-300"></i>
                <i className="fab fa-cc-mastercard text-xl text-gray-300"></i>
                <i className="fab fa-cc-paypal text-xl text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGO;
