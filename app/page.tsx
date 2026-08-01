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

        <div className="upsell-actions">
          <div
            className="button-default button-accept w-full"
            style={{ padding: "17px 32px", lineHeight: "22px", borderRadius: "12px", fontWeight: 700, backgroundColor: "rgb(52, 226, 60)", color: "rgb(0, 0, 0)" }}
            id="llupsell-C84A6065C-1"
          >
            Quero comprar agora!
          </div>
          <div
            className="button-default button-deny w-full"
            style={{ textDecoration: "underline", lineHeight: "22px", fontSize: "16px", fontWeight: 700, color: "rgb(0, 0, 0)" }}
            id="denyButton4deaf72"
          >
            Não, Obrigado
          </div>
        </div>

        <script src="https://cdn.lastlink.com/upsell.min.js" />
        <script dangerouslySetInnerHTML={{ __html: `
          var upsellRedirect = "https://lastlink.com/app/member/dashboardV2";
          function setupDenyButtons() {
            document.querySelectorAll('[id^="denyButton"]').forEach(function(button) {
              button.onclick = function() {
                const currentUrl = new URL(window.location.href);
                const newUrl = new URL("https://lastlink.com/app/member/dashboardV2");
                currentUrl.searchParams.forEach(function(value, key) {
                  newUrl.searchParams.append(key, value);
                });
                window.location.href = newUrl.toString();
              };
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupDenyButtons);
          } else {
            setupDenyButtons();
          }
        ` }} />
      </section>
    </main>
  );
}
