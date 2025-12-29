import React from 'react';
import Hero from '../components/home/Hero';
import { CORE_VALUES, CHEF_INFO } from '../utils/constants';
import Button from '../components/common/Button.jsx'
const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Hero />

            {/* Core Values Section */}
            <section className="section-padding bg-dark-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                            We believe in three pillars that define the Crèmerie Attayssir experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {CORE_VALUES.map((value) => (
                            <div
                                key={value.id}
                                className="card group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="font-display font-semibold text-2xl text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at Crèmerie Section */}
            <section className="section-padding bg-dark-800">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                            Life at Crèmerie Attayssir
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Image 1 */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src="/images/gallery/interior.jpg"
                                alt="Restaurant Interior"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-6">
                                <span className="text-white font-semibold">Cozy Interior</span>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src="/images/gallery/plating.jpg"
                                alt="Food Plating"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-6">
                                <span className="text-white font-semibold">Chef's Artistry</span>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src="/images/gallery/bread.jpg"
                                alt="Fresh Bread"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-6">
                                <span className="text-white font-semibold">Fresh Baked Daily</span>
                            </div>
                        </div>

                        {/* Image 4 */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src="/images/gallery/dining.jpg"
                                alt="Dining Experience"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-6">
                                <span className="text-white font-semibold">Dining Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chef Section */}
            <section className="section-padding bg-dark-900">
                <div className="container-custom">
                    <div className="bg-dark-800 rounded-3xl overflow-hidden shadow-strong">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left - Text */}
                            <div className="p-8 md:p-12">
                                <div className="text-primary-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                                    The Kitchen
                                </div>
                                <h2 className="font-display font-bold text-4xl text-white mb-6">
                                    Meet {CHEF_INFO.name}
                                </h2>
                                <blockquote className="border-l-4 border-primary-400 pl-6 mb-8">
                                    <p className="text-neutral-300 text-lg italic leading-relaxed mb-4">
                                        "{CHEF_INFO.quote}"
                                    </p>
                                </blockquote>
                                <Button variant="outline">View Chef's Specials</Button>
                            </div>

                            {/* Right - Image */}
                            <div className="relative h-full min-h-[400px]">
                                <img
                                    src="/images/chef-antoine.jpg"
                                    alt={CHEF_INFO.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;