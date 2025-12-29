import React, { useState } from 'react';
import clsx from 'clsx';

const menuItems = [
  {
    id: 1,
    name: "Bruschetta Classica",
    description: "Toasted rustic bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil.",
    price: 45,
    image: "/images/menu/bruschetta.jpg",
    category: "starters",
    tags: ["Vegetarian"],
  },
  {
    id: 2,
    name: "Velouté du Jour",
    description: "Silky seasonal soup with herb-infused cream and artisanal bread.",
    price: 55,
    image: "/images/menu/soup.jpg",
    category: "starters",
    tags: ["Chef's Pick"],
  },
  {
    id: 3,
    name: "Mediterranean Salad",
    description: "Crisp greens with feta cheese, kalamata olives, cherry tomatoes, and lemon vinaigrette.",
    price: 65,
    image: "/images/menu/salad.jpg",
    category: "starters",
    tags: ["Vegetarian", "Healthy"],
  },
  {
    id: 4,
    name: "Atlantic Salmon",
    description: "Pan-seared salmon fillet with lemon butter sauce, grilled asparagus, and roasted potatoes.",
    price: 185,
    image: "/images/menu/salmon.jpg",
    category: "mains",
    tags: ["Signature"],
  },
  {
    id: 5,
    name: "Lamb Tagine",
    description: "Slow-cooked Moroccan lamb with apricots, almonds, and aromatic spices served with fluffy couscous.",
    price: 195,
    image: "/images/menu/tagine.jpg",
    category: "mains",
    tags: ["Traditional", "Chef's Pick"],
  },
  {
    id: 6,
    name: "Filet Mignon",
    description: "Premium beef tenderloin with red wine reduction, truffle mash, and seasonal vegetables.",
    price: 245,
    image: "/images/menu/steak.jpg",
    category: "mains",
    tags: ["Premium"],
  },
  {
    id: 7,
    name: "Chocolate Fondant",
    description: "Warm chocolate lava cake with a molten center, vanilla bean ice cream, and fresh berries.",
    price: 75,
    image: "/images/menu/chocolate-cake.jpg",
    category: "desserts",
    tags: ["Signature"],
  },
  {
    id: 8,
    name: "Pastilla Sucrée",
    description: "Traditional Moroccan flaky pastry filled with almond cream, dusted with cinnamon and powdered sugar.",
    price: 65,
    image: "/images/menu/pastilla.jpg",
    category: "desserts",
    tags: ["Traditional"],
  },
];

const categories = [
  { key: "all", label: "All Dishes" },
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Main Courses" },
  { key: "desserts", label: "Desserts" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary-400 font-medium tracking-wider uppercase text-sm">
            Culinary Excellence
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Discover a fusion of traditional Moroccan flavors and international cuisine, 
            crafted with the finest seasonal ingredients.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 border-b border-dark-700 sticky top-0 bg-dark-900/95 backdrop-blur-sm z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={clsx(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.key
                    ? "bg-primary-400 text-white shadow-lg shadow-primary-400/25"
                    : "bg-dark-800 text-neutral-400 hover:bg-dark-700 hover:text-white border border-dark-700"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-400/5 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.tags && item.tags.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium bg-dark-900/90 backdrop-blur-sm text-white rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="font-display text-lg font-bold text-primary-400 whitespace-nowrap">
                          {item.price} MAD
                        </span>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dark-700">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">
                        {item.category === "starters" && "Starter"}
                        {item.category === "mains" && "Main Course"}
                        {item.category === "desserts" && "Dessert"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 px-6 bg-dark-800">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-neutral-400 italic">
            All prices are in Moroccan Dirhams (MAD). A 10% service charge will be added to your bill. 
            Please inform our staff of any allergies or dietary requirements.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-white font-medium rounded-full hover:bg-primary-500 transition-colors duration-300 shadow-lg"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;