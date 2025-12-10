function ItemSpesa({ spesa, onDelete }) {
  const dateStr = new Date(spesa.data).toLocaleString();

  return (
    <div className="item-spesa">
      <div>
        <div className="descrizione">{spesa.descrizione}</div>
        <div className="meta">{dateStr}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div className="item-amount">
          {Number(spesa.importo).toFixed(2)} €
        </div>

        <button className="button-danger" onClick={() => onDelete(spesa.id)}>
          Elimina
        </button>
      </div>
    </div>
  );
}

export default ItemSpesa;
