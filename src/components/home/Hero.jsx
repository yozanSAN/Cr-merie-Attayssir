import React from 'react';
import { RESTAURANT_INFO } from '../../utils/constants';
import Button from "../common/Button.jsx";


const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero/hero-dish.jpg"
                    alt="Delicious food"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-dark-900/80" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Food Image */}
                    <div className="relative hidden md:block">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/hero/salmon-bowl.jpg"
                                alt="Salmon Poke Bowl"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute top-6 left-6 bg-primary-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                                Chef's Special
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-400/20 rounded-full blur-3xl" />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="font-display font-bold mb-6 text-white animate-fade-in">
              <span className="block text-3xl md:text-4xl mb-2">
                {RESTAURANT_INFO.tagline}
              </span>
                            <span className="block text-5xl md:text-7xl text-gradient">
                {RESTAURANT_INFO.subtitle}
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed animate-slide-up">
                            {RESTAURANT_INFO.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up">
                            <Button variant="primary" size="lg">
                                Read Our Story
                            </Button>
                            <Button variant="outline" size="lg">
                                Reserve a Table
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-dark-700">
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">
                                    10+
                                </div>
                                <div className="text-sm text-neutral-400">Years Experience</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">
                                    50+
                                </div>
                                <div className="text-sm text-neutral-400">Menu Items</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">
                                    5.0
                                </div>
                                <div className="text-sm text-neutral-400">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-primary-400 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;