// import React, { useState, useRef, useEffect } from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { Badge } from "@/components/ui/badge";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Card } from "@/components/ui/card";
// import { RotateCcw, Save, Home, MapPin, Plus, Trophy, User, Lock, Check } from "lucide-react";

// const Avatar: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("hats");
//   const [progress, setProgress] = useState(80);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
//   const avatarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (isDragging && avatarRef.current) {
//         const deltaX = e.clientX - lastMousePos.x;
//         const deltaY = e.clientY - lastMousePos.y;
        
//         setRotation(prev => ({
//           x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
//           y: prev.y + deltaX * 0.5
//         }));
        
//         setLastMousePos({ x: e.clientX, y: e.clientY });
//       }
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//     };

//     if (isDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging, lastMousePos]);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setLastMousePos({ x: e.clientX, y: e.clientY });
//   };

//   // Avatar items data with professional eco-theme
//   const itemCategories = {
//     hats: [
//       { id: 1, name: "Eco Rope Hat", unlocked: true, equipped: true, rarity: "common" },
//       { id: 2, name: "Bottle Cap Beanie", unlocked: true, equipped: false, rarity: "common" },
//       { id: 3, name: "Solar Visor", unlocked: true, equipped: false, rarity: "uncommon" },
//       { id: 4, name: "Seashell Crown", unlocked: false, required: "Collect 5kg shells", rarity: "rare" },
//       { id: 5, name: "Driftwood Fedora", unlocked: false, required: "Collect 3kg driftwood", rarity: "epic" },
//       { id: 6, name: "Ocean Guardian Cap", unlocked: false, required: "Collect 10kg plastic", rarity: "legendary" },
//     ],
//     tops: [
//       { id: 7, name: "Recycled Ocean Tee", unlocked: true, equipped: true, rarity: "common" },
//       { id: 8, name: "Net Weave Sweater", unlocked: true, equipped: false, rarity: "uncommon" },
//       { id: 9, name: "Eco Denim Jacket", unlocked: false, required: "Collect 20 bottles", rarity: "rare" },
//       { id: 10, name: "Bio Plastic Raincoat", unlocked: false, required: "Collect 15kg plastic", rarity: "epic" },
//     ],
//     pants: [
//       { id: 11, name: "Ocean Wave Shorts", unlocked: true, equipped: true, rarity: "common" },
//       { id: 12, name: "Bottle Fiber Jeans", unlocked: false, required: "Collect 8kg plastic", rarity: "uncommon" },
//     ],
//     shoes: [
//       { id: 13, name: "Tire Sole Sandals", unlocked: true, equipped: true, rarity: "common" },
//       { id: 14, name: "Eco Sneakers", unlocked: false, required: "Collect 12kg plastic", rarity: "rare" },
//     ],
//     accessories: [
//       { id: 15, name: "Bottle Cap Necklace", unlocked: true, equipped: false, rarity: "common" },
//       { id: 16, name: "Net Bracelet", unlocked: true, equipped: true, rarity: "uncommon" },
//       { id: 17, name: "Solar Sunglasses", unlocked: false, required: "Collect 6kg plastic", rarity: "rare" },
//     ],
//   };

//   const getRarityColor = (rarity: string) => {
//     switch (rarity) {
//       case 'common': return 'border-slate-300 bg-slate-50';
//       case 'uncommon': return 'border-green-300 bg-green-50';
//       case 'rare': return 'border-blue-400 bg-blue-50';
//       case 'epic': return 'border-purple-400 bg-purple-50';
//       case 'legendary': return 'border-amber-400 bg-amber-50';
//       default: return 'border-slate-300 bg-slate-50';
//     }
//   };

