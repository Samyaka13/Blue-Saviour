// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
const AR: React.FC = () => {
const [points, setPoints] = useState(250);
const [isCollecting, setIsCollecting] = useState(false);
const [collectedItems, setCollectedItems] = useState(0);
const [showTutorial, setShowTutorial] = useState(false);
const [nearestItem, setNearestItem] = useState<string>('');
// Add custom keyframe for slow spin animation
const style = document.createElement('style');
style.textContent = `
@keyframes spin-slow {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
.animate-spin-slow {
animation: spin-slow 3s linear infinite;
}
@keyframes dash {
to {
stroke-dashoffset: 32;
}
}
.animate-dash {
animation: dash 1.5s linear infinite;
}
`;
document.head.appendChild(style);
// Simulated AR trash items with positions
const trashItems = [
{ id: 1, type: 'bottle', x: 35, y: 50, collected: false, label: 'Plastic Bottle' },
{ id: 2, type: 'can', x: 65, y: 65, collected: false, label: 'Metal Can' },
{ id: 3, type: 'bag', x: 20, y: 70, collected: false, label: 'Plastic Bag' },
{ id: 4, type: 'cup', x: 80, y: 40, collected: false, label: 'Paper Cup' },
];
const handleCollect = () => {
setIsCollecting(true);
setTimeout(() => {
setIsCollecting(false);
setCollectedItems(prev => prev + 1);
setPoints(prev => prev + 25);
}, 1500);
};
const toggleTutorial = () => {
setShowTutorial(!showTutorial);
};
return (
<div className="relative h-[762px] w-[375px] overflow-hidden bg-gray-100">
{/* Real Beach Camera View Background */}
<div className="absolute inset-0 w-full h-full">
<img
src="https://readdy.ai/api/search-image?query=Empty%20sandy%20beach%20landscape%20with%20scattered%20plastic%20bottles%2C%20bags%2C%20and%20other%20litter%20clearly%20visible%2C%20natural%20beach%20environment%2C%20realistic%20photo%2C%20environmental%20pollution%20documentation%2C%20no%20people%2C%20clear%20view%20of%20beach%20sand%20and%20ocean%2C%20high%20resolution&width=375&height=762&seq=beach-real-2&orientation=portrait"
alt="Beach View"
className="w-full h-full object-cover"
/>
</div>
{/* Direction Indicators and Trail Path */}
<div className="absolute inset-0 pointer-events-none">
{/* Trail Path */}
<div className="absolute inset-0">
<svg className="w-full h-full">
<path
d="M187,680 Q187,550 250,450 T280,350"
stroke="rgba(255,0,0,0.6)"
strokeWidth="4"
fill="none"
strokeDasharray="8,8"
className="animate-dash"
/>
{/* Trail Dots */}
<circle cx="187" cy="680" r="6" fill="rgba(255,0,0,0.8)" />
<circle cx="250" cy="450" r="6" fill="rgba(255,0,0,0.8)" />
<circle cx="280" cy="350" r="6" fill="rgba(255,0,0,0.8)" />
{/* Litter Indicators */}
<g className="litter-indicators">
{/* Plastic Bottle */}
<foreignObject x="230" y="420" width="160" height="80">
<div className="relative">
<div className="absolute w-2 h-2 bg-red-500 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
<div className="backdrop-blur-lg bg-black/50 rounded-lg px-3 py-2 border border-white/40 shadow-lg ml-1">
<div className="flex items-center">
<i className="fas fa-bottle-water text-red-400 mr-2"></i>
<span className="text-white text-sm font-medium">Plastic Bottle</span>
</div>
</div>
</div>
</foreignObject>
{/* Can */}
<foreignObject x="260" y="320" width="160" height="80">
<div className="relative">
<div className="absolute w-2 h-2 bg-red-500 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
<div className="backdrop-blur-lg bg-black/50 rounded-lg px-3 py-2 border border-white/40 shadow-lg ml-1">
<div className="flex items-center">
<i className="fas fa-can-food text-red-400 mr-2"></i>
<span className="text-white text-sm font-medium">Metal Can</span>
</div>
</div>
</div>
</foreignObject>
{/* Plastic Bag */}
<foreignObject x="170" y="500" width="160" height="80">
<div className="relative">
<div className="absolute w-2 h-2 bg-red-500 left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
<div className="backdrop-blur-lg bg-black/50 rounded-lg px-3 py-2 border border-white/40 shadow-lg ml-1">
<div className="flex items-center">
<i className="fas fa-shopping-bag text-red-400 mr-2"></i>
<span className="text-white text-xs">Plastic Bag</span>
</div>
</div>
</div>
</foreignObject>
</g>
</svg>
</div>
</div>
<div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
<div className="backdrop-blur-lg bg-black/50 rounded-full px-4 py-2 border border-white/40 shadow-lg">
<div className="flex items-center space-x-2">
<i className="fas fa-location-dot text-red-400"></i>
</div>
</div>
</div>
{/* Top HUD Elements */}
<div className="absolute top-10 left-0 right-0 px-4 flex justify-between items-center">
{/* Points Counter */}
<div className="backdrop-blur-lg bg-black/50 rounded-full px-4 py-2 flex items-center border border-white/40 shadow-lg">
<i className="fas fa-leaf text-green-400 mr-2"></i>
<span className="text-white font-semibold">{points} Points</span>
</div>
{/* Settings Button */}
<Button
variant="outline"
size="icon"
className="!rounded-button h-10 w-10 backdrop-blur-lg bg-white/30 border border-white/40 shadow-sm cursor-pointer"
onClick={toggleTutorial}
>
<i className="fas fa-cog text-white"></i>
</Button>
</div>
{/* Bottom HUD Elements */}
<div className="absolute bottom-8 left-0 right-0 px-6">
<div className="flex justify-between items-center">
{/* Waste Types Button */}
<div className="flex flex-col items-center">
<Button
variant="outline"
size="icon"
className="!rounded-button h-12 w-12 backdrop-blur-lg bg-white/30 border border-white/40 shadow-sm cursor-pointer mb-1"
>
<i className="fas fa-recycle text-white"></i>
</Button>
<span className="text-white text-xs backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded-full">Waste Types</span>
</div>
{/* Main Collect Button */}
<Button
variant="default"
size="lg"
className={`!rounded-button h-18 w-18 rounded-full backdrop-blur-lg ${isCollecting ? 'bg-blue-500/90' : 'bg-gradient-to-r from-blue-500 to-blue-400'} border-2 border-white/50 shadow-lg cursor-pointer transition-all duration-300 ${isCollecting ? 'scale-95' : 'scale-100'}`}
onClick={handleCollect}
disabled={isCollecting}
>
<div className="h-16 w-16 flex items-center justify-center">
<i className={`fas ${isCollecting ? 'fa-spinner fa-spin' : 'fa-hand-pointer'} text-white text-2xl`}></i>
</div>
</Button>
{/* Inventory Button */}
<div className="flex flex-col items-center">
<Button
variant="outline"
size="icon"
className="!rounded-button h-12 w-12 backdrop-blur-lg bg-white/30 border border-white/40 shadow-sm cursor-pointer mb-1 relative"
>
<i className="fas fa-shopping-bag text-white"></i>
{collectedItems > 0 && (
<Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-green-500">
{collectedItems}
</Badge>
)}
</Button>
<span className="text-white text-xs backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded-full">My Bag</span>
</div>
</div>
</div>
{/* Direction Compass (shows when collecting) */}
{isCollecting && (
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-40 h-40 rounded-full backdrop-blur-sm bg-white/10 border border-white/40 flex items-center justify-center">
<div className="relative w-32 h-32">
<div className="absolute inset-0 flex items-center justify-center">
<i className="fas fa-compass text-white text-4xl animate-pulse"></i>
</div>
<div className="absolute inset-0 animate-spin-slow">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<i className="fas fa-arrow-up text-blue-400 text-xl"></i>
</div>
</div>
</div>
</div>
</div>
)}
{/* Tutorial Overlay */}
{showTutorial && (
<div className="absolute inset-0 bg-black/70 z-50 flex items-center justify-center">
<Card className="w-[320px] backdrop-blur-lg bg-white/20 border border-white/40 p-6 text-white">
<h2 className="text-xl font-bold mb-4 text-center">How to Play</h2>
<div className="space-y-4 mb-6">
<div className="flex items-start">
<div className="mr-3 mt-1">
<i className="fas fa-search text-blue-400"></i>
</div>
<p className="text-sm">Look around to find virtual trash items on the beach</p>
</div>
<div className="flex items-start">
<div className="mr-3 mt-1">
<i className="fas fa-hand-pointer text-blue-400"></i>
</div>
<p className="text-sm">Tap the collect button when near trash to pick it up</p>
</div>
<div className="flex items-start">
<div className="mr-3 mt-1">
<i className="fas fa-leaf text-green-400"></i>
</div>
<p className="text-sm">Earn points for each item collected and help clean the beach</p>
</div>
<div className="flex items-start">
<div className="mr-3 mt-1">
<i className="fas fa-trophy text-yellow-400"></i>
</div>
<p className="text-sm">Complete challenges to earn special rewards</p>
</div>
</div>
<div className="flex justify-center">
<Button
className="!rounded-button bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 cursor-pointer"
onClick={toggleTutorial}
>
Got it!
</Button>
</div>
</Card>
</div>
)}
{/* Level Progress (Top Center) */}
<div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
<div className="backdrop-blur-lg bg-white/30 rounded-full px-3 py-1 border border-white/40 shadow-sm mb-1">
<span className="text-white text-xs font-medium">Level 3</span>
</div>
<Progress value={45} className="w-24 h-1.5 bg-white/30" />
</div>
{/* Direction Feedback Animation */}
{isCollecting && (
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<div className="flex flex-col items-center">
<i className="fas fa-location-crosshairs text-blue-400 text-4xl mb-2 animate-pulse"></i>
<span className="text-white font-bold text-lg backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
Finding nearest litter...
</span>
</div>
</div>
)}
{/* Environmental Impact Stats (Top-Right Corner) */}
<div className="absolute top-24 right-4">
<div className="backdrop-blur-lg bg-white/30 rounded-lg px-3 py-2 border border-white/40 shadow-sm">
<div className="flex items-center mb-1">
<i className="fas fa-water text-blue-400 mr-2 text-xs"></i>
<span className="text-white text-xs">Ocean Impact: Good</span>
</div>
<div className="flex items-center">
<i className="fas fa-globe-americas text-green-400 mr-2 text-xs"></i>
<span className="text-white text-xs">2.5 kg saved</span>
</div>
</div>
</div>
</div>
);
};

export default AR