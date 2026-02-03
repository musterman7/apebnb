"use client";

export default function Home() {
  return (
    <main style={s.wrap}>
      <div style={s.panel}>
        <div style={s.logo}>APEBNB</div>

        <h1 style={s.h1}>Create a Meme Token on BNB</h1>
        <p style={s.p}>Deploy and trade meme tokens instantly.</p>

        <div style={s.actions}>
          <a href="/create" style={s.primary}>Create Token</a>
          <a href="/token/0x123" style={s.secondary}>Browse Tokens</a>
        </div>
      </div>

      <div style={s.list}>
        <div style={s.row}><span>APE</span><span>new</span></div>
        <div style={s.row}><span>DOGE2</span><span>trading</span></div>
        <div style={s.row}><span>BNBPEPE</span><span>trading</span></div>
      </div>
    </main>
  );
}

const s = {
  wrap:{minHeight:"100vh",background:"#0b0b0b",color:"#fff",padding:24},
  panel:{maxWidth:560,margin:"0 auto",textAlign:"center"},
  logo:{fontWeight:800,letterSpacing:2,opacity:.9,marginBottom:24},
  h1:{fontSize:28,marginBottom:8},
  p:{opacity:.7,marginBottom:20},
  actions:{display:"flex",gap:12,justifyContent:"center",marginBottom:28},
  primary:{background:"#fff",color:"#000",padding:"10px 14px",borderRadius:8,textDecoration:"none",fontWeight:700},
  secondary:{border:"1px solid #333",color:"#fff",padding:"10px 14px",borderRadius:8,textDecoration:"none"},
  list:{maxWidth:560,margin:"20px auto 0",borderTop:"1px solid #222"},
  row:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #222",opacity:.85}
};
