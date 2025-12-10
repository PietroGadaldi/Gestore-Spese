import { useState } from "react";

function FormSpesa({ onAdd }) {
  const [descrizione, setDescrizione] = useState("");
  const [importo, setImporto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descrizione || !importo) return;

    onAdd({
      descrizione,
      importo: parseFloat(importo),
      data: new Date().toISOString(),
    });

    setDescrizione("");
    setImporto("");
  };

  return (
    <form className="form-spesa" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrizione della spesa"
        value={descrizione}
        onChange={(e) => setDescrizione(e.target.value)}
      />

      <input
        type="number"
        placeholder="Importo"
        step="0.01"
        value={importo}
        onChange={(e) => setImporto(e.target.value)}
      />

      <button className="button" type="submit">
        Aggiungi
      </button>
    </form>
  );
}

export default FormSpesa;
