// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import plasticBottle from '@/assets/PlasticBottle.png'; 
import { Dialog, DialogContent } from "@/components/ui/dialog";
const AR: React.FC = () => {
const [selectedWaste, setSelectedWaste] = useState<string | null>(null);
const [showPopover, setShowPopover] = useState(false);
const [showModal, setShowModal] = useState(false);
const handleWasteClick = (wasteType: string) => {
setSelectedWaste(wasteType);
setShowPopover(true);
};
const handleCenterButtonClick = () => {
if (selectedWaste) {
setShowModal(true);
}
};
return (
<div className="relative w-full min-h-screen overflow-hidden bg-white">
{/* Header */}
{/* <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-4 py-3 flex justify-between items-center">
<div className="flex items-center">
<i className="fas fa-water text-blue-500 text-xl mr-2"></i>
<span className="text-blue-500 font-bold text-xl">Blue-Saviour</span>
</div>
<div className="flex items-center">
<div className="relative mr-3">
<i className="fas fa-bell text-gray-600 text-xl"></i>
<Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">3</Badge>
</div>
<Avatar className="h-10 w-10 cursor-pointer">
<AvatarImage src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20person%20smiling%2C%20high%20quality%20portrait%2C%20natural%20lighting%2C%20clean%20background%2C%20friendly%20expression%2C%20professional%20attire%2C%20subject%20fills%2080%20percent%20of%20frame&width=100&height=100&seq=avatar1&orientation=squarish" />
<AvatarFallback>US</AvatarFallback>
</Avatar>
</div>
</div> */}
{/* Main Content */}
<div className="pt-16 pb-20 min-h-screen relative">
{/* Background Image */}
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=clean%20beach%20with%20scattered%20plastic%20waste%20and%20trash%2C%20fewer%20garbage%20items%2C%20visible%20sandy%20beach%2C%20ocean%20in%20upper%20third%20of%20frame%2C%20natural%20sunlight%2C%20environmental%20pollution%2C%20clear%20sky%2C%20some%20plastic%20bottles%20and%20waste%20items%20spread%20across%20sand%2C%20realistic%20photography%20style%2C%20environmental%20awareness&width=375&height=650&seq=beach1&orientation=portrait"
alt="Beach with waste"
className="w-full h-screen object-cover object-center"
/>
</div>
{/* Stats Bar */}

{/* Path and Waste Items */}
<div className="absolute inset-0 z-10 pointer-events-none">
{/* Path */}
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 375 650" fill="none">
<path
d="M187,600 C180,550 150,500 120,470 C90,440 70,400 90,350 C110,300 80,270 50,250 C20,230 0,220 -20,220"
stroke="#2196F3"
strokeWidth="6"
strokeDasharray="12,12"
strokeLinecap="round"
className="drop-shadow-lg"
>
<animate
attributeName="stroke-dashoffset"
from="16"
to="0"
dur="1s"
repeatCount="indefinite"
/>
</path>
<circle cx="187" cy="600" r="6" fill="#2196F3" className="animate-pulse" />
</svg>
</div>
{/* Target Circle Animation */}
<div className="absolute bottom-[420px] left-[180px] z-20">
<div className="w-16 h-16 rounded-full border-4 border-blue-500 animate-ping"></div>
<div className="w-16 h-16 rounded-full border-4 border-blue-500 absolute top-0"></div>
</div>
{/* Pointing Arrow */}
<div className="absolute bottom-[420px] left-[180px] z-20 animate-bounce">
<i className="fas fa-arrow-down text-blue-500 text-4xl drop-shadow-lg"></i>
</div>
{/* Curved Arrow */}
<svg className="absolute bottom-[300px] left-[300px] z-10 w-[100px] h-[100px]" viewBox="0 0 100 100">

<defs>
<marker
id="arrowhead"
markerWidth="10"
markerHeight="7"
refX="9"
refY="3.5"
orient="auto"
>
<polygon points="0 0, 10 3.5, 0 7" fill="#2196F3" />
</marker>
</defs>
</svg>
{/* Single Plastic Bottle Item */}
<div className="absolute bottom-[350px] left-[120px] z-20">
<div className="bg-white rounded-xl shadow-lg p-4 w-[250px]">
<div className="flex items-center justify-center mb-3">
<i className="fas fa-wine-bottle text-blue-500 text-2xl mr-2"></i>
<span className="font-medium text-gray-800 text-lg">Plastic Bottle</span>
</div>
<div className="h-[200px] flex items-center justify-center bg-blue-50 rounded-lg mb-4">
<img
// src="https://readdy.ai/api/search-image?query=hyperrealistic%203D%20render%20of%20a%20transparent%20plastic%20water%20bottle%2C%20octane%20render%2C%20highly%20detailed%20textures%2C%20volumetric%20lighting%2C%20crystal%20clear%20plastic%20material%2C%20photorealistic%20quality%2C%20product%20visualization%2C%20environmental%20concept%2C%20studio%20lighting%20setup%2C%20clean%20background%2C%20professional%203D%20modeling&width=200&height=200&seq=bottle1&orientation=squarish"
// src='D:\Projects\Blue-Saviour\Blue-Saviour\src\assets\PlasticBottle.png'
src={plasticBottle}
alt="3D Plastic Bottle"
className="h-[180px] object-contain"
/>
</div>
<Button
onClick={() => handleWasteClick('Plastic Bottle')}
className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 !rounded-button"
>
<i className="fas fa-hand-pointer mr-2"></i>
Collect Plastic Bottle
</Button>
</div>
</div>
{/* Success Message After Collection */}
{showPopover && selectedWaste && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
<div className="bg-white rounded-xl p-6 w-[300px] text-center">
<div className="text-5xl text-green-500 mb-4">
<i className="fas fa-check-circle"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-2">Great Job!</h3>
<p className="text-gray-600 mb-4">You've collected the Plastic Bottle from the beach</p>
<Button
onClick={() => setShowPopover(false)}
className="w-full bg-blue-500 hover:bg-blue-600 text-white !rounded-button"
>
Continue
</Button>
</div>
</div>
)}
{/* Location Marker */}

{/* Center Action Button */}
<div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 z-30">
<Button
onClick={handleCenterButtonClick}
className="h-16 w-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg flex items-center justify-center !rounded-button"
>
<i className="fas fa-hand-pointer text-white text-2xl"></i>
</Button>
</div>

</div>
{/* 3D Model Modal */}
<Dialog open={showModal} onOpenChange={setShowModal}>
<DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-xl">
<div className="p-6 bg-white">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold text-gray-800">{selectedWaste}</h2>
<Button
variant="ghost"
className="h-8 w-8 p-0 rounded-full !rounded-button"
onClick={() => setShowModal(false)}
>
<i className="fas fa-times text-gray-500"></i>
</Button>
</div>
<div className="h-[300px] flex items-center justify-center bg-blue-50 rounded-lg mb-4">
<img
src={`https://readdy.ai/api/search-image?query=hyperrealistic%203D%20render%20of%20a%20transparent%20plastic%20water%20bottle%2C%20octane%20render%2C%20highly%20detailed%20textures%2C%20volumetric%20lighting%2C%20crystal%20clear%20plastic%20material%2C%20photorealistic%20quality%2C%20product%20visualization%2C%20environmental%20concept%2C%20studio%20lighting%20setup%2C%20clean%20background%2C%20professional%203D%20modeling&width=300&height=300&seq=waste${selectedWaste?.replace(/\s+/g, '')}1&orientation=squarish`}
alt={selectedWaste || "Waste item"}
className="h-[250px] object-contain"
/>
</div>
<div className="text-center">
<div className="mb-4">
<span className="text-green-500 font-medium">
<i className="fas fa-check-circle mr-2"></i>
Collected {selectedWaste}
</span>
</div>
<div className="bg-gray-100 p-3 rounded-lg mb-4">
<div className="flex justify-between mb-2">
<span className="text-gray-600">Points earned:</span>
<span className="text-green-600 font-medium">+15</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Progress to Level 4:</span>
<span className="text-blue-600 font-medium">68%</span>
</div>
<Progress value={68} className="mt-2 h-2" />
</div>
<Button
className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 !rounded-button"
onClick={() => setShowModal(false)}
>
Continue Cleanup
</Button>
</div>
</div>
</DialogContent>
</Dialog>
</div>
);
};
export default AR