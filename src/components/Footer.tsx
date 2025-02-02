import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <a href="https://kuechenstudio-bergheim.at" className="block">
              <img
                src="/images/me_logo_black.png" // Ersetze dies durch den tatsächlichen Pfad zu deinem Logo
                alt="Küchenstudio Bergheim Logo"
                className="h-16 mb-3" // Passe die Größe des Logos an
              />
            </a>
            <p className="text-gray-600 text-base font-semibold uppercase">
              Hochwertige Einbauküchen von Beeck, innovative Küchengeräte von Miele sowie exklusive Arbeitsplatten und stilvolle Ausstattung – alles für Ihre Traumküche.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4 text-[#ACACAC] uppercase">QUICKLINKS</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://kuechenstudio-bergheim.at/kuechen" className="text-black text-base font-semibold uppercase">
                  Küchen
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/abverkauf" className="text-black text-base font-semibold uppercase">
                  Abverkauf
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/ausstattung" className="text-black text-base font-semibold uppercase">
                  Ausstattung
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/bad" className="text-black text-base font-semibold uppercase">
                  Bad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4 text-[#ACACAC] uppercase">KONTAKT</h4>
            <ul className="space-y-3 text-black text-base font-semibold uppercase">
              <li>Lamprechtshausener Bundesstraße 1</li>
              <li>5101 Bergheim</li>
              <li><a href="tel:+43 662 452535" className="text-black">+43 662 452535</a></li>
              <li>
                <a href="mailto:me@kuechenstudio-bergheim.at" className="text-black">
                  me@kuechenstudio-bergheim.at
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at" className="text-black">
                  www.kuechenstudio-bergheim.at
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4 text-[#ACACAC] uppercase">ÖFFNUNGSZEITEN</h4>
            <ul className="space-y-3 text-black text-base font-semibold uppercase">
              <li>Mo – Fr: 10:00 – 17:00 Uhr</li>
              <li>Sa – So: Geschlossen</li>
            </ul>
          </div>
        </div>

        {/* Rechtliche Links */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-center text-black">
          <ul className="space-y-3">
            <li>
              <a href="https://kuechenstudio-bergheim.at/impressum" className="text-black text-base font-semibold uppercase">
                Impressum
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/datenschutz" className="text-black text-base font-semibold uppercase">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/agb" className="text-black text-base font-semibold uppercase">
                AGB
              </a>
            </li>
          </ul>
          <p className="mt-6 text-base font-semibold uppercase">© 2025 Küchenstudio Bergheim. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-2 uppercase font-semibold">Developed by <a className="font-semibold" href="https://socialdynamics.agency">Social Dynamics</a></p>
        </div>
      </div>
    </footer>
  );
};
