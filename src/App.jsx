import { useState } from 'react';
import { Gamepad2, ShoppingCart, User } from 'lucide-react';
import Hero from './components/Hero';
import PricePanel from './components/PricePanel';
import DetailsTabs from './components/DetailsTabs';
import MediaStrip from './components/MediaStrip';

export default function App() {
  const [preferredCurrency, setPreferredCurrency] = useState('USD');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-fuchsia-500/30 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 text-fuchsia-300 border border-fuchsia-400/20">
              <Gamepad2 size={20} />
            </div>
            <span className="font-semibold tracking-tight text-neutral-100">Nebula Play</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#" className="hover:text-white transition-colors">Store</a>
            <a href="#" className="hover:text-white transition-colors">Library</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <ShoppingCart size={16} />
              Cart
            </button>
            <button className="inline-flex items-center gap-2 rounded-full p-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <User size={16} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 -mt-24 relative z-10">
          <div className="lg:col-span-2">
            <MediaStrip />
            <div className="mt-8">
              <DetailsTabs />
            </div>
          </div>
          <div className="lg:col-span-1">
            <PricePanel preferredCurrency={preferredCurrency} onCurrencyChange={setPreferredCurrency} />
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400">
          <p>
            © {new Date().getFullYear()} Nebula Play. Not affiliated with Valve, Steam, or Nintendo. Prices in crypto are estimates and may vary at checkout.
          </p>
        </div>
      </footer>
    </div>
  );
}
