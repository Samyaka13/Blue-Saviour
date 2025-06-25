import { useState } from 'react'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';

function HeroCleanist() {
    const [progress] = useState(90);
    const [oceanCleanlinessLevel] = useState(95);
    return (
        <div className="min-h-screen bg-slate-50">

            <main className="container mx-auto px-4 py-8">
                <section id="dashboard" className="mb-12 relative overflow-hidden rounded-2xl">

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300   to-blue-200 opacity-100"></div>
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20clean%20ocean%20waves%20with%20sunlight%20reflecting%20on%20water%20surface%2C%20aerial%20view%20of%20pristine%20blue%20water%20with%20gentle%20waves%2C%20high%20resolution%20nature%20photography%20with%20soft%20natural%20lighting%2C%20no%20people%20or%20objects&width=1400&height=500&seq=1011&orientation=landscape')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                    <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make Waves of Change</h1>
                            <p className="text-xl mb-6">Join our community of ocean guardians and help create a cleaner, bluer planet for all.</p>
                            <div className="mb-8">
                                <div className="flex items-center mb-2">
                                    <span className="text-sm font-medium">Ocean Guardian Level 4</span>
                                    <Badge className="ml-2 bg-blue-800 hover:bg-blue-400">10% to Level 6</Badge>
                                </div>
                                <Progress value={progress} className="h-2 bg-blue-200" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold">14</div>
                                    <div className="text-sm">Fish Saved</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold">87kg</div>
                                    <div className="text-sm">Waste Collected</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold">6</div>
                                    <div className="text-sm">Events Attended</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold">750</div>
                                    <div className="text-sm">Points Earned</div>
                                </div>
                            </div>
                            <a href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/e908785f-afd1-475e-8075-43e418e28379" data-readdy="true">
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                                    Join Next Cleanup
                                </Button>
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                                <div className="absolute inset-4 bg-blue-700 rounded-full opacity-40"></div>
                                <div className="absolute inset-8 bg-blue-500 rounded-full opacity-100 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="text-5xl font-bold mb-2">{oceanCleanlinessLevel}%</div>
                                        <div className="text-sm font-medium">Ocean Cleanliness</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HeroCleanist
