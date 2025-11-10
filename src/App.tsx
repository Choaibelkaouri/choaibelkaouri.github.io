// src/App.tsx
import "./index.css";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Inter, system-ui, sans-serif",
        background: "#050816",
        color: "#f3f4f6",
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        CHOAIB EL KAOURI
      </h1>
      <p style={{ fontSize: "1.1rem", opacity: 0.85 }}>
        Frontend &amp; Backend Web Developer
      </p>
      <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", opacity: 0.7 }}>
        This is a simple test component from <code>App.tsx</code>.
      </p>
    </main>
  );
}

export default App;
