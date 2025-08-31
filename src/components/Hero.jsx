import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[72vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cVzHR3fQnWrlrLT7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - non blocking for pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent"></div>

      {/* Content overlay */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
          <div className="w-full grid md:grid-cols-2 gap-6 items-end">
            <div className="backdrop-blur-sm bg-neutral-950/40 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 text-xs text-neutral-300 mb-3">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Action</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Adventure</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Single-player</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Neon Odyssey: Echoes of the Circuit</h1>
              <p className="mt-3 text-neutral-300 max-w-xl">
                Dive into a synth-infused metropolis where every street is a level and every light hides a secret. Master fluid combat, solve neon puzzles, and bend gravity to your will.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="inline-flex items-center gap-1 text-amber-300">
                  <Star className="fill-amber-300 text-amber-300" size={16} />
                  <span className="font-medium">4.7</span>
                  <span className="text-neutral-400">/ 5</span>
                </div>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-300">Very Positive (12,384 reviews)</span>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="backdrop-blur-sm bg-neutral-950/40 border border-white/10 rounded-xl p-6 max-w-md w-full">
                <h3 className="text-neutral-200 font-medium">Included Features</h3>
                <ul className="mt-3 text-sm text-neutral-300 space-y-2 list-disc list-inside">
                  <li>High frame-rate mode up to 144 FPS</li>
                  <li>Ultra-wide display support</li>
                  <li>Full controller and keyboard remapping</li>
                  <li>Accessibility presets and colorblind modes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
