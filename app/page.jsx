export default function Home() {
  return (
    <main style={s.wrap}>
      <h1 style={s.title}>APEBNB</h1>
      <p style={s.sub}>Ape & launch memes on BNB</p>

      <div style={s.row}>
        <a href="/fourmeme" style={{ ...s.btn, background: "#f0b90b", color: "#000" }}>
          🚀 Launch on Four.Meme
        </a>
        <a href="/flap" style={{ ...s.btn, background: "#6d5efc", color: "#fff" }}>
          🦍 Launch on flap.sh
        </a>
      </div>
    </main>
  );
}

const s = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: { fontSize: 64, fontWeight: 800 },
  sub: { color: "#aaa", marginBottom: 32 },
  row: { display: "flex", gap: 16 },
  btn: {
    padding: "14px 24px",
    borderRadius: 14,
    fontWeight: 700,
    textDecoration: "none",
  },
};
