import { useState } from 'react';

export default function App() {
  const [breedte, setBreedte] = useState(1000);
  const [hoogte, setHoogte] = useState(1500);
  const [type, setType] = useState('vast');
  const [draairichting, setDraairichting] = useState('links');
  const [toonOnderdorpel, setToonOnderdorpel] = useState(true);

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Kozijn Tool</h1>

      <label>Breedte (mm):</label>
      <input type="number" value={breedte} onChange={(e) => setBreedte(Number(e.target.value))} /><br /><br />

      <label>Hoogte (mm):</label>
      <input type="number" value={hoogte} onChange={(e) => setHoogte(Number(e.target.value))} /><br /><br />

      <label>Type kozijn:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="vast">Vast raam</option>
        <option value="draairaam">Draairaam</option>
        <option value="deur">Deur</option>
        <option value="pui">Pui</option>
      </select><br /><br />

      {(type === 'draairaam' || type === 'deur') && (
        <>
          <label>Draairichting:</label>
          <select value={draairichting} onChange={(e) => setDraairichting(e.target.value)}>
            <option value="links">Links</option>
            <option value="rechts">Rechts</option>
          </select><br /><br />
        </>
      )}

      <label>
        <input
          type="checkbox"
          checked={toonOnderdorpel}
          onChange={() => setToonOnderdorpel(!toonOnderdorpel)}
        />
        Onderdorpel tonen
      </label><br /><br />

      <hr />
      <h3>Werktekening:</h3>
      <p>Maat: {breedte} x {hoogte} mm</p>
      <p>Type: {type}</p>
      {(type === 'draairaam' || type === 'deur') && <p>Draairichting: {draairichting}</p>}
      <p>Stijlen: 67 x 114 mm (AA)</p>
      <p>Bovendorpel: 67 x 114 mm (AA)</p>
      {toonOnderdorpel && <p>Onderdorpel: 90 x 114 mm (CC)</p>}
      <p>Tussenstijl (optioneel): 67 x 114 mm (BB)</p>
    </div>
  );
}