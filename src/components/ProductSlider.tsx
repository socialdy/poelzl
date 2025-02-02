import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Inselblock Super White Calacatta",
    image: "/images/inselblock-super-white-calacatta.png", // Ersetze dies mit dem echten Bild
    description: "Standort: Graz",
  },
  {
    id: 2,
    name: "Außenanlage Luserna Gneis",
    image: "/images/aussenanlage-luserna-gneis.png", // Ersetze dies mit dem echten Bild
    description: "Standort: Leibnitz",
  },
  {
    id: 3,
    name: "Kamin und Küche Pannonia Green",
    image: "/images/kamin-kueche-pannonia-green.jpg", // Ersetze dies mit dem echten Bild
    description: "Standort: Gamlitz",
  },
  {
    id: 4,
    name: "Badezimmer Travertin Classic",
    image: "/images/badezimmer-travertin.jpg", // Ersetze dies mit dem echten Bild
    description: "Standort: Gamlitz",
  },
  {
    id: 5,
    name: "Badezimmer Limestone Classic",
    image: "/images/badezimmer-limestone.jpg", // Ersetze dies mit dem echten Bild
    description: "Standort: Graz",
  },
  {
    id: 6,
    name: "Küche Verde Salvan",
    image: "/images/kueche-verde-salvan.jpg", // Ersetze dies mit dem echten Bild
    description: "Standort: Graz",
  },

];



export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg[##f5f5f5]" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-semibold text-center mb-12">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="text-2xl font-semibold md:text-2xl mb-2">{product.name}</h3>
                      <p className="text-gray text-2xl font-semibold md:text-2xl mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};