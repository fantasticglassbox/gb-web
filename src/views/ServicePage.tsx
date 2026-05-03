'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      paragraphs: [
        'Penempatan media digital Glassbox menjangkau audiens berkualitas tinggi melalui jaringan layar digital yang tersebar di lebih dari 50 lokasi strategis di Jakarta dan sekitarnya — mulai dari koridor mal, lobby hotel bintang lima, area kampus universitas, hingga lounge premium.',
        'Setiap layar dalam jaringan DOOH (Digital Out-of-Home) Glassbox beroperasi di titik-titik dengan lalu lintas tinggi yang terverifikasi: Sudirman, Thamrin, Kuningan, dan koridor bisnis utama Jakarta. Merek Anda tampil tepat di hadapan audiens yang relevan — eksekutif, mahasiswa, wisatawan domestik, dan konsumen aktif.',
        'Kami menyediakan laporan proof-of-play terperinci sehingga klien dapat mengukur eksposur kampanye secara real-time. Konten iklan dapat diperbarui kapan saja tanpa biaya produksi ulang, memungkinkan respons cepat terhadap perubahan pasar atau promosi musiman.',
      ],
      image: '/images/digital-signage.webp',
      features: [
        'Jaringan 50+ Lokasi Jakarta',
        'Laporan Proof-of-Play',
        'Update Konten Real-Time',
        'Targeting Audiens Terverifikasi',
        'Format Digital Signage & Smart TV',
        'Penempatan Premium Hotel & Mall',
      ],
    },
    'ooh-transit': {
      title: t('services.oohTransit'),
      description: t('services.oohTransitDescription'),
      paragraphs: [
        'Media transit OOH Glassbox menempatkan pesan merek Anda di jalur perjalanan harian jutaan komuter Jakarta — di dalam armada Transjakarta, halte bus strategis, dan area transportasi publik berdensitas tinggi. Iklan transit menjangkau audiens yang sama secara berulang setiap hari kerja, membangun ingatan merek yang kuat.',
        'Jaringan transit Glassbox mencakup koridor Transjakarta utama termasuk Blok M–Kota, Harmoni–Kalideres, dan rute-rute menuju pusat bisnis Jakarta Pusat dan Jakarta Selatan. Dengan frekuensi paparan rata-rata 20–30 kali per bulan per komuter, OOH transit adalah salah satu format periklanan luar ruang paling efisien untuk awareness merek jangka menengah.',
        'Format layar digital di armada dan halte memungkinkan penjadwalan konten berdasarkan waktu — iklan produk kopi pagi hari, promosi restoran sore hari, atau kampanye hiburan di akhir pekan. Fleksibilitas ini memberi merek kontrol penuh atas konteks pesan mereka.',
      ],
      image: '/images/smart-tv.webp',
      features: [
        'Jaringan Transjakarta & Halte Bus',
        'Frekuensi Paparan Tinggi Harian',
        'Penjadwalan Konten Berbasis Waktu',
        'Jangkauan Koridor Bisnis Jakarta',
        'Format Layar Digital Transit',
        'Audiens Komuter Terverifikasi',
      ],
    },
    'offline-event': {
      title: t('services.offlineEvent'),
      description: t('services.offlineEventDescription'),
      paragraphs: [
        'Aktivasi merek offline Glassbox menghadirkan pengalaman langsung yang menghubungkan konsumen dengan identitas merek Anda di lokasi dengan lalu lintas tinggi — mal, kampus universitas, hotel, dan venue premium Jakarta. Brand activation yang efektif mengubah perhatian menjadi keterlibatan nyata dan konversi terukur.',
        'Kami mengintegrasikan teknologi digital dengan elemen fisik: tablet interaktif untuk engagement langsung, layar digital untuk display produk, dan sistem pengumpulan data yang memungkinkan tindak lanjut kampanye. Setiap aktivasi dirancang bersama tim kreatif Glassbox untuk menyesuaikan dengan karakter merek dan target audiens spesifik.',
        'Dari roadshow universitas yang menjangkau mahasiswa urban, hingga aktivasi hotel yang menargetkan tamu bisnis kelas atas, Glassbox mengelola seluruh proses dari perencanaan venue, perizinan, setup teknologi, hingga pelaporan hasil. Layanan end-to-end ini memastikan kampanye berjalan mulus dan konsisten di setiap titik aktivasi.',
      ],
      image: '/images/tablets.webp',
      features: [
        'Brand Activation Mall & Kampus',
        'Teknologi Tablet Interaktif',
        'Pengumpulan Data Prospek',
        'Event Management End-to-End',
        'Integrasi Digital + Fisik',
        'Laporan Engagement Terperinci',
      ],
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

                <div className="border-l-2 border-glassbox-blue/30 pl-6 mb-10 space-y-4">
                  {(service.paragraphs ?? [service.fullContent]).map((p: string, i: number) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                  ))}
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
                    className="relative rounded-2xl overflow-hidden border-4 border-white shadow-card-hover aspect-[4/5]"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
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
