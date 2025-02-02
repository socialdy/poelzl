export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white" id="ueber-poelzl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">

          <img 
            src="/images/poelzl_logo.svg" 
            alt="Pölzl Logo" 
            className="h-12 w-auto"
          />
          
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray text-2xl font-semibold leading-relaxed mb-6">
          Die Pölzl GmbH aus Stainz ist ein traditionsreicher Betrieb, der seit 1987 Naturstein und Keramik mit modernster Technik verarbeitet. Mit jahrzehntelanger Erfahrung und eigener Produktion setzt Pölzl anspruchsvolle Projekte um und garantiert höchste Qualität sowie persönliche Betreuung in allen Phasen. Nachhaltigkeit wird durch die Nutzung einer Photovoltaikanlage unterstützt.
          </p>
        </div>
      </div>
    </section>
  );
};
