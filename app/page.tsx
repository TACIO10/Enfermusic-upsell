export default function Home() {
  return (
    <main className="page">
      <section className="vsl-shell" aria-labelledby="page-title">
        <h1 id="page-title">
          <span>ESPERE! SUA COMPRA AINDA NÃO</span>
          <span>ESTÁ COMPLETA...</span>
        </h1>

        <div className="video-frame" aria-label="Espaço reservado para o vídeo">
          <div className="video-placeholder" />
          <div className="video-progress" />
        </div>
      </section>
    </main>
  );
}
