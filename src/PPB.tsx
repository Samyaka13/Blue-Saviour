import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, Trash2, Calendar, Shield, GraduationCap, MessageCircle, Clock, Waves } from 'lucide-react';

const ProfessionalPlanetPalBot = () => {
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([
        {
            sender: 'bot',
            message: 'Hello! I\'m PlanetPal, your  ocean cleanup assistant. How can I help you make a positive environmental impact today?',
            time: '10:30 AM'
        }
    ]);

    const handleSendMessage = () => {
        if (chatInput.trim()) {
            const newUserMessage = {
                sender: 'user',
                message: chatInput,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setChatMessages(prev => [...prev, newUserMessage]);

            // Simulate bot response
            setTimeout(() => {
                const botResponses = [
                    "Thank you for your question about ocean cleanup. Based on current research and best practices, I recommend...",
                    "That's an excellent point about marine conservation. Let me provide you with some  guidance...",
                    "I understand your concern about plastic pollution. Here are some evidence-based solutions...",
                    "Great question! As your ocean cleanup assistant, I can share some expert insights on this topic..."
                ];

                const botMessage = {
                    sender: 'bot',
                    message: botResponses[Math.floor(Math.random() * botResponses.length)],
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };

                setChatMessages(prev => [...prev, botMessage]);
            }, 1000);

            setChatInput('');
        }
    };

    const quickActions = [
        { icon: Trash2, label: 'Waste Classification', description: 'Identify and categorize marine debris' },
        { icon: Calendar, label: 'Event Planning', description: 'Organize cleanup initiatives' },
        { icon: Shield, label: 'Safety Protocols', description: 'Essential safety guidelines' },
        { icon: GraduationCap, label: 'Research Hub', description: 'Scientific resources and data' }
    ];

    const recentTopics = [
        { title: 'Microplastic Identification Protocols', category: 'Research' },
        { title: 'Beach Cleanup Best Practices', category: 'Operations' },
        { title: 'Marine Ecosystem Impact Analysis', category: 'Science' },
        { title: 'Volunteer Coordination Strategies', category: 'Management' }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 to-blue-50/30">
                <CardHeader className="bg-gradient-to-r p-5 from-blue-600 to-blue-700 text-white border-0 rounded-t-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <Bot className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-bold">PlanetPal Assistant</CardTitle>
                                <CardDescription className="text-blue-100 text-base">
                                    Professional Ocean Cleanup & Marine Conservation
                                </CardDescription>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-100">
                            <Waves className="w-5 h-5" />
                            <span className="font-bold text-2xl">Blue-Saviour</span>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row min-h-[500px]">
                        {/* Sidebar */}
                        <div className="w-full lg:w-80 bg-slate-50/50 border-r border-slate-200/60 p-6">
                            {/* Quick Actions */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                                    <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
                                    Quick Actions
                                </h3>
                                <div className="space-y-3">
                                    {quickActions.map((action, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="w-full justify-start text-left h-auto p-4 border-slate-200 hover:border-blue-300 hover:bg-blue-50/80 transition-all duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <action.icon className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-medium text-slate-800 text-sm">{action.label}</div>
                                                    <div className="text-xs text-slate-500 mt-1">{action.description}</div>
                                                </div>
                                            </div>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Topics */}

                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col bg-white">
                            {/* Messages */}
                            <ScrollArea className="flex-1 p-6">
                                <div className="space-y-6">
                                    {chatMessages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`flex items-end space-x-3 max-w-[75%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                                {msg.sender === 'bot' && (
                                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Bot className="w-5 h-5 text-white" />
                                                    </div>
                                                )}

                                                <div className={`rounded-2xl px-4 py-3 ${msg.sender === 'user'
                                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-md'
                                                        : 'bg-slate-100 text-slate-800 rounded-bl-md'
                                                    }`}>
                                                    <div className="mb-2 leading-relaxed">{msg.message}</div>
                                                    <div className={`text-xs ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-500'
                                                        }`}>
                                                        {msg.time}
                                                    </div>
                                                </div>

                                                {msg.sender === 'user' && (
                                                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white text-sm font-medium">U</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>

                            {/* Input Area */}
                            <div className="p-6 border-t border-slate-200/60 bg-slate-50/50">
                                <div className="flex space-x-3">
                                    <Input
                                        type="text"
                                        placeholder="Ask PlanetPal about ocean cleanup, marine conservation, or environmental research..."
                                        className="flex-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-sm bg-white shadow-sm"
                                        value={chatInput}
                                        onChange={(e) => setChatInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 px-6"
                                        disabled={!chatInput.trim()}
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="mt-3 text-xs text-slate-500 text-center">
                                    Powered by advanced environmental AI recheck this line sdasdfadsfadsfasd • Committed to ocean conservation
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfessionalPlanetPalBot;