import { useState } from "react";
import QrReader from "react-qr-reader";

function App() {
  const [scanResult, setScanResult] = useState();
  const [scanError, setScanError] = useState();

  return (
    <div style={{ width: 300 }}>
      <QrReader
        showViewFinder
        delay={100}
        resolution={500}
        onError={(err) => setScanError(...err, err)}
        onScan={(data) => (data ? setScanResult(data) : null)}
      />
      {scanResult && <h1>{scanResult}</h1>}
      {scanError && <h2>{scanResult}</h2>}
    </div>
  );
}

export default App;
