import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function GraficoSpese({ data, mese, anno, setMese, setAnno }) {
  const nomiMesi = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  // Calcolo giorni nel mese
  const giorniNelMese = new Date(anno, mese + 1, 0).getDate();

  // Gestione pulsante PRECEDENTE
  const mesePrecedente = () => {
    if (mese === 0) {
      setAnno(anno - 1);
      setMese(11);
    } else {
      setMese(mese - 1);
    }
  };

  // Gestione pulsante SUCCESSIVO
  const meseSuccessivo = () => {
    if (mese === 11) {
      setAnno(anno + 1);
      setMese(0);
    } else {
      setMese(mese + 1);
    }
  };

  return (
    <div style={{
      padding: "20px",
      background: "rgba(255,255,255,0.04)",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.08)"
    }}>

      <h2 style={{ marginTop: 0 }}>Spese del mese</h2>

      {/* CONTROLLI MESE */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "18px"
      }}>

        <button
          onClick={mesePrecedente}
          className="button"
          style={{ padding: "8px 12px" }}
        >
          ←
        </button>

        <div style={{ fontSize: "18px", fontWeight: "600" }}>
          {nomiMesi[mese]} {anno}
        </div>

        <button
          onClick={meseSuccessivo}
          className="button"
          style={{ padding: "8px 12px" }}
        >
          →
        </button>
      </div>

      {/* GRAFICO */}
      <div style={{ width: "100%", height: 380, minWidth: 0 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="giorno" 
              stroke="white"
              type="number"
              domain={[1, giorniNelMese]}
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis stroke="white" />
            <Tooltip
              contentStyle={{
                background: "#1e293b",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px"
              }}
              labelStyle={{ color: "white" }}
            />
            <Bar dataKey="totale" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GraficoSpese;
