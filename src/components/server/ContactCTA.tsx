import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-16 px-6 md:px-12 bg-green-smoke text-quarter-spanish-white mt-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Kurucularımız ile iletişime geçin</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Kurucularımızın çalışmalarıyla ilgileniyorsanız veya olası bir işbirliğini görüşmek istiyorsanız, iletişim formumuz aracılığıyla bize ulaşın.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-quarter-spanish-white text-walnut px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md"
        >
          Bizimle iletişme geçin
        </Link>
      </div>
    </section>
  );
} 