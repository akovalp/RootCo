"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import Testimonial from "@/components/client/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 bg-quarter-spanish-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-walnut mb-6">
                Merhaba
              </h1>
              <p className="text-xl md:text-2xl text-willow-grove mb-10 max-w-3xl mx-auto">
                Psikoterapi, danışmanlık ve destek grupları arayan göçmenler
                için kurduğumuz topluluğumuza hoşgeldiniz.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <a
                  href="/contact"
                  className="inline-block bg-green-smoke text-quarter-spanish-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md"
                >
                  İletişime Geçin
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section Preview */}
        <section className="py-16 px-6 md:px-12 bg-grain-brown bg-opacity-30">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-walnut mb-4">
                  Biz Kimiz
                </h2>
                <p className="text-willow-grove mb-6">
                  Root, göçmenlere psikoterapi, danışmanlık ve grup destek
                  oturumları aracılığıyla destek vermek için kurulmuş bir
                  topluluktur. Misyonumuz, yeni bir ülkeye geçiş sürecinde
                  rehberlik arayan bireyler için güvenli ve sıcak bir ortam
                  yaratmaktır.
                </p>
                <a
                  href="/about"
                  className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
                >
                  Hakkımızda daha fazla bilgi alın →
                </a>
              </div>
              <Testimonial />
            </div>
          </div>
        </section>

        {/* Founders Preview */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-walnut mb-4">
              Kurucularımız
            </h2>
            <p className="text-willow-grove mb-10 max-w-3xl mx-auto">
              Kurucularımız ile tanışın
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* //SECTION Alp Akova Card */}
              <div className="bg-quarter-spanish-white rounded-lg p-6 shadow-md">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border border-yuma/30 shadow-sm">
                  <Image
                    src="/alp.webp"
                    alt="Alp Akova"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-walnut">Alp Akova</h3>
                <p className="text-battleship-gray mb-3">Kod uzmanı ai adam</p>
                <p className="text-willow-grove text-sm">
                  Alp Akova, Sabancı Üniversitesi'nde psikoloji okudu, Padova
                  Üniversitesi'nde LLM’lerin dil öğretimine etkisini inceledi.
                  Trento Üniversitesi'nde doktora yapıyor, EEG verileriyle beyin
                  yaşı tahmini ve fiziksel aktivitenin bilişsel yaşlanmaya
                  etkisini araştırıyor. Daha önce Subconscious AI ve Padova
                  Üniversitesi’nde yapay zekâ ve dil öğrenimi üzerine çalıştı.
                </p>
              </div>
              {/* //!SECTION Alp Akova Card */}
              {/* //SECTION Azra Hamitoğlu Kobak Card */}
              <div className="bg-quarter-spanish-white rounded-lg p-6 shadow-md">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border border-yuma/30 shadow-sm">
                  <Image
                    src="/azra.webp"
                    alt="Azra Hamitoğlu Kobak"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-walnut">
                  Azra Hamitoğlu Kobak
                </h3>
                <p className="text-battleship-gray mb-3">
                  Uzman Gelişim Psikologu
                </p>
                <p className="text-willow-grove text-sm">
                  Kanada'da UBC'de psikoloji okudu, Padova Üniversitesi'nde
                  Gelişim ve Eğitim Psikolojisi yüksek lisansını tamamladı. BDT
                  ve aile danışmanlığı alanında uzmanlaşarak kaygı, depresyon,
                  obsesif kompulsif bozukluk ve çocuk-ergen psikolojisi üzerine
                  çalışmaktadır. Yüz yüze ve online terapi sunmaktadır.
                </p>
              </div>
              {/* //!SECTION Azra Hamitoğlu Kobak Card */}
              {/* //SECTION Sena Nur Kaya Card */}
              <div className="bg-quarter-spanish-white rounded-lg p-6 shadow-md">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border border-yuma/30 shadow-sm">
                  <Image
                    src="/sena.webp"
                    alt="Sena Nur Kaya"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-walnut">
                  Sena Nur Kaya
                </h3>
                <p className="text-battleship-gray mb-3">
                  Kayserili ama Sivaslı
                </p>
                <p className="text-willow-grove text-sm">
                  Sena Nur, Kayseri'de yaşayan bir kadındır. Ama Sivaslıdır?
                  Kayserili ama Sivaslıdır. (Bu kısımları AI onerdi kahkaha
                  attım bıraktım)
                </p>
              </div>
              {/* //!SECTION Sena Nur Kaya Card */}
              {/* //SECTION Selcen Serin Görgüner Card */}
              <div className="bg-quarter-spanish-white rounded-lg p-6 shadow-md">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border border-yuma/30 shadow-sm">
                  <Image
                    src="/selcen.webp"
                    alt="Selcen Serin Görgüner"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-walnut">
                  Selcen Serin Görgüner
                </h3>
                <p className="text-battleship-gray mb-3">
                  Uzman Psikolojik Danışman
                </p>
                <p className="text-willow-grove text-sm">
                  Selcen Serin Görgüner, Boğaziçi Üniversitesi Psikolojik
                  Danışmanlık mezunu, Prof. Dr. Hikmet Sebüktekin Bursu
                  sahibidir. Stockholm, Padova ve Trinity College Dublin’de
                  eğitim ve araştırmalar yapmış, göçmenlik ve kültürlerarası
                  konular üzerine çalışmaktadır. Çocuk, ergen ve genç
                  yetişkinlerle terapi yürütmektedir.
                </p>
              </div>
              {/* //!SECTION Selcen Serin Görgüner Card */}
            </div>
            <div className="mt-8">
              <a
                href="/founders"
                className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
              >
                Kurucularımız hakkında daha fazla bilgi alın →
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-6 md:px-12 bg-green-smoke text-quarter-spanish-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              İletişime Geçmeye Hazır mısınız?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Danışmanlık veya destek gruplarına kayıt olmak istiyorsanız,
              iletişime geçebilirsiniz.
            </p>
            <a
              href="/contact"
              className="inline-block bg-quarter-spanish-white text-walnut px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md"
            >
              İletişime Geçin
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
