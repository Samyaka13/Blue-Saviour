// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Input } from "@/components/ui/input";
// import * as echarts from 'echarts';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// const App: React.FC = () => {
// const [progress, setProgress] = useState(0);
// const [oceanCleanlinessLevel, setOceanCleanlinessLevel] = useState(65);
// const [chatInput, setChatInput] = useState("");
// const [chatMessages, setChatMessages] = useState<{sender: string; message: string; time: string}[]>([
// {
// sender: "bot",
// message: "Hi there! I'm PlanetPal, your ocean cleanup assistant. How can I help you today?",
// time: "10:30 AM"
// }
// ]);
// useEffect(() => {
// const timer = setTimeout(() => setProgress(66), 500);
// return () => clearTimeout(timer);
// }, []);
// useEffect(() => {
// // Initialize Impact Chart
// const impactChartElement = document.getElementById('impact-chart');
// if (impactChartElement) {
// const impactChart = echarts.init(impactChartElement);
// const option = {
// animation: false,
// tooltip: {
// trigger: 'axis',
// axisPointer: {
// type: 'shadow'
// }
// },
// grid: {
// left: '3%',
// right: '4%',
// bottom: '3%',
// containLabel: true
// },
// xAxis: {
// type: 'category',
// data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
// axisLabel: {
// color: '#64748b'
// }
// },
// yAxis: {
// type: 'value',
// axisLabel: {
// color: '#64748b'
// }
// },
// series: [
// {
// name: 'Waste Collected (kg)',
// type: 'bar',
// data: [12, 8, 15, 22, 18, 25],
// itemStyle: {
// color: '#3b82f6'
// }
// }
// ],
// color: ['#3b82f6']
// };
// impactChart.setOption(option);
// // Handle resize
// window.addEventListener('resize', () => {
// impactChart.resize();
// });
// return () => {
// impactChart.dispose();
// window.removeEventListener('resize', () => {
// impactChart.resize();
// });
// };
// }
// }, []);
// useEffect(() => {
// // Initialize Community Impact Chart
// const communityChartElement = document.getElementById('community-chart');
// if (communityChartElement) {
// const communityChart = echarts.init(communityChartElement);
// const option = {
// animation: false,
// tooltip: {
// trigger: 'item'
// },
// legend: {
// top: '5%',
// left: 'center',
// textStyle: {
// color: '#64748b'
// }
// },
// series: [
// {
// name: 'Impact Distribution',
// type: 'pie',
// radius: ['40%', '70%'],
// avoidLabelOverlap: false,
// itemStyle: {
// borderRadius: 10,
// borderColor: '#fff',
// borderWidth: 2
// },
// label: {
// show: false,
// position: 'center'
// },
// emphasis: {
// label: {
// show: true,
// fontSize: 16,
// fontWeight: 'bold'
// }
// },
// labelLine: {
// show: false
// },
// data: [
// { value: 1048, name: 'Plastic' },
// { value: 735, name: 'Glass' },
// { value: 580, name: 'Metal' },
// { value: 484, name: 'Paper' },
// { value: 300, name: 'Other' }
// ]
// }
// ],
// color: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
// };
// communityChart.setOption(option);
// // Handle resize
// window.addEventListener('resize', () => {
// communityChart.resize();
// });
// return () => {
// communityChart.dispose();
// window.removeEventListener('resize', () => {
// communityChart.resize();
// });
// };
// }
// }, []);
// const handleSendMessage = () => {
// if (chatInput.trim() === "") return;
// const newMessage = {
// sender: "user",
// message: chatInput,
// time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
// };
// setChatMessages([...chatMessages, newMessage]);
// setChatInput("");
// // Simulate bot response
// setTimeout(() => {
// const botResponse = {
// sender: "bot",
// message: "I'm here to help with your beach cleanup questions! Would you like to know more about waste classification, upcoming events, or environmental impact?",
// time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
// };
// setChatMessages(prev => [...prev, botResponse]);
// }, 1000);
// };
// const upcomingEvents = [
// {
// id: 1,
// title: "Pacific Beach Cleanup",
// date: "June 25, 2025",
// location: "San Diego, CA",
// volunteers: 48,
// impact: "Est. 250kg waste",
// imageUrl: "https://readdy.ai/api/search-image?query=Beautiful%20beach%20cleanup%20scene%20with%20volunteers%20in%20blue%20t-shirts%20collecting%20trash%20along%20a%20pristine%20sandy%20beach%20with%20clear%20blue%20ocean%20waves%2C%20sunny%20day%20with%20minimal%20clouds%2C%20professional%20photography%20with%20natural%20lighting&width=400&height=250&seq=1001&orientation=landscape"
// },
// {
// id: 2,
// title: "Coral Reef Protection Drive",
// date: "July 2, 2025",
// location: "Miami, FL",
// volunteers: 32,
// impact: "Est. 150kg waste",
// imageUrl: "https://readdy.ai/api/search-image?query=Volunteers%20in%20diving%20gear%20cleaning%20up%20underwater%20debris%20near%20a%20vibrant%20coral%20reef%2C%20crystal%20clear%20turquoise%20water%2C%20tropical%20fish%20swimming%20around%2C%20professional%20underwater%20photography%20with%20natural%20sunlight%20filtering%20through%20water&width=400&height=250&seq=1002&orientation=landscape"
// },
// {
// id: 3,
// title: "Harbor Cleanup Initiative",
// date: "July 10, 2025",
// location: "Seattle, WA",
// volunteers: 56,
// impact: "Est. 350kg waste",
// imageUrl: "https://readdy.ai/api/search-image?query=Harbor%20cleanup%20with%20volunteers%20in%20safety%20vests%20collecting%20trash%20along%20docks%20and%20piers%2C%20boats%20in%20background%2C%20overcast%20day%20with%20dramatic%20clouds%2C%20urban%20waterfront%20setting%2C%20professional%20photography%20with%20natural%20lighting&width=400&height=250&seq=1003&orientation=landscape"
// }
// ];
// const achievements = [
// { id: 1, title: "First Cleanup", description: "Participated in your first beach cleanup", icon: "fa-solid fa-award" },
// { id: 2, title: "Plastic Hunter", description: "Collected over 50kg of plastic waste", icon: "fa-solid fa-recycle" },
// { id: 3, title: "Team Player", description: "Joined 5 community cleanup events", icon: "fa-solid fa-users" },
// { id: 4, title: "Ocean Guardian", description: "Saved an estimated 25 marine animals", icon: "fa-solid fa-fish" }
// ];
// const waveStories = [
// {
// id: 1,
// title: "Amazing Turnout at Pacific Beach",
// description: "Over 100 volunteers joined forces to remove 500kg of waste",
// imageUrl: "https://readdy.ai/api/search-image?query=Large%20group%20of%20diverse%20volunteers%20celebrating%20after%20beach%20cleanup%2C%20holding%20blue%20trash%20bags%2C%20sunset%20over%20ocean%20in%20background%2C%20people%20cheering%20with%20arms%20raised%2C%20professional%20photography%20with%20golden%20hour%20lighting&width=350&height=200&seq=1004&orientation=landscape"
// },
// {
// id: 2,
// title: "Corporate Team Building Success",
// description: "Tech company employees restored 2 miles of coastline",
// imageUrl: "https://readdy.ai/api/search-image?query=Corporate%20team%20in%20matching%20t-shirts%20working%20together%20on%20beach%20cleanup%2C%20professional%20setting%2C%20teamwork%20focused%2C%20company%20logo%20visible%20on%20shirts%2C%20clear%20blue%20sky%2C%20professional%20photography%20with%20natural%20lighting&width=350&height=200&seq=1005&orientation=landscape"
// },
// {
// id: 3,
// title: "Youth Initiative Makes Waves",
// description: "Local high school students lead innovative cleanup approach",
// imageUrl: "https://readdy.ai/api/search-image?query=Teenage%20students%20leading%20beach%20cleanup%20with%20innovative%20tools%20and%20methods%2C%20young%20people%20using%20technology%20to%20track%20waste%20collection%2C%20energetic%20atmosphere%2C%20educational%20setting%2C%20professional%20photography%20with%20natural%20lighting&width=350&height=200&seq=1006&orientation=landscape"
// }
// ];
// const topContributors = [
// { id: 1, name: "Emma Wilson", points: 1250, events: 12, avatar: "EW" },
// { id: 2, name: "James Rodriguez", points: 980, events: 9, avatar: "JR" },
// { id: 3, name: "Sophia Chen", points: 875, events: 8, avatar: "SC" },
// { id: 4, name: "Marcus Johnson", points: 760, events: 7, avatar: "MJ" },
// { id: 5, name: "Olivia Parker", points: 650, events: 6, avatar: "OP" }
// ];
// const rewardItems = [
// {
// id: 1,
// title: "Eco-Friendly Water Bottle",
// points: 500,
// imageUrl: "https://readdy.ai/api/search-image?query=Sleek%20blue%20stainless%20steel%20water%20bottle%20with%20ocean%20wave%20design%2C%20eco-friendly%20reusable%20bottle%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20no%20text%20or%20labels&width=200&height=200&seq=1007&orientation=squarish"
// },
// {
// id: 2,
// title: "Organic Cotton T-Shirt",
// points: 750,
// imageUrl: "https://readdy.ai/api/search-image?query=Blue%20organic%20cotton%20t-shirt%20with%20subtle%20wave%20pattern%20design%2C%20eco-friendly%20fabric%2C%20displayed%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20no%20text%20or%20labels&width=200&height=200&seq=1008&orientation=squarish"
// },
// {
// id: 3,
// title: "Beach Cleanup Kit",
// points: 1000,
// imageUrl: "https://readdy.ai/api/search-image?query=Complete%20beach%20cleanup%20kit%20with%20reusable%20gloves%2C%20biodegradable%20bags%2C%20trash%20picker%20tool%2C%20all%20in%20blue%20color%20scheme%2C%20arranged%20neatly%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%20with%20soft%20lighting&width=200&height=200&seq=1009&orientation=squarish"
// }
// ];
// return (
// <div className="min-h-screen bg-slate-50">
// {/* Header & Navigation */}
// <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
// <div className="container mx-auto px-4 flex items-center justify-between h-16">
// <div className="flex items-center">
// <div className="text-2xl font-bold text-blue-600 flex items-center">
// <i className="fa-solid fa-water mr-2"></i>
// <span>Bluer-the-Better</span>
// </div>
// </div>
// <nav className="hidden md:flex items-center space-x-6">
// <a href="#dashboard" className="text-blue-600 font-medium hover:text-blue-800 cursor-pointer">Dashboard</a>
// <a href="#events" className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">Events</a>
// <a href="#impact" className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">Impact Hub</a>
// <a href="#rewards" className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">Rewards</a>
// </nav>
// <div className="flex items-center space-x-4">
// <button className="relative text-slate-600 hover:text-blue-600 cursor-pointer">
// <i className="fa-solid fa-bell text-xl"></i>
// <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
// </button>
// <div className="flex items-center space-x-2 cursor-pointer">
// <Avatar className="h-8 w-8 border-2 border-blue-500">
// <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20profile%20picture%20of%20a%20person%20with%20a%20friendly%20smile%2C%20blue%20ocean%20background%2C%20high%20quality%20portrait%20photograph%20with%20natural%20lighting%2C%20clean%20professional%20headshot&width=100&height=100&seq=1010&orientation=squarish" />
// <AvatarFallback>JD</AvatarFallback>
// </Avatar>
// <span className="text-sm font-medium text-slate-700 hidden md:inline-block">John Doe</span>
// </div>
// </div>
// </div>
// </header>
// <main className="container mx-auto px-4 py-8">
// {/* Hero Dashboard Section */}
// <section id="dashboard" className="mb-12 relative overflow-hidden rounded-2xl">
// <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 opacity-90"></div>
// <div
// className="absolute inset-0 opacity-20"
// style={{
// backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20clean%20ocean%20waves%20with%20sunlight%20reflecting%20on%20water%20surface%2C%20aerial%20view%20of%20pristine%20blue%20water%20with%20gentle%20waves%2C%20high%20resolution%20nature%20photography%20with%20soft%20natural%20lighting%2C%20no%20people%20or%20objects&width=1400&height=500&seq=1011&orientation=landscape')`,
// backgroundSize: 'cover',
// backgroundPosition: 'center'
// }}
// ></div>
// <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
// <div className="text-white">
// <h1 className="text-4xl md:text-5xl font-bold mb-4">Make Waves of Change</h1>
// <p className="text-xl mb-6">Join our community of ocean guardians and help create a cleaner, bluer planet for all.</p>
// <div className="mb-8">
// <div className="flex items-center mb-2">
// <span className="text-sm font-medium">Ocean Guardian Level 4</span>
// <Badge className="ml-2 bg-blue-400 hover:bg-blue-400">66% to Level 5</Badge>
// </div>
// <Progress value={progress} className="h-2 bg-blue-200" />
// </div>
// <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
// <div className="text-2xl font-bold">14</div>
// <div className="text-sm">Fish Saved</div>
// </div>
// <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
// <div className="text-2xl font-bold">87kg</div>
// <div className="text-sm">Waste Collected</div>
// </div>
// <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
// <div className="text-2xl font-bold">6</div>
// <div className="text-sm">Events Attended</div>
// </div>
// <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
// <div className="text-2xl font-bold">750</div>
// <div className="text-sm">Points Earned</div>
// </div>
// </div>
// <a href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/e908785f-afd1-475e-8075-43e418e28379" data-readdy="true">
// <Button className="bg-white text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// Join Next Cleanup
// </Button>
// </a>
// </div>
// <div className="flex items-center justify-center">
// <div className="relative w-64 h-64">
// <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
// <div className="absolute inset-4 bg-blue-500 rounded-full opacity-30"></div>
// <div className="absolute inset-8 bg-blue-600 rounded-full opacity-40 flex items-center justify-center">
// <div className="text-white text-center">
// <div className="text-5xl font-bold mb-2">{oceanCleanlinessLevel}%</div>
// <div className="text-sm font-medium">Ocean Cleanliness</div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// {/* Upcoming Events Section */}
// <section id="events" className="mb-12">
// <div className="flex justify-between items-center mb-6">
// <h2 className="text-2xl font-bold text-slate-800">Upcoming Events</h2>
// <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// View All Events
// </Button>
// </div>
// <div className="grid md:grid-cols-3 gap-6">
// {upcomingEvents.map(event => (
// <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
// <div className="h-48 overflow-hidden">
// <img
// src={event.imageUrl}
// alt={event.title}
// className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
// />
// </div>
// <CardHeader className="pb-2">
// <CardTitle className="text-xl text-slate-800">{event.title}</CardTitle>
// <CardDescription className="flex items-center text-slate-500">
// <i className="fa-solid fa-calendar-days mr-2"></i> {event.date}
// </CardDescription>
// </CardHeader>
// <CardContent className="pb-2">
// <div className="flex items-center text-slate-600 mb-2">
// <i className="fa-solid fa-location-dot mr-2"></i> {event.location}
// </div>
// <div className="flex justify-between text-sm">
// <div className="flex items-center text-slate-600">
// <i className="fa-solid fa-users mr-2"></i> {event.volunteers} volunteers
// </div>
// <div className="flex items-center text-green-600">
// <i className="fa-solid fa-leaf mr-2"></i> {event.impact}
// </div>
// </div>
// </CardContent>
// <CardFooter>
// <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">
// Register Now
// </Button>
// </CardFooter>
// </Card>
// ))}
// </div>
// </section>
// {/* Impact Visualization Section */}
// <section id="impact" className="mb-12">
// <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Impact</h2>
// <div className="grid md:grid-cols-3 gap-6">
// <Card className="md:col-span-2">
// <CardHeader>
// <CardTitle className="text-xl text-slate-800">Waste Collection Progress</CardTitle>
// <CardDescription>Your contribution over the last 6 months</CardDescription>
// </CardHeader>
// <CardContent>
// <div id="impact-chart" style={{ width: '100%', height: '300px' }}></div>
// </CardContent>
// </Card>
// <Card>
// <CardHeader>
// <CardTitle className="text-xl text-slate-800">Waste Type Distribution</CardTitle>
// <CardDescription>Categories of waste you've collected</CardDescription>
// </CardHeader>
// <CardContent>
// <div id="community-chart" style={{ width: '100%', height: '300px' }}></div>
// </CardContent>
// </Card>
// </div>
// <div className="mt-6">
// <Card>
// <CardHeader>
// <CardTitle className="text-xl text-slate-800">Your Achievements</CardTitle>
// <CardDescription>Badges and milestones you've earned</CardDescription>
// </CardHeader>
// <CardContent>
// <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// {achievements.map(achievement => (
// <div key={achievement.id} className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
// <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
// <i className={`${achievement.icon} text-xl`}></i>
// </div>
// <h3 className="font-medium text-slate-800 mb-1">{achievement.title}</h3>
// <p className="text-sm text-slate-500">{achievement.description}</p>
// </div>
// ))}
// </div>
// </CardContent>
// </Card>
// </div>
// </section>
// {/* Social Engagement & Waves Section */}
// <section className="mb-12">
// <div className="flex justify-between items-center mb-6">
// <h2 className="text-2xl font-bold text-slate-800">Waves of Impact</h2>
// <a href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/79f0a7c8-5f7d-46e9-8b41-ca441d3239be" data-readdy="true">
// <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// Create Your Wave
// </Button>
// </a>
// </div>
// <div className="grid md:grid-cols-3 gap-6 mb-8">
// {waveStories.map(story => (
// <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
// <div className="h-40 overflow-hidden">
// <img
// src={story.imageUrl}
// alt={story.title}
// className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
// />
// </div>
// <CardHeader className="pb-2">
// <CardTitle className="text-lg text-slate-800">{story.title}</CardTitle>
// </CardHeader>
// <CardContent>
// <p className="text-slate-600">{story.description}</p>
// </CardContent>
// <CardFooter className="flex justify-between">
// <div className="flex space-x-2">
// <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-heart mr-2"></i> 24
// </Button>
// <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-comment mr-2"></i> 8
// </Button>
// </div>
// <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-share-nodes mr-2"></i> Share
// </Button>
// </CardFooter>
// </Card>
// ))}
// </div>
// <Card>
// <CardHeader>
// <CardTitle className="text-xl text-slate-800">Community Leaderboard</CardTitle>
// <CardDescription>Top contributors this month</CardDescription>
// </CardHeader>
// <CardContent>
// <div className="overflow-x-auto">
// <table className="w-full">
// <thead>
// <tr className="border-b border-slate-200">
// <th className="text-left py-3 px-4 text-slate-600 font-medium">Rank</th>
// <th className="text-left py-3 px-4 text-slate-600 font-medium">Volunteer</th>
// <th className="text-left py-3 px-4 text-slate-600 font-medium">Points</th>
// <th className="text-left py-3 px-4 text-slate-600 font-medium">Events</th>
// <th className="text-left py-3 px-4 text-slate-600 font-medium">Badge</th>
// </tr>
// </thead>
// <tbody>
// {topContributors.map((contributor, index) => (
// <tr key={contributor.id} className="border-b border-slate-100 hover:bg-slate-50">
// <td className="py-3 px-4 text-slate-800 font-medium">{index + 1}</td>
// <td className="py-3 px-4">
// <div className="flex items-center">
// <Avatar className="h-8 w-8 mr-2">
// <AvatarFallback className="bg-blue-100 text-blue-600">{contributor.avatar}</AvatarFallback>
// </Avatar>
// <span className="text-slate-800">{contributor.name}</span>
// </div>
// </td>
// <td className="py-3 px-4 text-slate-800">{contributor.points}</td>
// <td className="py-3 px-4 text-slate-800">{contributor.events}</td>
// <td className="py-3 px-4">
// {index === 0 && (
// <Badge className="bg-yellow-500 hover:bg-yellow-500">Gold</Badge>
// )}
// {index === 1 && (
// <Badge className="bg-slate-400 hover:bg-slate-400">Silver</Badge>
// )}
// {index === 2 && (
// <Badge className="bg-amber-600 hover:bg-amber-600">Bronze</Badge>
// )}
// {index > 2 && (
// <Badge className="bg-blue-500 hover:bg-blue-500">Top 5</Badge>
// )}
// </td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// </CardContent>
// </Card>
// </section>
// {/* Rewards Section */}
// <section id="rewards" className="mb-12">
// <div className="flex justify-between items-center mb-6">
// <h2 className="text-2xl font-bold text-slate-800">Rewards Marketplace</h2>
// <div className="flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
// <i className="fa-solid fa-coins mr-2"></i>
// <span className="font-medium">750 Points Available</span>
// </div>
// </div>
// <Tabs defaultValue="merchandise" className="mb-6">
// <TabsList className="mb-4">
// <TabsTrigger value="merchandise" className="!rounded-button whitespace-nowrap cursor-pointer">Merchandise</TabsTrigger>
// <TabsTrigger value="donations" className="!rounded-button whitespace-nowrap cursor-pointer">Donations</TabsTrigger>
// <TabsTrigger value="experiences" className="!rounded-button whitespace-nowrap cursor-pointer">Experiences</TabsTrigger>
// </TabsList>
// <TabsContent value="merchandise">
// <div className="grid md:grid-cols-3 gap-6">
// {rewardItems.map(item => (
// <Card key={item.id} className="hover:shadow-md transition-shadow duration-300">
// <div className="p-4 flex justify-center">
// <img
// src={item.imageUrl}
// alt={item.title}
// className="h-48 object-contain"
// />
// </div>
// <CardHeader className="pb-2">
// <CardTitle className="text-lg text-slate-800">{item.title}</CardTitle>
// </CardHeader>
// <CardContent className="pb-2">
// <div className="flex items-center text-blue-600 font-medium">
// <i className="fa-solid fa-coins mr-2"></i> {item.points} points
// </div>
// </CardContent>
// <CardFooter>
// <Button
// className={`w-full ${item.points <= 750 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-300 cursor-not-allowed'} !rounded-button whitespace-nowrap`}
// disabled={item.points > 750}
// >
// {item.points <= 750 ? 'Redeem Now' : 'Not Enough Points'}
// </Button>
// </CardFooter>
// </Card>
// ))}
// </div>
// </TabsContent>
// <TabsContent value="donations">
// <div className="grid md:grid-cols-2 gap-6">
// <Card>
// <CardHeader>
// <CardTitle className="text-xl text-slate-800">Donate to Ocean Cleanup</CardTitle>
// <CardDescription>Support global initiatives to remove plastic from oceans</CardDescription>
// </CardHeader>
// <CardContent>
// <div className="mb-4">
// <div className="flex justify-between mb-2">
// <span className="text-slate-600">Current donations</span>
// <span className="text-blue-600 font-medium">$1,250</span>
// </div>
// <Progress value={62} className="h-2 bg-blue-100" />
// </div>
// <div className="flex space-x-2 mb-4">
// <Button variant="outline" className="flex-1 border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">100 pts ($1)</Button>
// <Button variant="outline" className="flex-1 border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">250 pts ($2.5)</Button>
// <Button variant="outline" className="flex-1 border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">500 pts ($5)</Button>
// </div>
// </CardContent>
// <CardFooter>
// <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">Donate Points</Button>
// </CardFooter>
// </Card>
// <Card>
// <CardHeader>
// <CardTitle className="text-xl text-slate-800">Fund Beach Cleanup Equipment</CardTitle>
// <CardDescription>Help provide tools for volunteer events</CardDescription>
// </CardHeader>
// <CardContent>
// <div className="mb-4">
// <div className="flex justify-between mb-2">
// <span className="text-slate-600">Equipment funded</span>
// <span className="text-blue-600 font-medium">45 sets</span>
// </div>
// <Progress value={45} className="h-2 bg-blue-100" />
// </div>
// <div className="flex space-x-2 mb-4">
// <Button variant="outline" className="flex-1 border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">200 pts (1 set)</Button>
// <Button variant="outline" className="flex-1 border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">500 pts (3 sets)</Button>
// </div>
// </CardContent>
// <CardFooter>
// <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">Fund Equipment</Button>
// </CardFooter>
// </Card>
// </div>
// </TabsContent>
// <TabsContent value="experiences">
// <div className="grid md:grid-cols-3 gap-6">
// <Card>
// <CardHeader>
// <CardTitle className="text-lg text-slate-800">VIP Event Access</CardTitle>
// <CardDescription>1,000 points</CardDescription>
// </CardHeader>
// <CardContent>
// <p className="text-slate-600">Get exclusive access to special cleanup events and meet marine conservation experts.</p>
// </CardContent>
// <CardFooter>
// <Button className="w-full bg-slate-300 cursor-not-allowed !rounded-button whitespace-nowrap">Not Enough Points</Button>
// </CardFooter>
// </Card>
// <Card>
// <CardHeader>
// <CardTitle className="text-lg text-slate-800">Boat Tour Experience</CardTitle>
// <CardDescription>1,500 points</CardDescription>
// </CardHeader>
// <CardContent>
// <p className="text-slate-600">Join a guided boat tour to learn about marine ecosystems and conservation efforts.</p>
// </CardContent>
// <CardFooter>
// <Button className="w-full bg-slate-300 cursor-not-allowed !rounded-button whitespace-nowrap">Not Enough Points</Button>
// </CardFooter>
// </Card>
// <Card>
// <CardHeader>
// <CardTitle className="text-lg text-slate-800">Team Leader Training</CardTitle>
// <CardDescription>750 points</CardDescription>
// </CardHeader>
// <CardContent>
// <p className="text-slate-600">Get certified as a cleanup team leader and lead your own events with our support.</p>
// </CardContent>
// <CardFooter>
// <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer">Redeem Now</Button>
// </CardFooter>
// </Card>
// </div>
// </TabsContent>
// </Tabs>
// </section>
// {/* PlanetPal Bot Section */}
// <section className="mb-12">
// <Card>
// <CardHeader className="bg-blue-50 border-b border-blue-100">
// <div className="flex items-center">
// <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
// <i className="fa-solid fa-robot text-white text-lg"></i>
// </div>
// <div>
// <CardTitle className="text-xl text-slate-800">PlanetPal Bot</CardTitle>
// <CardDescription>Your ocean cleanup assistant</CardDescription>
// </div>
// </div>
// </CardHeader>
// <CardContent className="p-0">
// <div className="flex flex-col md:flex-row h-[500px]">
// <div className="w-full md:w-1/4 border-r border-slate-200 p-4">
// <div className="mb-4">
// <h3 className="font-medium text-slate-700 mb-2">Quick Actions</h3>
// <div className="space-y-2">
// <Button variant="outline" className="w-full justify-start text-left border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-trash-can mr-2 text-blue-600"></i> Waste Classification
// </Button>
// <Button variant="outline" className="w-full justify-start text-left border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-calendar-check mr-2 text-blue-600"></i> Event Details
// </Button>
// <Button variant="outline" className="w-full justify-start text-left border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-shield-halved mr-2 text-blue-600"></i> Safety Guidelines
// </Button>
// <Button variant="outline" className="w-full justify-start text-left border-blue-200 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// <i className="fa-solid fa-graduation-cap mr-2 text-blue-600"></i> Educational Resources
// </Button>
// </div>
// </div>
// <div>
// <h3 className="font-medium text-slate-700 mb-2">Recent Topics</h3>
// <div className="space-y-2">
// <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer p-2 hover:bg-blue-50 rounded-lg">
// How to identify microplastics?
// </div>
// <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer p-2 hover:bg-blue-50 rounded-lg">
// Best practices for beach cleanup
// </div>
// <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer p-2 hover:bg-blue-50 rounded-lg">
// Impact of plastic on marine life
// </div>
// </div>
// </div>
// </div>
// <div className="w-full md:w-3/4 flex flex-col">
// <ScrollArea className="flex-1 p-4">
// {chatMessages.map((msg, index) => (
// <div
// key={index}
// className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
// >
// <div
// className={`max-w-[80%] rounded-lg p-3 ${
// msg.sender === 'user'
// ? 'bg-blue-600 text-white'
// : 'bg-slate-100 text-slate-800'
// }`}
// >
// <div className="mb-1">{msg.message}</div>
// <div
// className={`text-xs ${
// msg.sender === 'user' ? 'text-blue-100' : 'text-slate-500'
// }`}
// >
// {msg.time}
// </div>
// </div>
// </div>
// ))}
// </ScrollArea>
// <div className="p-4 border-t border-slate-200">
// <div className="flex space-x-2">
// <Input
// type="text"
// placeholder="Ask PlanetPal anything..."
// className="border-blue-200 focus:border-blue-400 text-sm"
// value={chatInput}
// onChange={(e) => setChatInput(e.target.value)}
// onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
// />
// <Button
// onClick={handleSendMessage}
// className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
// >
// <i className="fa-solid fa-paper-plane"></i>
// </Button>
// </div>
// </div>
// </div>
// </div>
// </CardContent>
// </Card>
// </section>
// {/* Newsletter Section */}
// <section className="mb-12">
// <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl overflow-hidden">
// <div className="grid md:grid-cols-2 gap-8 p-8">
// <div className="text-white">
// <h2 className="text-2xl font-bold mb-4">Stay Updated on Ocean Conservation</h2>
// <p className="mb-6">Join our newsletter to receive updates on upcoming events, impact stories, and ocean conservation news.</p>
// <div className="flex space-x-2">
// <Input
// type="email"
// placeholder="Your email address"
// className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
// />
// <Button className="bg-white text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
// Subscribe
// </Button>
// </div>
// </div>
// <div className="hidden md:flex items-center justify-center">
// <img
// src="https://readdy.ai/api/search-image?query=Beautiful%20stylized%20illustration%20of%20ocean%20waves%20with%20marine%20life%20silhouettes%2C%20digital%20art%20in%20blue%20color%20palette%2C%20clean%20minimalist%20design%20with%20flowing%20water%20patterns%2C%20professional%20vector-style%20illustration%20with%20smooth%20gradients&width=400&height=300&seq=1012&orientation=landscape"
// alt="Ocean conservation illustration"
// className="max-h-60 object-contain"
// />
// </div>
// </div>
// </div>
// </section>
// </main>
// {/* Footer */}
// <footer className="bg-slate-800 text-white py-12">
// <div className="container mx-auto px-4">
// <div className="grid md:grid-cols-4 gap-8 mb-8">
// <div>
// <div className="text-2xl font-bold text-white mb-4 flex items-center">
// <i className="fa-solid fa-water mr-2"></i>
// <span>Bluer-the-Better</span>
// </div>
// <p className="text-slate-300 mb-4">Making waves of change for cleaner oceans and a better planet.</p>
// <div className="flex space-x-4">
// <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
// <i className="fa-brands fa-facebook-f text-xl"></i>
// </a>
// <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
// <i className="fa-brands fa-twitter text-xl"></i>
// </a>
// <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
// <i className="fa-brands fa-instagram text-xl"></i>
// </a>
// <a href="#" className="text-white hover:text-blue-400 cursor-pointer">
// <i className="fa-brands fa-linkedin-in text-xl"></i>
// </a>
// </div>
// </div>
// <div>
// <h3 className="text-lg font-medium mb-4">Quick Links</h3>
// <ul className="space-y-2">
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">About Us</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Upcoming Events</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Impact Reports</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Partner With Us</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Careers</a></li>
// </ul>
// </div>
// <div>
// <h3 className="text-lg font-medium mb-4">Resources</h3>
// <ul className="space-y-2">
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Ocean Conservation</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Cleanup Guidelines</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Educational Materials</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">Research Papers</a></li>
// <li><a href="#" className="text-slate-300 hover:text-white cursor-pointer">FAQ</a></li>
// </ul>
// </div>
// <div>
// <h3 className="text-lg font-medium mb-4">Contact Us</h3>
// <ul className="space-y-2">
// <li className="flex items-start">
// <i className="fa-solid fa-location-dot mt-1 mr-2"></i>
// <span className="text-slate-300">123 Ocean Avenue, San Francisco, CA 94111</span>
// </li>
// <li className="flex items-center">
// <i className="fa-solid fa-envelope mr-2"></i>
// <a href="mailto:info@bluer-the-better.org" className="text-slate-300 hover:text-white cursor-pointer">info@bluer-the-better.org</a>
// </li>
// <li className="flex items-center">
// <i className="fa-solid fa-phone mr-2"></i>
// <a href="tel:+1-800-BLUE-SEA" className="text-slate-300 hover:text-white cursor-pointer">+1-800-BLUE-SEA</a>
// </li>
// </ul>
// </div>
// </div>
// <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center">
// <div className="text-slate-400 mb-4 md:mb-0">
// © 2025 Bluer-the-Better. All rights reserved.
// </div>
// <div className="flex space-x-4">
// <a href="#" className="text-slate-400 hover:text-white cursor-pointer">Privacy Policy</a>
// <a href="#" className="text-slate-400 hover:text-white cursor-pointer">Terms of Service</a>
// <a href="#" className="text-slate-400 hover:text-white cursor-pointer">Cookie Policy</a>
// </div>
// <div className="flex items-center space-x-3 mt-4 md:mt-0">
// <span className="text-slate-400">Payment Partners:</span>
// <i className="fa-brands fa-cc-visa text-xl text-slate-300"></i>
// <i className="fa-brands fa-cc-mastercard text-xl text-slate-300"></i>
// <i className="fa-brands fa-paypal text-xl text-slate-300"></i>
// </div>
// </div>
// </div>
// </footer>
// {/* PlanetPal Bot Floating Button */}
// <div className="fixed bottom-6 right-6 z-50">
// <Button className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg cursor-pointer">
// <i className="fa-solid fa-robot text-2xl"></i>
// </Button>
// </div>
// </div>
// );
// };
// export default App