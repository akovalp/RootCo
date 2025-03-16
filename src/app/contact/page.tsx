"use client";

import { useState } from "react";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Genel Sorular",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // In a real implementation, you would send this data to your backend
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "Genel Sorular",
      });
    } catch (err) {
      setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Bizimle İletişime Geçin
              </h1>
              <p className="text-lg text-willow-grove max-w-3xl">
                Hizmetlerimiz hakkında sorularınız mı var? Root hakkında daha
                fazla bilgi almak ister misiniz? Bizimle iletişime geçin.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold text-walnut mb-6">
                  Bizimle İletişime Geçin
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-smoke bg-opacity-20 border border-green-smoke p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-walnut mb-2">
                      Teşekkürler!
                    </h3>
                    <p className="text-willow-grove">
                      Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                      yapacağız.
                    </p>
                    <button
                      className="mt-4 text-bourbon hover:text-walnut transition-colors"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Başka bir mesaj gönder
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-willow-grove font-medium mb-2"
                      >
                        Adınız
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-yuma rounded-md focus:outline-none focus:ring-2 focus:ring-green-smoke"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-willow-grove font-medium mb-2"
                      >
                        Email Adresiniz
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-yuma rounded-md focus:outline-none focus:ring-2 focus:ring-green-smoke"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-willow-grove font-medium mb-2"
                      >
                        Konu
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-yuma rounded-md focus:outline-none focus:ring-2 focus:ring-green-smoke"
                      >
                        <option value="Genel Sorgu">Genel Sorular</option>
                        <option value="Danışmanlık Hizmetleri">
                          Danışmanlık Hizmetleri
                        </option>
                        <option value="Destek Grupları">Destek Grupları</option>
                        <option value="İşbirliği">İşbirliği</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-willow-grove font-medium mb-2"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-yuma rounded-md focus:outline-none focus:ring-2 focus:ring-green-smoke"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-block bg-green-smoke text-quarter-spanish-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-walnut mb-6">
                  Diğer Kanallar ve Sıkça Sorulan Sorular
                </h2>

                <div className="bg-grain-brown bg-opacity-30 p-8 rounded-lg">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-walnut mb-2">
                      Email Adresimiz
                    </h3>
                    <a
                      href="mailto:rootfaminfo@gmail.com"
                      className="text-bourbon hover:text-walnut transition-colors flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      rootfaminfo@gmail.com
                    </a>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-walnut mb-2">
                      Bizi Takip Edin
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/rootfam.co/"
                        className="text-bourbon hover:text-walnut transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-walnut mb-4">
                      Sıkça Sorulan Sorular
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-walnut">
                          Root neden var?
                        </h4>
                        <p className="text-sm text-willow-grove mt-1">
                          Root, özellikle Türk göçmenler için tasarlanmış
                          danışmanlık hizmetleri ve destek grupları sunan
                          profesyonel bir topluluktur.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-walnut">
                          Nerede bulunuyorsunuz?
                        </h4>
                        <p className="text-sm text-willow-grove mt-1">
                          Hem yüz yüze hem de sanal hizmetler sunuyoruz.
                          Konumlarımız hakkında daha fazla bilgi için bizimle
                          iletişime geçin.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-walnut">
                          Ne kadar sürede bir cevap alabilirim?
                        </h4>
                        <p className="text-sm text-willow-grove mt-1">
                          İş günlerinde genellikle tüm maillere 24 saat içinde
                          yanıt veriyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
