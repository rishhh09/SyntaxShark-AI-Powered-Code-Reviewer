import Typewriter from 'typewriter-effect'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate();

    const handleReviewButton = () => {
        console.log("Review button clicked.")
        navigate('/MainUI')
    }

    return (
        <div id="home" className="min-h-screen w-full relative bg-slate-950 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-0 overflow-hidden font-sans">

            {/* 1. Background Effects (Using v4 Standard Classes) */}
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Top Right Glow Blob - v4 Standard: size-96 + scale-150 instead of w-[500px] */}
            <div className="absolute -top-24 -right-24 size-96 scale-150 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Bottom Left Glow Blob */}
            <div className="absolute -bottom-24 -left-24 size-96 scale-150 bg-blue-600/10 rounded-full blur-3xl"></div>

            {/* 2. Left Side: Text */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6">
                    Review your <br />
                    {/* v4 Gradient Syntax: bg-linear-to-r */}
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block ml-2">
                        <Typewriter
                            options={{
                                strings: ['JavaScript', 'Python', 'Java', 'C++'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    <br />
                    code in seconds.
                </h1>
                <p className="text-slate-400 text-base md:text-lg mb-8 max-w-lg">
                    AI-powered analysis to catch bugs, improve performance, and secure your software instantly.
                </p>

                {/* Button */}
                <button onClick={handleReviewButton} className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-lg shadow-cyan-500/50 hover:scale-105 transition-all cursor-pointer">
                    Start Free Review 🚀
                </button>
            </div>

            {/* 3. Right Side: The "Floating Code" Card */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-12 md:mt-0">

                {/* Card Width: standard 'w-full' constrained by 'max-w-sm' (24rem/384px) or 'max-w-md' */}
                <div className="relative w-full max-w-sm md:max-w-md aspect-4/3 bg-[#0a192f]/80 backdrop-blur-xl border border-slate-700 rounded-xl p-4 md:p-6 shadow-2xl transform md:-rotate-3 hover:rotate-0 transition-all duration-500">

                    {/* Window Controls */}
                    <div className="flex gap-2 mb-4">
                        <div className="size-3 rounded-full bg-red-500"></div>
                        <div className="size-3 rounded-full bg-yellow-500"></div>
                        <div className="size-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Fake Code */}
                    <div className="font-mono text-xs md:text-sm space-y-1 md:space-y-2 text-slate-300 overflow-hidden">
                        <p><span className="text-pink-400">function</span> <span className="text-blue-400">analyzeCode</span>() {'{'}</p>
                        <p className="pl-4">const <span className="text-cyan-400">bugs</span> = <span className="text-yellow-300">detectErrors</span>();</p>
                        <p className="pl-4">if (bugs) {'{'}</p>
                        <p className="pl-8 text-green-400">// AI Fixing bugs...</p>
                        <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-yellow-300">cleanCode</span>;</p>
                        <p className="pl-4">{'}'}</p>
                        <p>{'}'}</p>
                    </div>

                    {/* The "Scanner" Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] animate-scan"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
