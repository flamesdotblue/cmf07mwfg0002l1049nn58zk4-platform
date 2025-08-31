export default function MediaStrip() {
  const images = [
    'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <h3 className="text-neutral-200 font-medium mb-3">Screenshots</h3>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {images.map((src, idx) => (
            <div key={idx} className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] snap-start">
              <img
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="aspect-video object-cover rounded-lg border border-white/10 hover:border-fuchsia-500/40 transition-colors"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