//   const getRarityTextColor = (rarity: string) => {
//     switch (rarity) {
//       case 'common': return 'text-slate-600';
//       case 'uncommon': return 'text-green-600';
//       case 'rare': return 'text-blue-600';
//       case 'epic': return 'text-purple-600';
//       case 'legendary': return 'text-amber-600';
//       default: return 'text-slate-600';
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 font-sans">
//       {/* Enhanced Header with Blue Theme */}
//       <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 px-4 py-4 border-b border-blue-100">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
//               <User className="w-5 h-5 text-white" />
//             </div>
//             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//               Avatar Studio
//             </h1>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Badge className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-1.5 rounded-full">
//               <Trophy className="w-3 h-3 mr-1" />
//               Level 8
//             </Badge>
//             <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-1.5 rounded-full">
//               <span className="text-sm">⭐</span>
//               <span className="ml-1">2,450</span>
//             </Badge>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 pt-20 pb-32 px-4">
//         {/* Enhanced 3D Avatar Display */}
//         <div className="relative mt-6 mb-8 mx-auto w-full max-w-sm">
//           <div className="relative h-[350px] rounded-2xl bg-gradient-to-br from-white to-blue-50/50 flex items-center justify-center overflow-hidden shadow-xl border border-blue-100">
//             {/* 3D Avatar Container */}
//             <div 
//               ref={avatarRef}
//               className="relative w-[85%] h-[85%] cursor-grab active:cursor-grabbing transition-transform duration-100 ease-out"
//               style={{
//                 transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
//                 transformStyle: 'preserve-3d'
//               }}
//               onMouseDown={handleMouseDown}
//             >
//               {/* Main Avatar */}
//               <div className="relative w-full h-full">
//                 <img
//                 //   src="https://readdy.ai/api/search-image?query=3D%20professional%20avatar%20character%20wearing%20eco-friendly%20recycled%20clothing%2C%20modern%20sustainable%20fashion%2C%20blue%20ocean%20theme%2C%20clean%20minimalist%20design%2C%20high%20quality%203D%20rendering%2C%20friendly%20expression%2C%20professional%20lighting&width=300&height=300&seq=avatar3d&orientation=squarish"
//                 src="https://readdy.ai/api/search-image?query=3D%20Bitmoji%20style%20avatar%20wearing%20rope%20woven%20beach%20hat%2C%20professional%20young%20adult%2C%20modern%20casual%20eco-friendly%20attire%2C%20clean%20design%2C%20vibrant%20colors%2C%20smooth%20stylized%20features%2C%20friendly%20expression%2C%20high%20quality%203D%20rendering%2C%20centered%20composition%2C%20transparent%20background%2C%20polished%20finish&width=300&height=300&seq=avatar4&orientation=squarish"
//                   alt="3D Avatar"
//                   className="w-full h-full object-contain drop-shadow-2xl"
//                   draggable={false}
//                 />
                
