import Image from 'next/image';

export default function FoundersList() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Founder 1 */}
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
            <p className="text-battleship-gray mb-4">Kod adam big D</p>
            <div className="mb-6 flex space-x-4">
              <a href="mailto:alp@example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a href="https://example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Personal website">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
            <p className="text-willow-grove mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus lacus nec tellus consectetur, eget rhoncus enim sagittis. 
              Suspendisse potenti. Ut auctor, leo vel fermentum facilisis, purus metus finibus orci, vitae viverra urna libero in urna.
            </p>
            <p className="text-willow-grove mb-4">
              Donec molestie augue ac ipsum rutrum, at volutpat eros facilisis. Quisque vitae tincidunt justo. 
              Nunc semper ipsum id lorem consequat, sed scelerisque dolor feugiat. Maecenas vel tellus vitae nisl pretium molestie.
            </p>
            <a 
              href="/alpcv.pdf" 
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>
        
        {/* Founder 2 - Azra */}
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
            <h2 className="text-3xl font-bold text-walnut mb-2">Azra Hamitoğlu Kobak</h2>
            <p className="text-battleship-gray mb-4">Boşnak Böreği Uzmanı</p>
            <div className="mb-6 flex space-x-4">
              <a href="mailto:azra@example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a href="https://example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Personal website">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
            <p className="text-willow-grove mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus lacus nec tellus consectetur, eget rhoncus enim sagittis. 
              Suspendisse potenti. Ut auctor, leo vel fermentum facilisis, purus metus finibus orci, vitae viverra urna libero in urna.
            </p>
            <p className="text-willow-grove mb-4">
              Donec molestie augue ac ipsum rutrum, at volutpat eros facilisis. Quisque vitae tincidunt justo. 
              Nunc semper ipsum id lorem consequat, sed scelerisque dolor feugiat. Maecenas vel tellus vitae nisl pretium molestie.
            </p>
            <a 
              href="/azracv.pdf" 
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>

        {/* Founder 3 - Sena */}
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
            <h2 className="text-3xl font-bold text-walnut mb-2">Sena Nur Kaya</h2>
            <p className="text-battleship-gray mb-4">Kayserili</p>
            <div className="mb-6 flex space-x-4">
              <a href="mailto:sena@example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a href="https://example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Personal website">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
            <p className="text-willow-grove mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus lacus nec tellus consectetur, eget rhoncus enim sagittis. 
              Suspendisse potenti. Ut auctor, leo vel fermentum facilisis, purus metus finibus orci, vitae viverra urna libero in urna.
            </p>
            <p className="text-willow-grove mb-4">
              Donec molestie augue ac ipsum rutrum, at volutpat eros facilisis. Quisque vitae tincidunt justo. 
              Nunc semper ipsum id lorem consequat, sed scelerisque dolor feugiat. Maecenas vel tellus vitae nisl pretium molestie.
            </p>
            <a 
              href="/senacv.pdf" 
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>

        {/* Founder 4 */}
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
            <h2 className="text-3xl font-bold text-walnut mb-2">Selcen Serin Görgüner</h2>
            <p className="text-battleship-gray mb-4">Uzman Psikolojik Danışman</p>
            <div className="mb-6 flex space-x-4">
              <a href="mailto:selcen@example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a href="https://example.com" className="text-bourbon hover:text-walnut transition-colors" aria-label="Personal website">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
            <p className="text-willow-grove mb-4">
            Selcen Serin Görgüner, Boğaziçi Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden onur derecesi ve her yıl akademik başarı, sosyal etkinlik ve topluma katkı gibi ölçütler kullanılarak fakültesini temsil eden üstün nitelikli bir öğrenciye verilen Prof. Dr. Hikmet Sebüktekin Bursu Ödülüyle mezun olmuştur. Bu sürede Erasmus+ değişim programıyla gittiği Stockholm Üniversitesi’nde İsveç’te özel eğitim alanında bir dönem eğitim görmüştür. Work and Travel programı aracılığıyla bir süreliğine çalışmak ve dil becerisini geliştirmek amacıyla ABD’ye gitmiştir.
            </p>
            <p className="text-willow-grove mb-4">
            Padova Üniversitesi Gelişim ve Psikolojisi yüksek lisans programını tamamlayarak uzmanlığını almıştır. Yüksek lisans tez döneminde Trinity College Dublin üniversitesine İrlanda’ya misafir araştırmacı olarak bir dönemliğine giderek orada araştırma projesi üzerinde çalışmıştır. Eğitim yıllarında böylece zaman zaman farklı ülkelerde göçmenliği deneyimleme fırsatı bulmuş ve bu konuya ilgisi artmıştır. Yüksek lisansını tamamladıktan sonra Türkiye’ye dönüş yapmış ve seanslarına başlamıştır. Şu anda çocuk, ergen ve genç yetişkinlerle olan seanslarını yüz yüze (Moda/Kadıköy’de) ve online olarak yürütmektedir.
            </p>
            <a 
              href="/selcencv.pdf" 
              className="inline-block text-bourbon font-medium hover:text-walnut transition-colors"
            >
              Download CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 