'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const INQUIRY_MAILTO =
  'mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,';

interface Props {
  slug: string;
}

const ServicePage: React.FC<Props> = ({ slug }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const serviceData: Record<string, any> = {
    'media-placement': {
      title: t('services.mediaPlacement'),
      description: t('services.mediaPlacementDescription'),
      fullContent:
        "Maximize your brand's reach with strategic ad placements across our extensive network of digital signage and high-traffic public areas. We provide data-driven insights to ensure your message hits the right audience at the right time.",
      image: '/images/digital-signage.webp',
      features: ['Strategic Network', 'Data-Driven Insights', 'High-Traffic Reach', 'Dynamic Content'],
    },
    'ooh-transit': {
      title: t('services.oohTransit'),
      description: t('services.oohTransitDescription'),
      fullContent:
        'Capture the attention of commuters and travelers with high-impact Out-of-Home transit advertising. From Transjakarta routes to major transport hubs, your brand moves with your audience.',
      image: '/images/smart-tv.webp',
      features: ['Commuter Targeting', 'High Frequency', 'Broad Visibility', 'Route-Specific Ads'],
    },
    'offline-event': {
      title: t('services.offlineEvent'),
      description: t('services.offlineEventDescription'),
      fullContent:
        'Create unforgettable brand experiences with our offline event activations. We blend physical engagement with digital technology to create meaningful connections between your brand and its customers.',
      image: '/images/tablets.webp',
      features: ['Interactive Displays', 'Brand Activation', 'Experiential Marketing', 'Lead Generation'],
    },
  };

  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-32">
        <div className="text-center px-6">
          <h1 className="text-3xl font-black text-gray-900 mb-4">{t('services.notFound')}</h1>
          <Link href="/" className="text-glassbox-blue flex items-center justify-center hover:underline font-bold">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> {t('services.backToHome')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-32 md:pt-40 pb-20 md:pb-32 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 transition-colors font-bold uppercase text-xs tracking-widest group"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('services.backToHome')}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              {/* Content */}
              <div className="lg:col-span-7">
                {/* Label */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-6 h-px bg-glassbox-blue" />
                  <span className="text-glassbox-blue font-bold uppercase text-xs tracking-widest">
                    {t('services.strategicSolution')}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.02] tracking-tight mb-6 break-words">
                  {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-glassbox-blue">
                    {service.title.split(' ').pop()}
                  </span>
                </h1>

                <p className="text-xl text-gray-500 mb-8 leading-relaxed">{service.description}</p>

                <div className="border-l-2 border-glassbox-blue/30 pl-6 mb-10">
                  <p className="text-gray-600 leading-relaxed">{service.fullContent}</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.08 }}
                      className="flex items-center gap-3 bg-[#F7F8FA] border border-gray-100 hover:border-glassbox-blue/20 px-5 py-4 rounded-xl transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-glassbox-blue/10 flex items-center justify-center text-glassbox-blue group-hover:bg-glassbox-blue group-hover:text-white transition-colors shrink-0">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-900 font-bold text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={INQUIRY_MAILTO}
                  className="inline-flex items-center gap-3 bg-glassbox-amber text-black font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  {t('services.launchCampaign')}
                </a>
              </div>

              {/* Image */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* PRO badge */}
                  <div className="absolute -top-5 -right-3 z-10 bg-glassbox-blue text-white px-4 py-2 rounded-xl shadow-lg rotate-[4deg] hidden sm:block">
                    <p className="text-xl font-black leading-none">PRO</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest opacity-80 mt-0.5">
                      {t('services.standard')} {t('services.excellence')}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="rounded-2xl overflow-hidden border-4 border-white shadow-card-hover"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
