import Navbar from '@/components/client/Navbar';
import Footer from '@/components/client/Footer';
import { ClientFounderHero } from '@/components/client/ClientFounderHero';
import FoundersList from '@/components/server/FoundersList';
import ContactCTA from '@/components/server/ContactCTA';

export default function FoundersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <ClientFounderHero />
        <FoundersList />
        <ContactCTA />
      </div>
      
      <Footer />
    </main>
  );
} 