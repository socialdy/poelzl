/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const ContactForm = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#1E1E1E" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="py-20 bg-white" id="beratung">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 font-semibold mb-4 relative">
            Buchen Sie jetzt Ihren Termin!
          </h2>
          <p className="text-gray-700 mb-7">
            Lassen Sie uns Ihre Traumküche planen! Buchen Sie Ihren persönlichen 30-minütigen Beratungstermin.
          </p>

          {/* Kalender-Anzeige */}
            <Cal
              namespace="30min"
              calLink="kuechenstudiobergheim/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
        </div>
      </div>
    </section>
  );
};