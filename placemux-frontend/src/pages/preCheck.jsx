export default function PreCheck() {
  return (
    <div style={{ padding: 30 }}>
      <h2>System Check</h2>

      <p>✔ Internet Check</p>
      <p>✔ Camera Permission</p>
      <p>✔ Microphone Permission</p>
      <p>✔ Device Ready</p>

      <button>Start Assessment</button>
    </div>
  );
}