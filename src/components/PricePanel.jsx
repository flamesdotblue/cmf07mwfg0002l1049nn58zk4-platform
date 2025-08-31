import { useMemo, useState } from 'react';
import { CreditCard, ShoppingCart } from 'lucide-react';

const CURRENCIES = [
  { code: 'USD', label: 'US Dollar', symbol: '$' },
  { code: 'EUR', label: 'Euro', symbol: '€' },
  { code: 'BTC', label: 'Bitcoin', symbol: '₿' },
  { code: 'ETH', label: 'Ethereum', symbol: 'Ξ' },
  { code: 'ADA', label: 'Cardano', symbol: 'A' },
];

export default function PricePanel({ preferredCurrency = 'USD', onCurrencyChange }) {
  // Base price in USD
  const baseUSD = 59.99;

  // Static rates for demo; in production this would be live
  const rates = {
    USD: 1,
    EUR: 0.92,
    BTC: 1 / 65000, // ~65k USD per BTC
    ETH: 1 / 3000,  // ~3k USD per ETH
    ADA: 1 / 0.45,  // ~0.45 USD per ADA
  };

  const prices = useMemo(() => {
    return CURRENCIES.reduce((acc, c) => {
      const v = baseUSD * rates[c.code];
      acc[c.code] = v;
      return acc;
    }, {});
  }, [baseUSD]);

  const [quantity, setQuantity] = useState(1);

  const format = (code, value) => {
    if (code === 'USD' || code === 'EUR') {
      const symbol = code === 'USD' ? '$' : '€';
      return `${symbol}${value.toFixed(2)}`;
    }
    if (code === 'BTC') return `${value.toFixed(6)} BTC`;
    if (code === 'ETH') return `${value.toFixed(5)} ETH`;
    if (code === 'ADA') return `${Math.ceil(value)} ADA`;
    return value.toFixed(2);
  };

  return (
    <aside className="sticky top-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
        <h3 className="text-lg font-semibold text-white">Purchase</h3>
        <p className="text-sm text-neutral-400 mt-1">Choose your currency. All prices shown at once; your selected currency will be used at checkout.</p>

        {/* Currency selector */}
        <div className="mt-4 flex flex-wrap gap-2">
          {CURRENCIES.map((c) => {
            const active = preferredCurrency === c.code;
            return (
              <button
                key={c.code}
                onClick={() => onCurrencyChange && onCurrencyChange(c.code)}
                className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${active ? 'bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/40' : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'}`}
              >
                {c.code}
              </button>
            );
          })}
        </div>

        {/* All prices */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {CURRENCIES.map((c) => {
            const active = preferredCurrency === c.code;
            return (
              <div key={c.code} className={`rounded-lg border p-3 ${active ? 'border-fuchsia-500/40 bg-fuchsia-500/10' : 'border-white/10 bg-white/5'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">{c.label}</span>
                  {active && <span className="text-[10px] px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-500/40">Selected</span>}
                </div>
                <div className={`mt-1 text-base font-semibold ${active ? 'text-white' : 'text-neutral-200'}`}>
                  {format(c.code, prices[c.code] * quantity)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quantity */}
        <div className="mt-5">
          <label className="text-sm text-neutral-300">Quantity</label>
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-lg"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <input
              value={quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                setQuantity(Number.isFinite(v) && v > 0 ? v : 1);
              }}
              className="h-9 w-16 text-center rounded-md bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
              type="number"
              min={1}
            />
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-lg"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Checkout */}
        <div className="mt-6 grid gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium shadow-lg shadow-fuchsia-900/30 hover:brightness-110 transition">
            <ShoppingCart size={18} />
            Add to cart — {format(preferredCurrency, prices[preferredCurrency] * quantity)}
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 transition">
            <CreditCard size={18} />
            Buy now
          </button>
          <p className="text-[11px] text-neutral-400 mt-1">
            Crypto prices are estimates based on indicative rates and may update during checkout.
          </p>
        </div>
      </div>
    </aside>
  );
}
