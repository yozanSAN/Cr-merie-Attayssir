import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../../utils/constants';

const infoItems = [
  {
    icon: MapPin,
    title: "Visit Us",
    description: RESTAURANT_INFO.contact.address.full,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    description: RESTAURANT_INFO.hours.dailyLabel,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    icon: Phone,
    title: "Book Now",
    description: RESTAURANT_INFO.contact.phone,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
];

const InfoCards = () => {
  return (
    <section className="px-6 py-8 mt-8 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {infoItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-secondary rounded-lg p-6 flex items-center gap-4 hover:bg-secondary/80 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-heading text-foreground font-medium text-base">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
