import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Johann und Maria",
      role: "Privathaushalt",
      quote: "Unser Badezimmer aus Travertin Classic von Pölzl ist ein absoluter Blickfang! Die Qualität des Natursteins ist herausragend, und die Beratung war erstklassig. Wir sind begeistert von der natürlichen Eleganz und der hochwertigen Verarbeitung.",
    },
    {
      id: 2,
      name: "Stefan",
      role: "Architekt",
      quote: "Für hochwertige Architekturprojekte ist Pölzl meine erste Wahl. Die Kombination aus präziser Verarbeitung und individuellen Lösungen macht jedes Projekt einzigartig. Besonders beeindruckt mich die nachhaltige Produktion mit Photovoltaik-Unterstützung.",
    },
    {
      id: 3,
      name: "Theresa & Markus",
      role: "Eigenheimbesitzer",
      quote: "Unsere Kaminverkleidung aus Pannonia Green gibt unserem Wohnraum eine besondere Atmosphäre. Die natürlichen Strukturen des Steins sind wunderschön und die Verarbeitung von Pölzl einfach perfekt.",
    },
    {
      id: 4,
      name: "Martin",
      role: "Gastronom",
      quote: "In meinem Restaurant setzen wir auf Pölzl Naturstein für unsere Küchenarbeitsflächen. Die Qualität und Langlebigkeit sind herausragend, und das Design unterstreicht das hochwertige Ambiente unseres Betriebs.",
    },
    {
      id: 5,
      name: "Anna",
      role: "Innenarchitektin",
      quote: "Pölzl bietet eine unglaubliche Auswahl an Naturstein- und Keramiklösungen, die perfekt für moderne und zeitlose Designs geeignet sind. Die Präzision der Verarbeitung und die Nachhaltigkeitsstrategie überzeugen mich und meine Kunden gleichermaßen.",
    },
    {
      id: 6,
      name: "Florian",
      role: "Bauunternehmer",
      quote: "Bei unseren Bauprojekten setzen wir auf die hochwertigen Natursteine von Pölzl. Die flexible Fertigung und die hohe Qualität der Materialien erleichtern uns die Arbeit und sorgen für zufriedene Kunden.",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl text-center mb-16 font-semibold">Referenzen</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-[#acacac] shadow-lg p-8 h-full rounded-lg animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic text-gray-900">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Pfeile sichtbar auf Desktop, ausgeblendet auf Mobile */}
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 bg-[#acacac]  text-black rounded-full p-2 transition" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 bg-[#acacac] text-black rounded-full p-2 transition" />
        </Carousel>
      </div>
    </section>
  );
};
