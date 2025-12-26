import '../../index.css'

const Navbar = () => {
    return (
        <div>
            {/* Floating Glass Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-50 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 shadow-lg shadow-cyan-500/5">
                <div className="flex items-center justify-between px-6 py-3">

                    {/* 1. The Logo (Glowing Text) */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="size-8 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-cyan-500/20 shadow-md">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <span className="text-lg font-bold text-slate-100 tracking-tight">
                            Syntax<span className="text-cyan-400">Shark</span>
                        </span>
                    </div>

                    {/* 2. Desktop Links (Hidden on mobile) */}
                    <ul className="hidden md:flex gap-8 items-center">
                        {['Home', 'Features', 'Pricing', 'Docs'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* 3. Action Button (Small & Punchy) */}
                    <div className="flex gap-4 items-center">
                        <a href="#login" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Log In
                        </a>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar  