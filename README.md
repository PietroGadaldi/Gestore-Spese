# Expense Tracker 💰

Un'applicazione web per gestire e tracciare le tue spese quotidiane con grafici interattivi.

## Caratteristiche ✨

- **Gestione Spese**: Aggiungi, visualizza ed elimina le tue spese
- **Grafico Mensile**: Visualizza l'andamento delle spese mese per mese con un grafico a barre interattivo
- **Navigazione Mesi**: Naviga tra i mesi per analizzare le spese precedenti
- **Lista Ordinata**: Le spese più recenti appaiono in cima alla lista
- **Calcolo Totale**: Visualizza il totale delle spese in tempo reale
- **Design Moderno**: Interfaccia elegante con tema scuro

## Tecnologie Utilizzate

- React
- Vite
- Recharts (grafici)
- PocketBase (database)

## Struttura del Progetto

```
src/
├── App.jsx              # Componente principale
├── FormSpesa.jsx        # Form per aggiungere spese
├── ItemSpesa.jsx        # Visualizzazione singola spesa
├── GraficoSpese.jsx     # Grafico mensile
├── index.css            # Stili
└── main.jsx             # Entry point
```

## Funzionamento

**Lato Sinistro:**
- Form per inserire descrizione e importo della spesa
- Totale delle spese
- Lista scrollabile con le spese più recenti in cima

**Lato Destro:**
- Grafico a barre mostra le spese per ogni giorno del mese
- Pulsanti per navigare tra i mesi
- L'asse X si adatta automaticamente ai giorni del mese selezionato
