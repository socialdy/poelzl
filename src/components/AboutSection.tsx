import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "<strong>Tradition und Hightech</strong>: Pölzl kombiniert jahrzehntelange Erfahrung mit modernster Technik, um präzise und hochwertige Ergebnisse zu liefern.",
    "<strong>Flexibilität</strong>: Durch eigene Produktion und Eigenimporte kann Pölzl diverse Projekte schnell und maßgeschneidert umsetzen.",
    "<strong>Nachhaltigkeit</strong>: Mit der Installation einer Photovoltaikanlage werden seit 2022 70% des benötigten Stroms selbst erzeugt.",
    "<strong>Handwerkliche Perfektion</strong>: Pölzl garantiert erstklassige Qualität mit persönlicher Beratung und Betreuung in allen Bereichen, von der Planung bis zur Montage.",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="shadow-xl background overflow-hidden">
            <img src="public/images/poelzl_waehlen.jpg"
             
            ></img>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-5xl text-black mb-6 inline-block font-semibold">Warum Pölzl wählen?</h2>
            <p className="text-gray mb-8 text-2xl font-semibold">
              Pölz verbindet jahrzehntelange Erfahrung mit innovativer Technik, um Ihnen maßgeschneiderte Lösungen aus Naturstein und Keramik zu bieten – mit höchster Qualität und Nachhaltigkeit.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center font-semibold gap-3 text-lg text-gray">
                  <Check className="text-black w-11" />
                  <span dangerouslySetInnerHTML={{ __html: benefit }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
