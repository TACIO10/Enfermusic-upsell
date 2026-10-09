export default function Home() {
  return (
    <main className="page">
      <section className="vsl-shell" aria-labelledby="page-title">
        <div className="purchase-warning" role="alert"><strong>Importante:</strong> NÃO feche esta página nem clique no botão voltar. Isso pode gerar problemas com o seu pedido.</div>

        <header className="order-status">
          <div>
            <h1 id="page-title">Seu pedido ainda não foi concluído!</h1>
            <p>Veja a mensagem abaixo</p>
          </div>
        </header>

        <div
          className="video-frame"
          aria-label="Vídeo com mensagem importante"
          dangerouslySetInnerHTML={{ __html: '<vturb-smartplayer id="vid-6ac82242b7192639646f535d" style="display:block;margin:0 auto;width:100%"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:66.74907292954263% 0 0;z-index:0;background-color:black"></div></vturb-smartplayer>' }}
        />
        <script dangerouslySetInnerHTML={{ __html: 'var s=document.createElement("script");s.src="https://scripts.converteai.net/f7f63c56-fc11-4d6b-889e-71d2f24f657c/players/6ac82242b7192639646f535d/v4/player.js",s.async=true,document.head.appendChild(s);' }} />

        <p className="watch-instruction"><strong>Faça isso agora:</strong> assista à mensagem acima sobre o Memória Musical. Sua condição especial aparece logo abaixo.</p>

        <section className="payt-offer" aria-labelledby="offer-title">
          <h2 id="offer-title">Memória Musical para sempre</h2>
          <p className="offer-description">Garanta seu acesso vitalício e continue estudando no seu ritmo, sem mensalidades ou renovações.</p>
          <div className="offer-price" aria-label="De 297 reais por 97 reais à vista">
            <span className="old-price">De R$ 297</span>
            <div className="current-price"><span>por R$</span><strong>97</strong><small>à vista</small></div>
          </div>
          <ul className="offer-benefits">
            <li><span>✓</span>Acesso vitalício ao aplicativo</li>
            <li><span>✓</span>Estude quando e onde quiser</li>
            <li><span>✓</span>Sem novas mensalidades</li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: '<a href="#" payt_action="oneclick_buy" data-object="R6VDOP-45E5E8" class="payt-buy-button">ADQUIRIR AGORA</a><select payt_element="installment" data-object="R6VDOP-45E5E8" style="display:none"></select>' }} />
          <small className="secure-note">🔒 Compra segura · Liberação imediata</small>
        </section>

        <button className="deny-button" id="denyButton4deaf72" type="button">Não, obrigado. Quero continuar sem esta oferta.</button>
        <script type="text/javascript" src="https://checkout.payt.com.br/multiple-oneclickbuyscript/LXMEOB.js" />
        <script dangerouslySetInnerHTML={{ __html: `
          function setupDenyButtons() {
            document.querySelectorAll('[id^="denyButton"]').forEach(function(button) {
              button.onclick = function() {
                const currentUrl = new URL(window.location.href);
                const newUrl = new URL("https://lastlink.com/app/member/dashboardV2");
                currentUrl.searchParams.forEach(function(value, key) { newUrl.searchParams.append(key, value); });
                window.location.href = newUrl.toString();
              };
            });
          }
          if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupDenyButtons); else setupDenyButtons();
        ` }} />
      </section>
    </main>
  );
}
