export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>APEBNB</h1>
        <p style={styles.subtitle}>Ape & launch memes on BNB</p>

        <div style={styles.buttons}>
          <a href="/fourmeme" style={{ ...styles.button, ...styles.bnb }}>
            🚀 Launch on Four.Meme
          </a>
          <a href="/flap" style={{ ...styles.button, ...styles.flap }}>
            🦍 Launch on flap.sh
          </a>
        </div>

        <p style={styles.note}>
          Trades are executed on official platform contracts.
        </p>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  box: {
    textAlign: "center",
  },
  title: {
    fontSize: "64px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    padding: "14px 24px",
    borderRadius: "14px",
    fontWeight: "700",
    textDecoration: "none",
    transition: "transform 0.15s ease",
  },
  bnb: {
    background: "#f0b90b",
    color: "#000",
  },
  flap: {
    background: "#6d5efc",
    color: "#fff",
  },
  note: {
    marginTop: "30px",
    fontSize: "12px",
    color: "#666",
  },
};
