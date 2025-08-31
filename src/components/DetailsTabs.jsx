import { useState } from 'react';

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'specs', label: 'System Requirements' },
  { id: 'reviews', label: 'Reviews' },
];

export default function DetailsTabs() {
  const [tab, setTab] = useState('about');

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="flex flex-wrap gap-2 p-2 border-b border-white/10">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-2 rounded-md text-sm transition-colors ${tab === t.id ? 'bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-500/40' : 'text-neutral-300 hover:text-white border border-transparent hover:border-white/10'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === 'about' && (
          <div className="space-y-4 text-neutral-300">
            <p>
              In Neon Odyssey: Echoes of the Circuit, you are a courier turned vigilante in a city where skyscrapers are wired like synapses. Chain acrobatic moves, hack environmental nodes, and orchestrate dazzling combat with modular abilities.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Parkour-first traversal across vertical districts</li>
              <li>Adaptive soundtrack that reacts to your combos</li>
              <li>Branching narrative with multiple endings</li>
              <li>Photo mode with cinematic color grading</li>
            </ul>
          </div>
        )}

        {tab === 'specs' && (
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <h4 className="text-neutral-200 font-medium mb-2">Minimum</h4>
              <ul className="space-y-1 text-neutral-300">
                <li>OS: Windows 10 64-bit</li>
                <li>CPU: Intel i5-6600 / Ryzen 5 1400</li>
                <li>RAM: 8 GB</li>
                <li>GPU: GTX 1060 / RX 580</li>
                <li>Storage: 40 GB</li>
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <h4 className="text-neutral-200 font-medium mb-2">Recommended</h4>
              <ul className="space-y-1 text-neutral-300">
                <li>OS: Windows 11 64-bit</li>
                <li>CPU: Intel i7-10700 / Ryzen 7 3700X</li>
                <li>RAM: 16 GB</li>
                <li>GPU: RTX 3060 / RX 6700 XT</li>
                <li>Storage: 40 GB SSD</li>
              </ul>
            </div>
          </div>
        )}

        {tab === 'reviews' && (
          <div className="space-y-4">
            <ReviewRow author="LumenRider" body="A neon dream. Movement feels incredible and the soundtrack slaps. Photo mode is dangerously addictive." rating={5} />
            <ReviewRow author="CRTwitch" body="Stylish, fast, and surprisingly thoughtful narrative branches. Boss fights are highlights." rating={4} />
            <ReviewRow author="VectorV" body="Needs a few patches for ultra-wide UI, but the core gameplay loop is superb." rating={4} />
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewRow({ author, body, rating }) {
  return (
    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
      <div className="flex items-center justify-between">
        <span className="text-neutral-200 font-medium">{author}</span>
        <Stars n={rating} />
      </div>
      <p className="text-neutral-300 mt-2 text-sm">{body}</p>
    </div>
  );
}

function Stars({ n }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < n ? 'text-amber-300' : 'text-neutral-600'}`}>★</span>
      ))}
    </div>
  );
}
