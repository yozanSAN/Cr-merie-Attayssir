import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Heart, Leaf, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every dish is crafted with love and dedication to the culinary arts.",
    },
    {
      icon: Leaf,
      title: "Freshness",
      description: "We source only the finest local and seasonal ingredients daily.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in bringing people together around great food.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every aspect of your dining experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-dark-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/gallery/our-story.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            A journey of passion, flavor, and unforgettable experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/gallery/our-story.jpg"
                  alt="Restaurant history"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-400/20 rounded-2xl -z-10" />
            </div>
            <div className="space-y-6">
              <span className="text-primary-400 font-medium tracking-wider uppercase text-sm">
                Est. 2010
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                From Humble Beginnings to Culinary Excellence
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  Crèmerie Attayssir was born from a simple dream: to create a place where 
                  exceptional food meets warm hospitality. What started as a small family 
                  kitchen has blossomed into a beloved destination for food enthusiasts.
                </p>
                <p>
                  Our journey began with traditional recipes passed down through generations, 
                  each dish carrying the stories and love of those who came before us. Today, 
                  we honor that heritage while embracing innovation and creativity.
                </p>
                <p>
                  Every ingredient is carefully selected, every dish is thoughtfully prepared, 
                  and every guest is treated like family. This is our promise to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-primary-400 font-medium tracking-wider uppercase text-sm">
                Meet the Chef
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Chef Mohamed Attayssir
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  With over 20 years of culinary experience across Europe and the Middle East, 
                  Chef Mohamed brings a unique perspective to every creation. His philosophy 
                  is simple: let the ingredients speak for themselves.
                </p>
                <p>
                  Trained in classical French techniques and inspired by his Moroccan heritage, 
                  Chef Mohamed creates dishes that tell a story. Each plate is a canvas where 
                  tradition meets innovation.
                </p>
                <p className="italic border-l-4 border-primary-400 pl-4 text-neutral-400">
                  "Cooking is not just about feeding people. It's about creating moments, 
                  memories, and connections that last a lifetime."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/chef-antoine.jpg"
                  alt="Chef Mohamed Attayssir"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-400/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-primary-400 font-medium tracking-wider uppercase text-sm">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            What We Believe In
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-16">
            Our values guide everything we do, from sourcing ingredients to serving 
            our guests. These principles are the foundation of our culinary journey.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-8 rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary-400/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-400/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our Story Firsthand
          </h2>
          <p className="text-neutral-300 mb-8">
            Join us for an unforgettable dining experience where every meal tells a story.
          </p>
          <a
            href="/#book"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-white font-medium rounded-full hover:bg-primary-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Reserve Your Table
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;