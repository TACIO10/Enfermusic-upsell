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

        <section className="payt-offer delayed-offer" aria-labelledby="offer-title">
          <h2 id="offer-title">ENTENDA COM AS AULAS.<br />MEMORIZE COM AS MÚSICAS.</h2>
          <p className="offer-description">Adicione o Memória Musical Explica à sua preparação e tenha aulas explicativas para compreender os principais temas de concursos de enfermagem.</p>
          <div className="offer-price" aria-label="De 297 reais por 12 parcelas de 10 reais e 3 centavos, ou 97 reais à vista">
            <span className="old-price">De R$ 297</span>
            <div className="current-price"><span>12x de R$</span><strong>10,03</strong></div>
            <p>ou <strong>R$ 97</strong> à vista</p>
          </div>
          <ul className="offer-benefits">
            <li><span>✓</span>Aulas explicativas dos principais temas de enfermagem</li>
            <li><span>✓</span>Entenda os conceitos antes de memorizar</li>
            <li><span>✓</span>Estude com explicações organizadas por assunto</li>
            <li><span>✓</span>Combine as aulas com as músicas para reforçar o aprendizado</li>
            <li><span>✓</span>Revise os conteúdos no seu próprio ritmo</li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: '<a href="#" payt_action="oneclick_buy" data-object="R6VDOP-45E5E8" class="payt-buy-button">🟢 SIM! QUERO ADICIONAR AS AULAS</a><select payt_element="installment" data-object="R6VDOP-45E5E8" style="display:none"></select>' }} />
          <small className="secure-note">🔒 Oferta exclusiva após a compra • Confirmação rápida</small>
        </section>

        <button className="deny-button delayed-offer" id="denyButton4deaf72" type="button">Não, obrigado. Quero continuar sem esta oferta.</button>
        <script type="text/javascript" src="https://checkout.payt.com.br/multiple-oneclickbuyscript/LXMEOB.js" />
        <script dangerouslySetInnerHTML={{ __html: `
          setTimeout(function() {
            document.querySelectorAll('.delayed-offer').forEach(function(element) {
              element.classList.remove('delayed-offer');
            });
          }, 259000);
        ` }} />
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
