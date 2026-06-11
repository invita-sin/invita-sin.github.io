export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-gold-800 via-gold-900 to-gold-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold-300 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold-400 blur-[120px]" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold-200 font-montserrat text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Wedding Invitation Templates
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-ivory mb-6 leading-tight">
          Undangan Pernikahan
          <br />
          <span className="text-gold-300">Digital & Elegan</span>
        </h1>
        <p className="font-poppins text-ivory/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Pilih template favorit Anda, fork repository, ubah data melalui file JSON,
          dan deploy otomatis ke GitHub Pages — tanpa perlu coding rumit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalog"
            className="font-poppins inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gold-400 text-gold-900 font-semibold hover:bg-gold-300 transition-colors"
          >
            Lihat Template
          </a>
          <a
            href="#panduan"
            className="font-poppins inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gold-400/40 text-gold-200 hover:bg-gold-800/50 transition-colors"
          >
            Cara Penggunaan
          </a>
        </div>
      </div>
    </section>
  );
}
