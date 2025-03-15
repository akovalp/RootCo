import Image from "next/image";

export default function FoundersList() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* //SECTION - Alp */}
        <div className="mb-16 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-yuma/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image
                src="/alp.webp"
                alt="Alp Akova"
                width={400}
                height={400}
                priority={true}
                quality={80}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-walnut mb-2">Alp Akova</h2>
            <p className="text-battleship-gray mb-4">
              Cognitive Neuroscience PhD Adayı
            </p>
            <div className="mb-6 flex space-x-4">
              {/* //ANCHOR: Mail*/}
              <a
                href="mailto:akovalp@gmail.com"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              {/* //ANCHOR: Personal website*/}
              <a
                href="https://akovalp.github.io/alpwebsite/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Personal website"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              {/* //ANCHOR: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/alp-a-040a2016a/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.91v5.61h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
                </svg>
              </a>
            </div>
            
            {/* Key Information Lists */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Education List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Eğitim
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>PhD, Cognitive Neuroscience - Trento Üniversitesi (Devam ediyor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>MSc, Gelişim ve Eğitim Psikolojisi - Padova Üniversitesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>BSc, Psikoloji - Sabancı Üniversitesi</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>EEG analizi ve beyin yaşı tahmini</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Makine öğrenimi ve nörosenkronizasyon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Büyük dil modelleri ve karar alma sistemleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Bilişsel yaşlanma süreçleri</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-willow-grove mb-4">
              Alp Akova, Sabancı Üniversitesi Psikoloji bölümünden mezun oldu.
              Lisans döneminde özellikle karar alma süreçleri, tüketici
              davranışları ve organizasyonel psikoloji üzerine odaklandı ve bu
              alanlarda çeşitli projelerde aktif görev aldı. Eğitimine İtalya'da
              devam ederek, Padova Üniversitesi’nde Gelişim ve Eğitim
              Psikolojisi yüksek lisansını tamamladı. Yüksek lisans tezinde
              yapay zekânın dil öğretiminde kullanılabilirliğini araştırarak,
              büyük dil modellerinin (LLM'ler) eğitim süreçlerine olan
              etkilerini analiz etti. Şu anda doktora çalışmalarını Trento
              Üniversitesi’nde Bilişsel Sinirbilim alanında sürdüren Alp, EEG
              verileri üzerinden "Beyin Yaşı Tahmini" (brain-PAD) üzerine
              yoğunlaşmaktadır. Araştırmalarında özellikle fiziksel aktivitenin
              beynin bağlantısallığına etkisini inceliyor, bilişsel yaşlanma
              süreçlerini anlamak için büyük ölçekli EEG analizi,
              nörosenkronizasyon ve makine öğrenimi modelleri üzerine çalışıyor.
            </p>
            <p className="text-willow-grove mb-4">
              Akademik hayatının yanı sıra endüstride de deneyim kazanmıştır.
              New York merkezli Subconscious AI'de mühendislik araştırmacısı
              olarak çalışmış, burada büyük dil modelleri ile karar alma
              sistemleri üzerine projeler yürütmüştür. Ayrıca Padova
              Üniversitesi’nde dil öğrenme süreçlerinde yapay zekâ kullanımı
              üzerine bir araştırma stajı gerçekleştirmiştir. Eğitim ve
              araştırma kariyeri boyunca ABD ve İtalya başta olmak üzere birçok
              uluslararası projede aktif rol almıştır. Şu anda EEG, makine
              öğrenimi ve bilişsel yaşlanma üzerine çalışmalarına Trento
              Üniversitesi’nde devam etmektedir.
            </p>
            <a
              href="/alpcv.pdf"
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>
        {/* //!SECTION - Alp */}

        {/* //SECTION - Azra */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
          <div className="md:col-span-1">
            <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-yuma/30  shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image
                src="/azra.webp"
                alt="Azra Hamitoğlu Kobak"
                width={400}
                height={400}
                quality={70}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-walnut mb-2">
              Azra Hamitoğlu Kobak
            </h2>
            <p className="text-battleship-gray mb-4">Uzman Gelişim Psikologu</p>
            <div className="mb-6 flex space-x-4">
              {/* //ANCHOR: Mail*/}
              <a
                href="mailto:azrahamitoglu.info@gmail.com"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              {/* //ANCHOR: Personal website*/}
              <a
                href="https://www.azrahamitoglu.com/blank-1"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Personal website"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              {/* //ANCHOR Insta */}
              <a
                href="https://www.instagram.com/psikolog.azrahamitoglu/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.723 2.118 5.004.06 6.284.048 6.693.048 12s.012 5.716.07 6.996c.058 1.281.264 2.504 1.347 3.587 1.083 1.083 2.306 1.289 3.587 1.347 1.28.058 1.689.07 6.996.07s5.716-.012 6.996-.07c1.281-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.306 1.347-3.587.058-1.28.07-1.689.07-6.996s-.012-5.716-.07-6.996c-.058-1.281-.264-2.504-1.347-3.587C19.504.264 18.281.058 17 .07 15.72.012 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                </svg>
              </a>
              {/* //ANCHOR: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/azra-hamitoglu-kobak-a272ab25b/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.91v5.61h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
                </svg>
              </a>
            </div>

            {/* Key Information Lists */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Education List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Eğitim
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>MSc, Gelişim ve Eğitim Psikolojisi - Padova Üniversitesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>BSc, Psikoloji - University of British Columbia</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Bilişsel Davranışçı Terapi (BDT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Kaygı bozuklukları ve OKB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Çocuk ve gençlerle terapi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Aile ve ebeveyn danışmanlığı</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-willow-grove mb-4">
              Psikoloji alanında lisans eğitimini Kanada'da University of
              British Columbia'da tamamladı. Bu süreçte, temel psikoloji
              disiplininde sağlam bir teorik altyapı edindi ve akademik alanda
              aktif olarak çalışmalara katıldı.Yüksek lisans eğitimini ise
              Gelişim ve Eğitim Psikolojisi alanında, İtalya'da University of
              Padova'da başarıyla tamamladı. Bu süreçte, bireylerin gelişim
              süreçleri ve eğitim psikolojisi konularında uzmanlaştı ve gelişim
              psikolojisi alanında öncü araştırmaların bir parçası oldu. Yüksek
              lisansını "5-12 Aylık Bebeklerde İşitsel Çalışma Belleği" konulu
              teziyle tamamladı. Eğitim hayatı boyunca çeşitli stajlar yaparak
              psikoloji alanında deneyim kazandı.
            </p>
            <p className="text-willow-grove mb-4">
              Profesyonel kariyerinde, yetişkinler, ergenler ve çocuklar için
              bilişsel davranışçı terapi (BDT) ve aile ve ebeveyn danışmanlığı
              alanlarında uzmanlaştı.Yetişkinlerle çalışma alanları arasında
              kaygı bozuklukları, ilişkisel problemler, obsesif kompulsif
              bozukluk, depresyon, özgül fobiler, bağımlılık, yeme bozuklukları,
              özsaygı ve özgüven sorunları bulunmaktadır. Çocuk ve gençlerle ise
              özellikle bağlanma sorunları, kaygı bozuklukları, okul kaygısı ve
              reddi, sınav kaygısı, obsesif kompulsif bozukluk ve trikotilomani
              gibi alanlarda çalışmalar yürütmektedir. Uzmanlık alanı
              çerçevesinde, başlıca bilişsel davranışçı terapi olmak üzere, aynı
              zamanda sanat terapisi ve ilişkisel yöntemler gibi farklı
              tekniklere başvurarak terapi süreçlerini yönetmektedir.
              Psikoterapi çalışmalarına yüz yüze ve online olarak devam
              etmektedir.
            </p>
            <a
              href="/azracv.pdf"
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>
        {/* //!SECTION - Azra */}
        {/* //SECTION - Sena */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
          <div className="md:col-span-1">
            <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-yuma/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image
                src="/sena.webp"
                alt="Sena Nur Kaya"
                width={400}
                height={400}
                quality={70}
                loading="lazy"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-walnut mb-2">
              Sena Nur Kaya
            </h2>
            <p className="text-battleship-gray mb-4">Uzman Gelişim Psikoloğu</p>
            <div className="mb-6 flex space-x-4">
              {/* //ANCHOR: Mail*/}
              <a
                href="psk.kayasena@gmail.com"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              {/* //ANCHOR Insta */}
              <a
                href="https://www.instagram.com/psikologkayasena/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.723 2.118 5.004.06 6.284.048 6.693.048 12s.012 5.716.07 6.996c.058 1.281.264 2.504 1.347 3.587 1.083 1.083 2.306 1.289 3.587 1.347 1.28.058 1.689.07 6.996.07s5.716-.012 6.996-.07c1.281-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.306 1.347-3.587.058-1.28.07-1.689.07-6.996s-.012-5.716-.07-6.996c-.058-1.281-.264-2.504-1.347-3.587C19.504.264 18.281.058 17 .07 15.72.012 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                </svg>
              </a>
              {/* //ANCHOR: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sena-nur-kaya-219495165/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.91v5.61h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
                </svg>
              </a>
            </div>
            
            {/* Key Information Lists */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Education List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Eğitim
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>MSc, Gelişim ve Eğitim Psikolojisi - Padova Üniversitesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>BSc, Psikoloji (İngilizce) - MEF Üniversitesi</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Bilişsel Davranışçı Terapi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Sanat Terapisi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Ebeveyn danışmanlığı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Montessori eğitim yöntemi</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-willow-grove mb-4">
              Sena Nur Kaya, MEF Üniversitesi Psikoloji (İngilizce) bölümünden
              farklı dönemlerde onur ve yüksek onur derecelerini alarak mezun
              olmuştur. Lisans döneminde tezini Gelişim, Klinik, Sosyal
              Psikoloji alt dallarında olmak üzere toplam 4 farklı araştırma ve
              çalışma yaparak tamamlamıştır. Lisans dönemi boyunca çeşitli
              kliniklerde stajlar yapmıştır. Yüksek lisansını ise İtalya’da
              bulunan Padova Üniversitesi’nde Gelişim ve Eğitim Psikolojisi
              alanında tamamlamıştır. Yüksek lisans tezini “Matematik
              Performanslarındaki Cinsiyet Farklılıkları” konulu Meta-Analiz
              araştırması ile yazmıştır. Bu dönemde İtalya’da Montessori yöntemi
              ile hizmet sunan bir okulda 0-6 yaş arası çocuklarla çalışarak
              farklı kültürlerden gelen aileler ve çocukları daha yakından
              inceleme, analiz etme ve farklı yöntemler geliştirme imkanı
              oluşturmuştur.
            </p>
            <p className="text-willow-grove mb-4">
              Göç deneyimini bizzat kendi deneyimleyen bir Gelişim Psikoloğu
              olarak hala İtalya’da bulunmakta ve online olarak yetişkinler ve
              ergenlerle Bilişsel Davranışçı Terapi ve Sanat Terapisi
              ekolleriyle kaygı bozuklukları, ilişkisel problemler, obsesif
              kompülsif bozukluk, depresyon, özgül fobiler, bağımlılık, yeme
              bozuklukları alanlarında bireysel psikoterapi alanlarında hizmet
              vermektedir. Ek olarak, çocuklarda duygu düzenleme becerileri,
              sınırlar, uyku ve yeme problemleri, özgüven sorunları, okula uyum
              ve oryantasyon süreci, kaygı ve fobiler, kardeş ve akran
              ilişkileri, sağlıklı ebeveyn tutumları, boşanma, yas alanlarında
              ebeveyn danışmanlığı hizmeti vermektedir.
            </p>
            <a
              href="/senacv.pdf"
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>
        {/* //!SECTION - Sena */}
        {/* //SECTION - Selcen */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-yuma/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image
                src="/selcen.webp"
                alt="Selcen Serin Görgüner"
                width={400}
                height={400}
                loading="lazy"
                quality={70}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-walnut mb-2">
              Selcen Serin Görgüner
            </h2>
            <p className="text-battleship-gray mb-4">
              Uzman Psikolojik Danışman
            </p>
            <div className="mb-6 flex space-x-4">
              {/* //ANCHOR: Mail*/}
              <a
                href="mailto:psk.selcenserin@gmail.com"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              {/* //ANCHOR: Personal website*/}
              <a
                href="https://example.com"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Personal website"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>

              {/* //ANCHOR Insta */}
              <a
                href="https://www.instagram.com/psk.selcenserin/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.723 2.118 5.004.06 6.284.048 6.693.048 12s.012 5.716.07 6.996c.058 1.281.264 2.504 1.347 3.587 1.083 1.083 2.306 1.289 3.587 1.347 1.28.058 1.689.07 6.996.07s5.716-.012 6.996-.07c1.281-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.306 1.347-3.587.058-1.28.07-1.689.07-6.996s-.012-5.716-.07-6.996c-.058-1.281-.264-2.504-1.347-3.587C19.504.264 18.281.058 17 .07 15.72.012 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                </svg>
              </a>
              {/* //ANCHOR: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/selcen-s-7b2aa3152/"
                className="text-bourbon hover:text-walnut transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.91v5.61h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
                </svg>
              </a>
            </div>
            
            {/* Key Information Lists */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Education List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Eğitim
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>MSc, Gelişim ve Eğitim Psikolojisi - Padova Üniversitesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>BSc, Psikolojik Danışmanlık ve Rehberlik - Boğaziçi Üniversitesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Erasmus+, Özel Eğitim - Stockholm Üniversitesi</span>
                  </li>
                </ul>
              </div>
              
              {/* Experience List */}
              <div className="bg-bourbon/5 p-4 rounded-lg border border-bourbon/20">
                <h3 className="text-lg font-semibold text-walnut mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-bourbon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-2 text-sm text-willow-grove">
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Çocuk ve ergen terapisi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Genç yetişkin danışmanlığı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Göçmen ve uyum sorunları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bourbon mr-2">•</span>
                    <span>Ebeveyn ve rehberlik danışmanlığı</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* //ANCHOR: Bio */}
            <p className="text-willow-grove mb-4">
              Selcen Serin Görgüner, Boğaziçi Üniversitesi Psikolojik
              Danışmanlık ve Rehberlik bölümünden onur derecesi ve her yıl
              akademik başarı, sosyal etkinlik ve topluma katkı gibi ölçütler
              kullanılarak fakültesini temsil eden üstün nitelikli bir öğrenciye
              verilen Prof. Dr. Hikmet Sebüktekin Bursu Ödülüyle mezun olmuştur.
              Bu sürede Erasmus+ değişim programıyla gittiği Stockholm
              Üniversitesi’nde İsveç’te özel eğitim alanında bir dönem eğitim
              görmüştür. Work and Travel programı aracılığıyla bir süreliğine
              çalışmak ve dil becerisini geliştirmek amacıyla ABD’ye gitmiştir.
            </p>
            <p className="text-willow-grove mb-4">
              Padova Üniversitesi Gelişim ve Psikolojisi yüksek lisans
              programını tamamlayarak uzmanlığını almıştır. Yüksek lisans tez
              döneminde Trinity College Dublin üniversitesine İrlanda’ya misafir
              araştırmacı olarak bir dönemliğine giderek orada araştırma projesi
              üzerinde çalışmıştır. Eğitim yıllarında böylece zaman zaman farklı
              ülkelerde göçmenliği deneyimleme fırsatı bulmuş ve bu konuya
              ilgisi artmıştır. Yüksek lisansını tamamladıktan sonra Türkiye’ye
              dönüş yapmış ve seanslarına başlamıştır. Şu anda çocuk, ergen ve
              genç yetişkinlerle olan seanslarını yüz yüze (Moda/Kadıköy’de) ve
              online olarak yürütmektedir.
            </p>
            {/* //ANCHOR: CV */}
            <a
              href="/selcencv.pdf"
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>
        {/* //!SECTION - Selcen */}
      </div>
    </section>
  );
}
