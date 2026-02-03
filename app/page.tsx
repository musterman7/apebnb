export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <div>
        <h1 style={{fontSize: "64px", fontWeight: "800"}}>APEBNB</h1>
        <p style={{color:"#aaa", marginBottom:"24px"}}>
          Ape & launch memes on BNB
        </p>

        <div style={{display:"flex", gap:"16px", justifyContent:"center"}}>
          <a href="/fourmeme" style={btn("#f0b90b","#000")}>
            🚀 Launch on Four.Meme
          </a>
          <a href="/flap" style={btn("#6d5efc","#fff")}>
            🦍 Launch on flap.sh
          </a>
        </div>

        <p style={{fontSize:"12px", color:"#666", marginTop:"24px"}}>
          Trades are executed on official platform contracts.
        </p>
      </div>
    </main>
  );
}

function btn(bg:string,color:string){
  return {
    background:bg,
    color,
    padding:"14px 22px",
    borderRadius:"14px",
    fontWeight:"700",
    textDecoration:"none"
  };
}
