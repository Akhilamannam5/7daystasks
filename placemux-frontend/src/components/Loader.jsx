export default function Loader() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <div
        style={{
          width: 30,
          height: 30,
          border: "3px solid #ddd",
          borderTop: "3px solid #333",
          borderRadius: "50%",
          margin: "auto",
          animation: "spin 1s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}