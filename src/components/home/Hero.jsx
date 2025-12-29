import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../common/Button.jsx";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-dish.jpg"
          alt="Gourmet steak dish with microgreens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 text-center px-6 py-20 animate-fade-in">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 tracking-tight">
          Crèmerie Attayssir
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-8">
          Taste the Art of Modern Dining.
          <br />
          Casual excellence in every bite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu">
            <Button variant="default" size="lg">
              View Menu
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Reserve a Table
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;