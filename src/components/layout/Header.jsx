import { Link } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";
import Button from "../common/Button.jsx"

export default function Header() {
    return (
        <header className="bg-[#2a2420] border-b border-[#3a3430] sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-white font-bold text-lg">Crémerie Attayssir</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/menu" className="text-gray-300 hover:text-white transition">
                        Menu
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-white transition">
                        About
                    </Link>
                    <Link to="/gallery" className="text-gray-300 hover:text-white transition">
                        Gallery
                    </Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white transition">
                        Contact
                    </Link>
                </div>

                <Link to="/contact">
                    <Button className="bg-[#d4a574] hover:bg-[#c49564] text-[#2a2420] font-semibold">Reserve</Button>
                </Link>
            </nav>
        </header>
    )
}