//                 {/* Floating Particles Effect */}
//                 <div className="absolute inset-0 pointer-events-none">
//                   {[...Array(6)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
//                       style={{
//                         left: `${20 + i * 15}%`,
//                         top: `${10 + (i % 3) * 30}%`,
//                         animationDelay: `${i * 0.5}s`,
//                         animationDuration: '3s'
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Control Hints */}
//             <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
//               <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full">
//                 🖱️ Drag to rotate
//               </div>
//               <div className="flex space-x-2">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700 hover:bg-blue-50"
//                   onClick={() => setRotation({ x: 0, y: 0 })}
//                 >
//                   <RotateCcw className="w-3 h-3" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Progress Tracker */}
//         <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-slate-800">Next Unlock</h2>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium text-blue-600">80/100 bottles</span>
//             </div>
//           </div>
//           <Progress value={progress} className="h-4 mb-4 bg-blue-100" />
//           <div className="flex items-center">
//             <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-2 border-blue-200">
//               <img
//                 src="https://readdy.ai/api/search-image?query=3D%20eco-friendly%20denim%20jacket%20made%20from%20recycled%20materials%2C%20sustainable%20fashion%2C%20blue%20color%2C%20modern%20design%2C%20high%20quality%20rendering&width=80&height=80&seq=reward&orientation=squarish"
//                 alt="Next reward"
//                 className="w-12 h-12 object-contain"
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="font-semibold text-slate-800">Eco Denim Jacket</h3>
//               <p className="text-sm text-slate-600">Collect 20 more plastic bottles</p>
//               <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">
//                 Rare Item
//               </Badge>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Item Categories */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-blue-100">
//           <Tabs defaultValue="hats" onValueChange={setActiveCategory} className="w-full">
//             <TabsList className="w-full h-16 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100 grid grid-cols-5 p-0">
//               {[
//                 { key: 'hats', icon: '👒', label: 'Hats' },
//                 { key: 'tops', icon: '👕', label: 'Tops' },
//                 { key: 'pants', icon: '👖', label: 'Pants' },
//                 { key: 'shoes', icon: '👟', label: 'Shoes' },
//                 { key: 'accessories', icon: '⌚', label: 'Accessories' }
//               ].map(tab => (
//                 <TabsTrigger 
//                   key={tab.key}
//                   value={tab.key} 
//                   className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none h-full transition-all duration-200"
//                 >
//                   <div className="flex flex-col items-center space-y-1">
//                     <span className="text-lg">{tab.icon}</span>
//                     <span className="text-xs font-medium">{tab.label}</span>
//                   </div>
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {Object.keys(itemCategories).map((category) => (
//               <TabsContent key={category} value={category} className="p-0 m-0">
//                 <ScrollArea className="h-[360px] p-6">
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                     {itemCategories[category as keyof typeof itemCategories].map((item) => (
//                       <Card
//                         key={item.id}
//                         className={`cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 ${
//                           item.unlocked
//                             ? item.equipped
//                               ? "ring-2 ring-blue-500 shadow-lg bg-blue-50"
//                               : `hover:shadow-lg ${getRarityColor(item.rarity)}`
//                             : "opacity-60 grayscale hover:grayscale-0"
//                         }`}
//                       >
//                         <div className="relative p-4">
//                           <div className="w-full h-24 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center mb-3 border border-slate-200">
//                             <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center">
//                               <span className="text-2xl">
//                                 {category === 'hats' && '👒'}
//                                 {category === 'tops' && '👕'}
//                                 {category === 'pants' && '👖'}
//                                 {category === 'shoes' && '👟'}
//                                 {category === 'accessories' && '⌚'}
//                               </span>
//                             </div>
//                           </div>
                          
//                           <h3 className="text-sm font-semibold truncate mb-1">{item.name}</h3>
//                           <div className={`text-xs font-medium capitalize ${getRarityTextColor(item.rarity)}`}>
//                             {item.rarity}
//                           </div>
                          
//                           {item.equipped && (
//                             <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-500 text-white px-2 py-1 rounded-full">
//                               <Check className="w-3 h-3" />
//                             </Badge>
//                           )}
                          
//                           {!item.unlocked && (
//                             <div className="mt-2">
//                               <Badge variant="outline" className="w-full justify-center text-xs py-1 border-slate-300 text-slate-600">
//                                 <Lock className="w-3 h-3 mr-1" />
//                                 {item.required}
//                               </Badge>
//                             </div>
//                           )}
//                         </div>
//                       </Card>
//                     ))}
//                   </div>
//                 </ScrollArea>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
//       </main>

//       {/* Enhanced Action Bar */}
//       <div className="fixed bottom-16 left-4 right-4 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-4 flex justify-between z-40 border border-blue-100">
//         <Button
//           variant="outline"
//           className="border-slate-300 text-slate-600 hover:bg-slate-100 flex-1 mr-3 rounded-xl"
//         >
//           <RotateCcw className="w-4 h-4 mr-2" />
//           Reset
//         </Button>
//         <Button
//           className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex-1 ml-3 rounded-xl shadow-lg"
//         >
//           <Save className="w-4 h-4 mr-2" />
//           Save Look
//         </Button>
//       </div>

//       {/* Enhanced Bottom Navigation */}
//       <div className="fixed bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-blue-100 grid grid-cols-5 z-50">
//         {[
//           { icon: Home, label: 'Home', active: false },
//           { icon: MapPin, label: 'Map', active: false },
//           { icon: Plus, label: 'Clean', active: false, special: true },
//           { icon: Trophy, label: 'Rewards', active: false },
//           { icon: User, label: 'Profile', active: true }
//         ].map((item, index) => (
//           <button
//             key={index}
//             className={`flex flex-col items-center justify-center py-3 transition-all duration-200 relative ${
//               item.active 
//                 ? 'text-blue-600' 
//                 : item.special 
//                   ? 'text-green-600' 
//                   : 'text-slate-400 hover:text-slate-600'
//             }`}
//           >
//             <item.icon className={`${item.special ? 'w-7 h-7' : 'w-5 h-5'} mb-1`} />
//             <span className="text-xs font-medium">{item.label}</span>
//             {item.active && (
//               <div className="absolute bottom-0 w-8 h-1 bg-blue-600 rounded-full"></div>
//             )}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Avatar;

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
const Avatar: React.FC = () => {
const [activeCategory, setActiveCategory] = useState("hats");
const [progress, setProgress] = useState(80);
const [rotation, setRotation] = useState(0);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);

React.useEffect(() => {
  const container = document.getElementById('avatar-container');
  
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const deltaX = e.pageX - startX;
      setRotation(prev => prev + deltaX * 0.5);
      setStartX(e.pageX);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (container) {
    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  return () => {
    if (container) {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };
}, [isDragging, startX]);
// Avatar items data
const itemCategories = {
hats: [
{ id: 1, name: "Rope Woven Hat", unlocked: true, equipped: true, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20beach%20hat%20made%20from%20recycled%20ropes%2C%20vibrant%20colors%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=hat1&orientation=squarish" },
{ id: 2, name: "Bottle Cap Beanie", unlocked: true, equipped: false, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20beanie%20hat%20made%20from%20recycled%20bottle%20caps%2C%20vibrant%20blue%20color%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=hat2&orientation=squarish" },
{ id: 3, name: "Plastic Visor", unlocked: true, equipped: false, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20sun%20visor%20hat%20made%20from%20recycled%20plastic%2C%20vibrant%20green%20color%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=hat3&orientation=squarish" },
{ id: 4, name: "Seashell Crown", unlocked: false, required: "Collect 5kg of shells", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20crown%20made%20from%20seashells%2C%20pastel%20colors%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=hat4&orientation=squarish" },
{ id: 5, name: "Driftwood Fedora", unlocked: false, required: "Collect 3kg of driftwood", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20fedora%20hat%20made%20from%20driftwood%20texture%2C%20brown%20color%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=hat5&orientation=squarish" },
{ id: 6, name: "Recycled Cap", unlocked: false, required: "Collect 10kg of plastic", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20baseball%20cap%20made%20from%20recycled%20plastic%2C%20red%20color%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=hat6&orientation=squarish" },
],
tops: [
{ id: 7, name: "Bottle Fiber Tee", unlocked: true, equipped: true, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20t-shirt%20made%20from%20recycled%20plastic%20bottles%2C%20blue%20color%20with%20wave%20pattern%2C%20minimalist%20design%2C%20smooth%20fabric%20texture%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=top1&orientation=squarish" },
{ id: 8, name: "Net Weave Sweater", unlocked: true, equipped: false, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20sweater%20made%20from%20recycled%20fishing%20nets%2C%20teal%20color%2C%20minimalist%20design%2C%20textured%20fabric%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=top2&orientation=squarish" },
{ id: 9, name: "Recycled Denim Jacket", unlocked: false, required: "Collect 20 more bottles", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20denim%20jacket%20made%20from%20recycled%20materials%2C%20blue%20color%2C%20minimalist%20design%2C%20detailed%20stitching%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=top3&orientation=squarish" },
{ id: 10, name: "Plastic Raincoat", unlocked: false, required: "Collect 15kg of plastic", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20transparent%20raincoat%20made%20from%20recycled%20plastic%2C%20minimalist%20design%2C%20smooth%20surface%20with%20slight%20shine%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=top4&orientation=squarish" },
],
pants: [
{ id: 11, name: "Ocean Shorts", unlocked: true, equipped: true, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20shorts%20made%20from%20recycled%20ocean%20plastic%2C%20blue%20color%20with%20wave%20pattern%2C%20minimalist%20design%2C%20smooth%20fabric%20texture%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=pants1&orientation=squarish" },
{ id: 12, name: "Bottle Fiber Jeans", unlocked: false, required: "Collect 8kg of plastic", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20jeans%20made%20from%20recycled%20plastic%20bottles%2C%20indigo%20color%2C%20minimalist%20design%2C%20detailed%20stitching%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=pants2&orientation=squarish" },
],
shoes: [
{ id: 13, name: "Tire Sole Sandals", unlocked: true, equipped: true, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20sandals%20with%20soles%20made%20from%20recycled%20tires%2C%20black%20and%20brown%20colors%2C%20minimalist%20design%2C%20textured%20surface%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=shoes1&orientation=squarish" },
{ id: 14, name: "Bottle Sneakers", unlocked: false, required: "Collect 12kg of plastic", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20sneakers%20made%20from%20recycled%20plastic%20bottles%2C%20white%20and%20blue%20colors%2C%20minimalist%20design%2C%20smooth%20surface%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=shoes2&orientation=squarish" },
],
accessories: [
{ id: 15, name: "Bottle Cap Necklace", unlocked: true, equipped: false, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20necklace%20made%20from%20colorful%20bottle%20caps%2C%20vibrant%20colors%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=acc1&orientation=squarish" },
{ id: 16, name: "Net Bracelet", unlocked: true, equipped: true, image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20bracelet%20made%20from%20recycled%20fishing%20nets%2C%20teal%20color%2C%20minimalist%20design%2C%20woven%20texture%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=acc2&orientation=squarish" },
{ id: 17, name: "Plastic Sunglasses", unlocked: false, required: "Collect 6kg of plastic", image: "https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20sunglasses%20made%20from%20recycled%20plastic%2C%20blue%20frames%2C%20minimalist%20design%2C%20smooth%20surface%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=150&height=150&seq=acc3&orientation=squarish" },
],
};
const handleRotateAvatar = () => {
setIsRotating(!isRotating);
setTimeout(() => {
setIsRotating(false);
}, 1000);
};
return (
<div className="flex flex-col min-h-screen bg-white text-[#1E3D59] font-sans">
{/* Fixed Header */}
<header className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3 flex justify-between items-center">
<h1 className="text-xl font-bold text-[#0066FF]">Blue-Saviour</h1>
<div className="flex items-center space-x-2">
<Badge className="bg-[#7DCEA0] hover:bg-[#7DCEA0] text-white px-3 py-1">
<i className="fas fa-leaf mr-1"></i>
<span>Level 8</span>
</Badge>
<Badge className="bg-[#FF6B6B] hover:bg-[#FF6B6B] text-white px-3 py-1">
<i className="fas fa-star mr-1"></i>
<span>2,450 pts</span>
</Badge>
</div>
</header>
{/* Main Content with proper padding to avoid header overlap */}
<main className="flex-1 pt-16 pb-20 px-4">
{/* Avatar Display Area */}
<div className="relative mt-4 mb-6 mx-auto w-full max-w-xs h-[300px] rounded-xl bg-[#F8F9FA] flex items-center justify-center overflow-hidden shadow-md">
<div 
  className="relative w-[80%] h-[80%]"
  id="avatar-container"
  style={{
    transform: `rotateY(${rotation}deg)`,
    transition: 'transform 0.1s ease-out'
  }}
>
<img
src="https://readdy.ai/api/search-image?query=3D%20Bitmoji%20style%20avatar%20wearing%20rope%20woven%20beach%20hat%2C%20professional%20young%20adult%2C%20modern%20casual%20eco-friendly%20attire%2C%20clean%20design%2C%20vibrant%20colors%2C%20smooth%20stylized%20features%2C%20friendly%20expression%2C%20high%20quality%203D%20rendering%2C%20centered%20composition%2C%20transparent%20background%2C%20polished%20finish&width=300&height=300&seq=avatar4&orientation=squarish"
alt="User Avatar"
className="w-full h-full object-contain"
/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7DCEA0]/10 pointer-events-none"></div>
</div>
{/* Avatar Control Buttons */}
<div className="absolute bottom-3 right-3 flex space-x-2">
<Button
size="sm"
className="!rounded-button bg-[#0066FF] text-white hover:bg-[#0052CC] shadow-md"
>
<i className="fas fa-mouse-pointer mr-1"></i>
Drag to Rotate
</Button>
<Button
size="sm"
className="!rounded-button bg-white text-[#1E3D59] hover:bg-[#F8F9FA] shadow-md"
>
<i className="fas fa-search-plus mr-1"></i>
Zoom
</Button>
</div>
</div>
{/* Progression Tracker */}
<div className="mb-6 bg-white rounded-xl p-4 shadow-md">
<div className="flex justify-between items-center mb-2">
<h2 className="text-lg font-semibold">Next Unlock</h2>
<span className="text-sm text-[#FF6B6B] font-medium">80/100 bottles</span>
</div>
<Progress value={progress} className="h-3 mb-3" />
<div className="flex items-center">
<div className="w-12 h-12 rounded-md overflow-hidden mr-3 bg-[#F8F9FA] flex items-center justify-center">
<img
src="https://readdy.ai/api/search-image?query=3D%20cartoon%20style%20denim%20jacket%20made%20from%20recycled%20materials%2C%20blue%20color%2C%20minimalist%20design%2C%20detailed%20stitching%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20transparent%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look&width=100&height=100&seq=nextreward&orientation=squarish"
alt="Next reward"
className="w-10 h-10 object-contain"
/>
</div>
<div>
<h3 className="font-medium">Recycled Denim Jacket</h3>
<p className="text-xs text-gray-600">Collect 20 more plastic bottles</p>
</div>
</div>
</div>
{/* Item Categories and Grid */}
<div className="bg-white rounded-xl shadow-md overflow-hidden">
<Tabs defaultValue="hats" onValueChange={setActiveCategory} className="w-full">
<TabsList className="w-full h-14 bg-[#F8F9FA] border-b border-gray-200 grid grid-cols-5">
<TabsTrigger value="hats" className="data-[state=active]:bg-white data-[state=active]:text-[#1E3D59] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#7DCEA0] rounded-none h-full">
<div className="flex flex-col items-center">
<i className="fas fa-hat-cowboy text-lg"></i>
<span className="text-xs mt-1">Hats</span>
</div>
</TabsTrigger>
<TabsTrigger value="tops" className="data-[state=active]:bg-white data-[state=active]:text-[#1E3D59] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#7DCEA0] rounded-none h-full">
<div className="flex flex-col items-center">
<i className="fas fa-tshirt text-lg"></i>
<span className="text-xs mt-1">Tops</span>
</div>
</TabsTrigger>
<TabsTrigger value="pants" className="data-[state=active]:bg-white data-[state=active]:text-[#1E3D59] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#7DCEA0] rounded-none h-full">
<div className="flex flex-col items-center">
<i className="fas fa-socks text-lg"></i>
<span className="text-xs mt-1">Pants</span>
</div>
</TabsTrigger>
<TabsTrigger value="shoes" className="data-[state=active]:bg-white data-[state=active]:text-[#1E3D59] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#7DCEA0] rounded-none h-full">
<div className="flex flex-col items-center">
<i className="fas fa-shoe-prints text-lg"></i>
<span className="text-xs mt-1">Shoes</span>
</div>
</TabsTrigger>
<TabsTrigger value="accessories" className="data-[state=active]:bg-white data-[state=active]:text-[#1E3D59] data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#7DCEA0] rounded-none h-full">
<div className="flex flex-col items-center">
<i className="fas fa-glasses text-lg"></i>
<span className="text-xs mt-1">Acc</span>
</div>
</TabsTrigger>
</TabsList>
{Object.keys(itemCategories).map((category) => (
<TabsContent key={category} value={category} className="p-0 m-0">
<ScrollArea className="h-[320px] p-4">
<div className="grid grid-cols-3 gap-3">
{itemCategories[category as keyof typeof itemCategories].map((item) => (
<Card
key={item.id}
className={`cursor-pointer overflow-hidden transition-all duration-200 ${
item.unlocked
? item.equipped
? "ring-2 ring-[#7DCEA0] shadow-md"
: "hover:shadow-md"
: "opacity-70 grayscale"
}`}
>
<div className="relative p-2">
<div className="w-full h-24 bg-[#F8F9FA] rounded-md flex items-center justify-center mb-2">
<img
src={item.image}
alt={item.name}
className="w-20 h-20 object-contain"
/>
</div>
<h3 className="text-xs font-medium truncate">{item.name}</h3>
{item.equipped && (
<Badge className="absolute top-3 right-3 bg-[#7DCEA0] hover:bg-[#7DCEA0] text-white text-xs px-1.5 py-0.5">
<i className="fas fa-check text-[10px]"></i>
</Badge>
)}
{!item.unlocked && (
<div className="mt-1">
<Badge variant="outline" className="w-full justify-center text-[10px] font-normal py-0.5 border-gray-300 text-gray-600">
<i className="fas fa-lock text-[8px] mr-1"></i>
{item.required}
</Badge>
</div>
)}
</div>
</Card>
))}
</div>
</ScrollArea>
</TabsContent>
))}
</Tabs>
</div>
</main>
{/* Fixed Bottom Action Bar */}
<div className="fixed bottom-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] p-4 flex justify-between z-40">
<Button
variant="outline"
className="!rounded-button border-gray-300 text-gray-600 hover:bg-gray-100 flex-1 mr-2"
>
<i className="fas fa-undo mr-2"></i>
Reset
</Button>
<Button
className="!rounded-button bg-[#FF6B6B] hover:bg-[#FF5252] text-white flex-1 ml-2"
>
<i className="fas fa-save mr-2"></i>
Save Changes
</Button>
</div>
{/* Tab Bar */}
<div className="fixed bottom-0 w-full bg-white border-t border-gray-200 grid grid-cols-5 z-50">
<button className="flex flex-col items-center justify-center py-2">
<i className="fas fa-home text-gray-400 text-lg"></i>
<span className="text-xs mt-1 text-gray-400">Home</span>
</button>
<button className="flex flex-col items-center justify-center py-2">
<i className="fas fa-map-marker-alt text-gray-400 text-lg"></i>
<span className="text-xs mt-1 text-gray-400">Map</span>
</button>
<button className="flex flex-col items-center justify-center py-2">
<i className="fas fa-plus-circle text-[#FF6B6B] text-2xl"></i>
<span className="text-xs mt-1 text-[#FF6B6B]">Clean</span>
</button>
<button className="flex flex-col items-center justify-center py-2">
<i className="fas fa-trophy text-gray-400 text-lg"></i>
<span className="text-xs mt-1 text-gray-400">Rewards</span>
</button>
<button className="flex flex-col items-center justify-center py-2 relative">
<i className="fas fa-user text-[#1E3D59] text-lg"></i>
<span className="text-xs mt-1 text-[#1E3D59]">Profile</span>
<div className="absolute bottom-1 w-10 h-1 bg-[#1E3D59] rounded-full"></div>
</button>
</div>
<style jsx>{`
@keyframes spin-slow {
from { transform: rotateY(0deg); }
to { transform: rotateY(360deg); }
}
.animate-spin-slow {
animation: spin-slow 5s linear infinite;
}
`}</style>
</div>
);
};
export default Avatar