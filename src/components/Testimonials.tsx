import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: '3S Company',
      content: 'Partnering with Glassbox has greatly increased 3S\'s visibility, making it easier for clients and candidates to find us. The exposure in premium locations has boosted our engagement, and their professional support made the process seamless. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Tech Solutions Inc',
      content: 'The innovative advertising solutions provided by Glassbox have transformed our brand presence. Their strategic approach and cutting-edge technology delivered exceptional results.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      content: 'Working with Glassbox has been a game-changer for our campaigns. Their attention to detail and creative approach helped us reach our target audience effectively.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_: any, i: number) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;