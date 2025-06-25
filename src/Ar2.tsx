

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scan, Bot, Zap, Network } from "lucide-react"
import plasticBottle from '@/assets/PlasticBottle.png'; 
export default function ARCleanupInterface() {
    const [totalPoints, setTotalPoints] = useState(250)
    const [isScanning, setIsScanning] = useState(false)
    const [showIdentification, setShowIdentification] = useState(true)

    const handleScanAndLog = () => {
        setIsScanning(true)
        setTimeout(() => {
            setTotalPoints((prev) => prev + 10)
            setIsScanning(false)
            setShowIdentification(false)
            setTimeout(() => setShowIdentification(true), 2000)
        }, 1500)
    }

    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-sky-800 via-blue-100 to-amber-50 overflow-hidden">
            {/* Beach Background Simulation */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-50"
                style={{
                    backgroundImage: plasticBottle
                }}
            />

            {/* Beach Scene Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-100/20 via-transparent to-sky-200/30" />

            {/* AR Target Highlighting - Plastic Bottle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    {/* Glowing Bounding Box */}
                    <div className="w-24 h-32 border-2 border-teal-400 rounded-lg animate-pulse shadow-lg shadow-teal-400/50">
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-teal-400 rounded-tl-lg" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-teal-400 rounded-tr-lg" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-teal-400 rounded-bl-lg" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-teal-400 rounded-br-lg" />
                    </div>

                    {/* Identification Pop-up */}
                    {showIdentification && (
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-teal-200 animate-in fade-in-0 slide-in-from-bottom-2">
                            <div className="text-xs font-semibold text-slate-800">Plastic Bottle - PET</div>
                            <div className="text-xs text-teal-600 font-medium flex items-center gap-1">
                                <Zap className="w-3 h-3" />
                                +10 Points
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95" />
                        </div>
                    )}
                </div>
            </div>

            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top HUD Bar */}
                <div className="flex justify-between items-start p-4 pt-12">
                    {/* Points Counter - Top Left */}
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                        <div className="text-white text-sm font-medium">Total</div>
                        <div className="text-teal-400 text-lg font-bold">{totalPoints} Points</div>
                    </div>

                    {/* Hive Mind Status - Top Right */}
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-3 border border-slate-700">
                        <Network className="w-6 h-6 text-teal-400" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Bottom HUD Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                        {/* PlanetPal Bot - Bottom Left */}
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 p-0 pointer-events-auto shadow-lg"
                        >
                            <Bot className="w-6 h-6" />
                        </Button>

                        {/* Scan & Log Button - Bottom Center */}
                        <Button
                            size="lg"
                            onClick={handleScanAndLog}
                            disabled={isScanning}
                            className="bg-teal-500 hover:bg-teal-600 text-white rounded-full w-20 h-20 p-0 pointer-events-auto shadow-xl border-4 border-white/20 relative overflow-hidden"
                        >
                            {isScanning ? (
                                <div className="animate-spin">
                                    <Scan className="w-8 h-8" />
                                </div>
                            ) : (
                                <Scan className="w-8 h-8" />
                            )}
                            {isScanning && <div className="absolute inset-0 bg-teal-400/30 animate-pulse" />}
                        </Button>

                        {/* Spacer for symmetry */}
                        <div className="w-14" />
                    </div>

                    {/* Scan Button Label */}
                    <div className="text-center mt-2">
                        <Badge variant="secondary" className="bg-white/90 text-slate-700 text-xs">
                            {isScanning ? "Scanning..." : "Scan & Log"}
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Scanning Effect Overlay */}
            {isScanning && (
                <div className="absolute inset-0 bg-teal-500/10 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-pulse" />
                </div>
            )}

            {/* Corner UI Elements */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <Badge className="bg-green-500/90 text-white text-xs">AR Active</Badge>
                <Badge className="bg-blue-500/90 text-white text-xs">Beach Cleanup Mode</Badge>
            </div>

            {/* Mission Status Bar */}
            <div className="absolute top-20 left-4 right-4 pointer-events-none">
                <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
                    <div className="text-white text-xs font-medium mb-1">Mission Progress</div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-teal-400 to-blue-400 h-2 rounded-full w-3/5" />
                        </div>
                        <span className="text-teal-400 text-xs font-bold">12/20 Items</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



