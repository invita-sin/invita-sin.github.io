import { ExternalLink, Github, Clock } from "lucide-react";

interface Template {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  demo: string;
  repository: string;
  status: string;
}

export default function TemplateCard({ template }: { template: Template }) {
  const isComingSoon = template.status === "coming-soon";

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] bg-gradient-to-br from-gold-100 to-ivory flex items-center justify-center relative">
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <div className="text-center">
              <Clock className="w-10 h-10 text-gold-300 mx-auto mb-2" />
              <span className="font-poppins text-white text-sm font-medium">
                Coming Soon
              </span>
            </div>
          </div>
        )}
        <div className="text-6xl opacity-20 select-none">
          {template.category === "Elegant" && "✦"}
          {template.category === "Minimalist" && "▣"}
          {template.category === "Floral" && "✿"}
          {template.category === "Modern" && "◈"}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-playfair text-xl text-charcoal font-bold">
            {template.name}
          </h3>
          <span className="shrink-0 font-poppins text-[11px] font-medium px-2.5 py-1 rounded-full bg-gold-100 text-gold-700 uppercase tracking-wider">
            {template.category}
          </span>
        </div>
        <p className="font-poppins text-sm text-gray-500 mb-4 line-clamp-2">
          {template.description}
        </p>
        <div className="flex gap-2">
          <a
            href={isComingSoon ? undefined : template.demo}
            target={isComingSoon ? undefined : "_blank"}
            rel="noopener noreferrer"
            onClick={(e) => isComingSoon && e.preventDefault()}
            className={`flex-1 font-poppins text-sm flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg transition-colors ${
              isComingSoon
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gold-400 text-gold-900 hover:bg-gold-300"
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={isComingSoon ? undefined : template.repository}
            target={isComingSoon ? undefined : "_blank"}
            rel="noopener noreferrer"
            onClick={(e) => isComingSoon && e.preventDefault()}
            className={`font-poppins text-sm flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border transition-colors ${
              isComingSoon
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Github className="w-4 h-4" />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}
