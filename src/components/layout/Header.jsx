import Button from "../common/Button.jsx"

export default function Header() {
    return (
        <header className="bg-[#2a2420] border-b border-[#3a3430] sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img 
                        src="/images/logo/ChatGPT Image Dec 29, 2025, 04_20_17 PM.png" 
                        alt="Crémerie Attayssir Logo" 
                        className="w-10 h-10 object-contain"
                    />
                    <span className="text-white font-bold text-lg">Crémerie Attayssir</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#menu" className="text-gray-300 hover:text-white transition">
                        Menu
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition">
                        About
                    </a>
                    <a href="#gallery" className="text-gray-300 hover:text-white transition">
                        Gallery
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition">
                        Contact
                    </a>
                </div>

                <Button className="bg-[#d4a574] hover:bg-[#c49564] text-[#2a2420] font-semibold">Reserve</Button>
            </nav>
        </header>
    )
}
