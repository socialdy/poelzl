import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-[white] flex items-center justify-center px-8">
     <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
</div>
      {/* Content */}
      <div className="relative z-10 text-right"> {/* Flexbox für Rechtsbündigkeit */}
        {/* Hauptüberschrift */}
        

        <h1 className="text-8xl sm:text-8xl md:text-9xl font-semibold tracking-wider text-white animate-fade-in">
          Pölzl
        </h1>
        
        {/* Unterüberschrift */}
        <h2 className="sm:text-2xl font-semibold tracking-wider text-white animate-fade-in">
          In Steinform geben
        </h2>

        <h2 className="sm:text-2xl font-semibold tracking-wider text-white animate-fade-in">
          seit 1978
        </h2>

        {/* Button */}
        <div className="mt-8">
          <a href="/#beratung">
            <Button className="bg-[#F7ED6C] uppercase font-semibold text-black hover:bg-[#F7ED6C] pt-3 px-5 shadow-md rounded-3xl animate-fade-in">
              Jetzt Beratung anfordern
            </Button>
          </a>
        </div>
      </div>

      {/* Background image below text */}
     
    </section>
  );
};
