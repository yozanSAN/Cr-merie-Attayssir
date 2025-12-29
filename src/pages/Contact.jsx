import React, { useState } from 'react';
import Button from '../components/common/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../utils/constants';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && formData.phone.length > 20) {
      newErrors.phone = 'Phone must be less than 20 characters';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'Subject must be less than 200 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitSuccess(false);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [RESTAURANT_INFO.contact.address.street, `${RESTAURANT_INFO.contact.address.city}, ${RESTAURANT_INFO.contact.address.country}`],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [RESTAURANT_INFO.contact.phone],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [RESTAURANT_INFO.contact.email],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [`${RESTAURANT_INFO.hours.weekday.label}: ${RESTAURANT_INFO.hours.weekday.open} - ${RESTAURANT_INFO.hours.weekday.close}`, `${RESTAURANT_INFO.hours.weekend?.label || 'Weekend'}: ${RESTAURANT_INFO.hours.saturday.open} - ${RESTAURANT_INFO.hours.saturday.close}`],
    },
  ];

  return (
    <>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback, or want to make a reservation, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="p-6 rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-neutral-400 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h2 className="font-display text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-accent-green/10 border border-accent-green/30 rounded-lg text-accent-green">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 bg-dark-900 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                        errors.name ? 'border-accent-red' : 'border-dark-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-accent-red">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-dark-900 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                        errors.email ? 'border-accent-red' : 'border-dark-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-accent-red">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+212 XXX-XXXXXX"
                      className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`w-full px-4 py-3 bg-dark-900 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                        errors.subject ? 'border-accent-red' : 'border-dark-600'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-accent-red">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className={`w-full px-4 py-3 bg-dark-900 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none ${
                      errors.message ? 'border-accent-red' : 'border-dark-600'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-accent-red">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  title="Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846877675904!2d-7.632759!3d33.592846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e9d8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-6 bg-dark-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Planning a Special Event?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Our private dining room is perfect for celebrations, business meetings, and intimate gatherings. Contact us to discuss your event needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${RESTAURANT_INFO.contact.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-400 text-white font-medium rounded-full hover:bg-primary-500 transition-colors duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us Directly
            </a>
            <a
              href={`mailto:${RESTAURANT_INFO.contact.email}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-dark-700 text-white font-medium rounded-full hover:bg-dark-600 transition-colors duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email for Events
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;