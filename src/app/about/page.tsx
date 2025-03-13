'use client';

import Navbar from '@/components/client/Navbar';
import Footer from '@/components/client/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 bg-quarter-spanish-white">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-walnut mb-6">
                Root Hakkında
              </h1>
              <p className="text-lg text-willow-grove max-w-3xl">
              Türk göçmenler için, dört Türk göçmen terapisti tarafından kurulan bir topluluk. Amacımız, göç sürecinin getirdiği zorlukları paylaşmak, destekleyici bir alan yaratmak ve birlikte güçlenmek.              
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-walnut mb-4">Root Hikayesi</h2>
                <p className="text-willow-grove mb-4">
                Root, dört göçmen terapist tarafından kurulan bir topluluk olarak, yalnızca bireysel destek sunmakla kalmayıp, aynı zamanda ortak deneyimlerimizden güç alarak çözümler üretmeyi amaçlıyor. Göçmenlik sürecinde hepimizin karşılaştığı zorlukları paylaşarak, birlikte daha sağlıklı başa çıkma yolları buluyoruz. 
                </p>
                <p className="text-willow-grove mb-4">
                Yeni bir ülkeye adapte olmanın getirdiği kültürel, duygusal ve psikolojik zorluklara karşı yalnız olmadığımızı bilmek, bu süreci daha dayanılabilir kılıyor.
                </p>
                <p className="text-willow-grove">
                Root, tam da bu dayanışma ruhuyla doğdu ve büyümeye devam ediyor.
                </p>
              </div>
              <div className="bg-grain-brown bg-opacity-30 p-10 rounded-lg">
                <h3 className="text-2xl font-semibold text-walnut mb-4">Root Misyonu</h3>
                <ul className="space-y-3 text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-green-smoke mr-2">✓</span>
                    <span>Tanıdık kültürel bağlamlarda profesyonel danışmanlık hizmetleri sunmak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-smoke mr-2">✓</span>
                    <span>Ortak deneyimlerin paylaşılması ve topluluk oluşturulması için destek grupları düzenlemek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-smoke mr-2">✓</span>
                    <span>Türk kültürü ile yeni yaşam ortamları arasında bir köprü kurmak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-smoke mr-2">✓</span>
                    <span>Kültürel kimliği koruyarak başarılı bir entegrasyon için kaynaklar sağlamak</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-6 md:px-12 bg-yuma bg-opacity-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-walnut mb-8 text-center">Root Yaklaşımı</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-quarter-spanish-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-smoke rounded-full flex items-center justify-center text-quarter-spanish-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-walnut mb-3">Kültürel Anlayış</h3>
                <p className="text-willow-grove">
                  Hizmetlerimizi, kültürel farklılıkları ve göçmenlik deneyimlerini gözeterek, anlayışlı ve kapsayıcı bir yaklaşımla sunuyoruz.
                </p>
              </div>
              
              <div className="bg-quarter-spanish-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-smoke rounded-full flex items-center justify-center text-quarter-spanish-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-walnut mb-3">Profesyonel Yardım</h3>
                <p className="text-willow-grove">
                  Alanında uzman ekibimiz, göçmenlerin yaşadığı zorluklara duyarlı, bilimsel temelli danışmanlık yöntemleriyle destek sağlıyor.
                </p>
              </div>
              
              <div className="bg-quarter-spanish-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-smoke rounded-full flex items-center justify-center text-quarter-spanish-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-walnut mb-3">Topluluk Bağlantısı</h3>
                <p className="text-willow-grove">
                  Topluluğun gücüne inanıyor ve Türk göçmenlerin birbirleriyle anlamlı bağlar kurabilecekleri destekleyici alanlar oluşturuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 px-6 md:px-12 bg-green-smoke text-quarter-spanish-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Topluluğumuza Katılın</h2>
            <p className="mb-8 max-w-2xl mx-auto">
            Bir Türk göçmen olarak yolculuğunuzu anlayan destekleyici bir toplulukla bağlantı kurmaya hazır mısınız?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-quarter-spanish-white text-walnut px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md"
            >
              Bizimle İletişime Geçin
            </a>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
} 