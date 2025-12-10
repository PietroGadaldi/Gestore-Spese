import { useEffect, useState } from "react";
import FormSpesa from "./FormSpesa";
import ItemSpesa from "./ItemSpesa";
import GraficoSpese from "./GraficoSpese";

function App() {
  const [spese, setSpese] = useState([]);
  const [meseSelezionato, setMeseSelezionato] = useState(new Date().getMonth());
  const [annoSelezionato, setAnnoSelezionato] = useState(new Date().getFullYear());

  const URL = "http://127.0.0.1:8090/api/collections/spese/records";

  // --- READ ---
  const fetchSpese = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setSpese(data.items);
    } catch (err) {
      console.error("Errore nel recupero spese:", err);
    }
  };

  useEffect(() => {
    fetchSpese();
  }, []);

  // --- CREATE ---
  const aggiungiSpesa = async (nuovaSpesa) => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuovaSpesa),
      });

      const data = await res.json();
      setSpese((prev) => [...prev, data]);
    } catch (err) {
      console.error("Errore durante la creazione:", err);
    }
  };

  // --- DELETE ---
  const eliminaSpesa = async (id) => {
    try {
      await fetch(`${URL}/${id}`, { method: "DELETE" });
      setSpese((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Errore nell'eliminazione:", err);
    }
  };

  // --- TOTALE GENERALE ---
  const totale = spese.reduce((sum, s) => sum + Number(s.importo), 0);

  // -------------------------------------------------------------
  //  GRAFICO
  // -------------------------------------------------------------

  const giorniNelMese = new Date(annoSelezionato, meseSelezionato + 1, 0).getDate();

  const giorni = Array.from({ length: giorniNelMese }, (_, i) => ({
    giorno: i + 1,
    totale: 0,
  }));

  const speseFiltrate = spese.filter((s) => {
    const d = new Date(s.data);
    return d.getMonth() === meseSelezionato && d.getFullYear() === annoSelezionato;
  });

  speseFiltrate.forEach((s) => {
    const d = new Date(s.data);
    const giorno = d.getDate();
    giorni[giorno - 1].totale += Number(s.importo);
  });

  return (
    <div className="app-wrapper">
      {/* RIQUADRO 1 — LISTA SPESE */}
      <div className="app-container">
        <div className="app-header-inner">
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Expense Tracker</h2>
            <div className="sub">Gestisci le tue spese</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div className="sub">Totale</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              {totale.toFixed(2)} €
            </div>
          </div>
        </div>

        <FormSpesa onAdd={aggiungiSpesa} />

          <h2 style={{ marginBottom: 16, fontSize: 18, marginTop: 20 }}>Lista Spese</h2>

          <div className="spese-list-container">
            <div className="spese-list">
              {[...spese].reverse().map((spesa) => (
                <ItemSpesa
                  key={spesa.id}
                  spesa={spesa}
                  onDelete={eliminaSpesa}
                />
              ))}
            </div>
          </div>
        </div>

      {/* RIQUADRO 2 — GRAFICO (separato) */}
      <div className="grafico-container">
        <h2 style={{ marginBottom: 12, marginTop: 0, fontSize: 24, fontWeight: 700 }}>Andamento mensile</h2>

        <GraficoSpese
          data={giorni}
          mese={meseSelezionato}
          anno={annoSelezionato}
          setMese={setMeseSelezionato}
          setAnno={setAnnoSelezionato}
        />
      </div>
    </div>
  );
}

export default App;
