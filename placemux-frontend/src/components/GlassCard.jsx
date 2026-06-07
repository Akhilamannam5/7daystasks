export default function GlassCard({ children }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}