export default function Card({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 16,
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}