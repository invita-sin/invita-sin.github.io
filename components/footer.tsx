import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-charcoal">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-playfair text-gold-300 text-lg mb-2">
          Wedding Template Hub
        </p>
        <p className="font-poppins text-gray-400 text-sm flex items-center justify-center gap-1">
          Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose fill-rose" /> untuk
          momen spesial Anda
        </p>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="font-poppins text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Wedding Template Hub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
