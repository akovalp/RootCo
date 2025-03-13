"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-willow-grove text-quarter-spanish-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">ROOT🧿</h3>
            <p className="max-w-md text-sm opacity-80">
              Danışmanlık ve destek grupları arayan Türk göçmenler için bir
              topluluk
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm hover:text-grain-brown transition-colors"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm hover:text-grain-brown transition-colors"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/founders"
                    className="text-sm hover:text-grain-brown transition-colors"
                  >
                    Kurucular
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm hover:text-grain-brown transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">İletişim</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm hover:text-grain-brown transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
                <li className="text-sm">
                  <a
                    href="mailto:rootfaminfo@gmail.com"
                    className="hover:text-grain-brown transition-colors"
                  >
                    rootfaminfo@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-quarter-spanish-white border-opacity-20 mt-8 pt-6 text-sm text-center md:text-left md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} ROOT Topluluğu. Tüm hakları saklıdır.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-grain-brown transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-grain-brown transition-colors">
              Hizmet Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
