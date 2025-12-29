import { UtensilsCrossed } from "lucide-react";
import { Instagram, MessageCircle, AtSign } from "lucide-react";

const Footer = () => {
    const footerLinks = ["Privacy Policy", "Terms of Service", "Careers"];
    const socialLinks = [
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: MessageCircle, href: "#", label: "WhatsApp" },
        { icon: AtSign, href: "#", label: "Email" },
    ];

    return (
        <footer className="px-6 py-12 border-t border-border">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <UtensilsCrossed className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-heading text-lg font-semibold text-foreground">
              Crèmerie Attayssir
            </span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                        © 2024 Crèmerie Attayssir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
