import { GitBranch, FileJson, Rocket } from "lucide-react";

const steps = [
  {
    icon: GitBranch,
    title: "Fork Repository",
    description:
      "Fork repository template pilihan Anda ke akun GitHub masing-masing.",
  },
  {
    icon: FileJson,
    title: "Edit File JSON",
    description:
      "Ubah data pasangan, tanggal acara, dan informasi lainnya melalui file config/wedding.json.",
  },
  {
    icon: Rocket,
    title: "Deploy Otomatis",
    description:
      "Push ke branch main, GitHub Actions akan build dan deploy otomatis ke GitHub Pages.",
  },
];

export default function DocSection() {
  return (
    <section id="panduan" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-montserrat text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            Panduan
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">
            Cara Menggunakan
          </h2>
          <p className="font-poppins text-gray-500 max-w-xl mx-auto">
            Ikuti tiga langkah mudah untuk membuat undangan pernikahan digital Anda sendiri.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-gold-600" />
              </div>
              <div className="font-montserrat text-gold-500 text-sm font-semibold mb-1">
                Langkah {i + 1}
              </div>
              <h3 className="font-playfair text-lg text-charcoal font-bold mb-2">
                {step.title}
              </h3>
              <p className="font-poppins text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
