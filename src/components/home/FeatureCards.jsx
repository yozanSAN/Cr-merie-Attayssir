import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Daily Specials",
    image: "/images/gallery/daily-specials.jpg",
    alt: "Elegant dessert plating",
    link: "/menu",
  },
  {
    title: "Our Story",
    image: "/images/gallery/our-story.jpg",
    alt: "Cozy restaurant interior",
    link: "/about",
  },
  {
    title: "Private Events",
    image: "/images/gallery/private-events.jpg",
    alt: "Friends celebrating at dinner",
    link: "/contact",
  },
];

const FeatureCards = () => {
  return (
    <section className="px-6 py-16">
      <div className="container mx-auto">
        <div className="mb-10 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Experience Crèmerie Attayssir
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            Discover the flavors and moments that make us unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group relative rounded-lg overflow-hidden aspect-square cursor-pointer animate-scale-in block"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
