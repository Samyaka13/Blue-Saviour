import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Diveyam from '@/assets/Diveyam.jpeg'
const BlueRoots: React.FC = () => {
  // Current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Quest data
  const quests = [
    {
      id: 1,
      title: "Marine Debris Identification",
      description: "Learn to identify and categorize common marine debris types",
      status: "completed",
      icon: "fish",
      xp: 250
    },
    {
      id: 2,
      title: "Coastal Cleanup Techniques",
      description: "Master effective methods for beach and coastal cleanup operations",
      status: "completed",
      icon: "water",
      xp: 300
    },
    {
      id: 3,
      title: "Plastic Pollution Solutions",
      description: "Discover innovative approaches to reduce plastic waste in oceans",
      status: "completed",
      icon: "recycle",
      xp: 350
    },
    {
      id: 4,
      title: "Ocean Ecosystem Protection",
      description: "Understand the delicate balance of marine ecosystems and protection strategies",
      status: "completed",
      icon: "seedling",
      xp: 400
    },
    {
      id: 5,
      title: "Community Engagement Strategies",
      description: "Learn how to mobilize your community for environmental action",
      status: "available",
      icon: "users",
      xp: 450
    },
    {
      id: 6,
      title: "Advanced Marine Conservation",
      description: "Deep dive into scientific approaches to ocean conservation",
      status: "locked",
      icon: "microscope",
      xp: 500
    }
  ];

  // Rewards data
  const rewards = [
    {
      id: 1,
      title: "Coastal Guardian",
      date: "May 12, 2025",
      description: "Successfully completed 3 coastal cleanup missions",
      verified: true
    },
    {
      id: 2,
      title: "Waste Warrior",
      date: "June 2, 2025",
      description: "Collected over 25kg of ocean waste",
      verified: true
    },
    {
      id: 3,
      title: "Community Leader",
      date: "June 18, 2025",
      description: "Organized a community cleanup event with 15+ participants",
      verified: true
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen w-full relative pb-20">
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg">
        <div className="flex items-center">
          <i className="fas fa-arrow-left mr-4"></i>
          <h1 className="text-xl font-semibold">Blue-Saviour</h1>
        </div>
        <div className="flex items-center">
          <i className="fas fa-bell mr-4 text-lg"></i>
          <Avatar className="h-8 w-8 border-2 border-white">
            <img src={Diveyam} alt="User" />
          </Avatar>
        </div>
      </div>

      <div className="pt-20 pb-16 px-4">
        {/* BlueRoots Progress Tracker */}
        <div className="bg-white rounded-xl p-5 shadow-lg mb-6 border border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-blue-800">BlueRoots Progress</h2>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <i className="fas fa-info-circle mr-1"></i> Level 4
            </Badge>
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img 
                src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20a%20small%20mangrove%20tree%20sapling%20with%20detailed%20roots%2C%20isolated%20on%20transparent%20background%2C%20teal%20and%20green%20colors%2C%20photorealistic%20rendering%2C%20environmental%20conservation%20symbol%2C%20high%20detail%20quality&width=80&height=80&seq=mangrove1&orientation=squarish" 
                alt="Mangrove" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-blue-600 font-medium">Your Next Mangrove</span>
                <span className="text-sm font-semibold text-blue-800">4/5 Quests</span>
              </div>
              <Progress 
                value={80} 
                className="h-3 bg-blue-100"
                indicatorClassName="bg-blue-500"
              />
              <p className="text-xs text-blue-600 mt-1">Complete 1 more quest to plant your 3rd mangrove tree!</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-blue-600 font-medium">Waste Collected</span>
              <span className="text-sm font-semibold text-blue-800">35.7 / 50 kg</span>
            </div>
            <Progress 
              value={71} 
              className="h-3 bg-blue-100"
              indicatorClassName="bg-blue-500"
            />
          </div>
        </div>

        {/* Clean-up Chronicles */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-blue-800">Clean-up Chronicles</h2>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
              View All <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </Button>
          </div>

          <ScrollArea className="h-[380px] pr-2">
            {quests.map((quest) => (
              <Card 
                key={quest.id} 
                className={`mb-4 overflow-hidden border-0 shadow-md bg-white ${quest.status === 'locked' ? 'opacity-70' : ''} ${quest.status === 'available' ? 'border-2 border-blue-300' : ''}`}
              >
                <div className="p-4 flex">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-sm ${quest.status === 'completed' ? 'bg-blue-100' : quest.status === 'available' ? 'bg-blue-500' : 'bg-gray-300'}`}
                  >
                    <i className={`fas fa-${quest.icon} text-xl ${quest.status === 'completed' ? 'text-blue-600' : quest.status === 'available' ? 'text-white' : 'text-gray-500'}`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-blue-800">{quest.title}</h3>
                      {quest.status === 'completed' ? (
                        <Badge className="bg-green-100 text-green-700">
                          <i className="fas fa-check mr-1"></i> Completed
                        </Badge>
                      ) : quest.status === 'locked' ? (
                        <Badge className="bg-gray-200 text-gray-600">
                          <i className="fas fa-lock mr-1"></i> Locked
                        </Badge>
                      ) : (
                        <Badge className="bg-orange-100 text-orange-600 animate-pulse">
                          <i className="fas fa-star mr-1"></i> New
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-blue-600 mt-1 mb-3">{quest.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-blue-700 font-medium">
                        <i className="fas fa-bolt mr-1 text-yellow-500"></i> {quest.xp} XP
                      </span>
                      {quest.status === 'available' && (
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all">
                          Start Quest <i className="fas fa-play ml-2 text-xs"></i>
                        </Button>
                      )}
                      {quest.status === 'completed' && (
                        <Button variant="outline" className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 shadow-sm">
                          Review <i className="fas fa-redo ml-2 text-xs"></i>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </ScrollArea>
        </div>

        {/* BlueRoots Rewards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-blue-800">BlueRoots Rewards</h2>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
              View All <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </Button>
          </div>

          {/* Map Widget */}
          <div className="bg-blue-600 rounded-xl overflow-hidden shadow-lg mb-4 relative h-[180px] border border-blue-300">
            <img 
            src='https://readdy.ai/api/search-image?query=stylized%20ocean%20map%20with%20glowing%20teal%20pins%20marking%20locations%2C%20blue%20water%20gradient%2C%20minimalist%20coastline%20design%2C%20environmental%20conservation%20map%2C%20digital%20interface%20style%2C%20clean%20modern%20design&width=375&height=180&seq=map1&orientation=landscape'
              alt="Impact Map" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-2 rounded-lg shadow-md">
              <p className="text-xs font-medium text-blue-800">
                <i className="fas fa-map-marker-alt mr-1 text-blue-500"></i> 3 Impact Locations
              </p>
            </div>
          </div>

          {/* Rewards Carousel */}
          <Tabs defaultValue="certificates" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-blue-100 shadow-sm">
              <TabsTrigger 
                value="certificates" 
                className="data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:shadow-md text-blue-600"
              >
                Certificates
              </TabsTrigger>
              <TabsTrigger 
                value="badges" 
                className="data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:shadow-md text-blue-600"
              >
                Badges
              </TabsTrigger>
            </TabsList>
            <TabsContent value="certificates" className="mt-4">
              <div className="flex overflow-x-auto pb-2 gap-4 hide-scrollbar">
                {rewards.map((reward) => (
                  <div 
                    key={reward.id} 
                    className="min-w-[250px] bg-white rounded-lg p-4 shadow-lg border border-blue-200 flex-shrink-0"
                    style={{
                      backgroundImage: "url('https://readdy.ai/api/search-image?query=subtle%20paper%20texture%20with%20light%20blue%20watermark%20pattern%2C%20certificate%20background%2C%20elegant%20design%2C%20very%20light%20and%20subtle%2C%20professional%20document%20background&width=250&height=150&seq=cert_bg&orientation=landscape')",
                      backgroundSize: "cover"
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-blue-800">{reward.title}</h3>
                      {reward.verified && (
                        <Badge className="bg-green-100 text-green-700">
                          <i className="fas fa-check-circle mr-1"></i> Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-blue-600 mb-3">{reward.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-blue-700 font-medium">{reward.date}</span>
                      <img 
                        src="https://readdy.ai/api/search-image?query=blue%20and%20teal%20ocean%20conservation%20seal%20or%20stamp%2C%20official%20looking%2C%20environmental%20organization%20logo%2C%20minimal%20design%2C%20professional%20emblem&width=40&height=40&seq=seal1&orientation=squarish" 
                        alt="Official Seal" 
                        className="h-8 w-8"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="badges" className="mt-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2 rounded-full p-2 shadow-lg bg-blue-500">
                    <img 
                      src="https://readdy.ai/api/search-image?query=achievement%20badge%20with%20ocean%20wave%20design%2C%20circular%2C%20blue%20and%20teal%20colors%2C%20environmental%20conservation%20symbol%2C%20digital%20badge%20with%20gloss%20effect&width=80&height=80&seq=badge1&orientation=squarish" 
                      alt="Ocean Protector Badge" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center text-blue-800 font-semibold">Ocean Protector</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-2 rounded-full p-2 shadow-lg bg-blue-600">
                    <img 
                      src="https://readdy.ai/api/search-image?query=achievement%20badge%20with%20turtle%20design%2C%20circular%2C%20blue%20and%20green%20colors%2C%20environmental%20conservation%20symbol%2C%20digital%20badge%20with%20gloss%20effect&width=80&height=80&seq=badge2&orientation=squarish" 
                      alt="Turtle Guardian Badge" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center text-blue-800 font-semibold">Turtle Guardian</span>
                </div>
                <div className="flex flex-col items-center opacity-50">
                  <div className="w-16 h-16 mb-2 rounded-full p-2 shadow-md bg-gray-300">
                    <img 
                      src="https://readdy.ai/api/search-image?query=achievement%20badge%20with%20coral%20reef%20design%2C%20circular%2C%20blue%20and%20orange%20colors%2C%20environmental%20conservation%20symbol%2C%20digital%20badge%20with%20gloss%20effect%2C%20greyscale&width=80&height=80&seq=badge3&orientation=squarish" 
                      alt="Reef Ranger Badge" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center text-gray-500 font-medium">Reef Ranger</span>
                  <span className="text-[10px] text-gray-400">Locked</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-white shadow-xl fixed bottom-0 w-full grid grid-cols-5 py-2 px-1 border-t border-blue-200">
        <div className="flex flex-col items-center cursor-pointer hover:bg-white/50 rounded-lg p-1 transition-all">
          <i className="fas fa-home text-[#90A4AE]"></i>
          <span className="text-xs mt-1 text-[#90A4AE]">Home</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-white/50 rounded-lg p-1 transition-all">
          <i className="fas fa-map-marked-alt text-[#90A4AE]"></i>
          <span className="text-xs mt-1 text-[#90A4AE]">Map</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center -mt-5 shadow-lg"
            style={{ background: "linear-gradient(135deg, #1976D2 0%, #2196F3 100%)" }}
          >
            <i className="fas fa-plus text-white text-lg"></i>
          </div>
          <span className="text-xs mt-1 text-[#1976D2] font-medium">Log</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-white/50 rounded-lg p-1 transition-all">
          <i className="fas fa-trophy text-[#1976D2]"></i>
          <span className="text-xs mt-1 text-[#1976D2] font-semibold">Impact</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-white/50 rounded-lg p-1 transition-all">
          <i className="fas fa-user text-[#90A4AE]"></i>
          <span className="text-xs mt-1 text-[#90A4AE]">Profile</span>
        </div>
      </div>
    </div>
  );
}

export default BlueRoots;