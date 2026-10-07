export default function Home() {
  return (
    <main className="page">
      <section className="vsl-shell" aria-labelledby="page-title">
        <div className="purchase-warning" role="alert"><strong>Importante:</strong> NÃO feche esta página nem clique no botão voltar. Isso pode gerar problemas com o seu pedido.</div>

        <header className="order-status">
          <span aria-hidden="true">⚠️</span>
          <div>
            <h1 id="page-title">Seu pedido ainda não foi concluído!</h1>
            <p>Veja a mensagem abaixo</p>
          </div>
        </header>

        <section className="video-coming" aria-label="Espaço reservado para o vídeo">
          <span className="play-symbol" aria-hidden="true">▶</span>
          <h2>Bem-vindo, novo membro!</h2>
          <p>Clique no play e assista</p>
          <small>O vídeo será adicionado em breve.</small>
        </section>

        <p className="watch-instruction"><strong>Faça isso agora:</strong> assista à mensagem acima sobre o Memória Musical. Sua condição especial aparece logo abaixo.</p>

        <section className="payt-offer" aria-labelledby="offer-title">
          <h2 id="offer-title">Memória Musical para sempre</h2>
          <p className="offer-description">Garanta seu acesso vitalício e continue estudando no seu ritmo, sem mensalidades ou renovações.</p>
          <div className="offer-price" aria-label="De 597 reais por 297 reais à vista ou 12 parcelas de 30 reais e 72 centavos">
            <span className="old-price">De R$ 597</span>
            <div className="current-price"><span>por R$</span><strong>297</strong><small>à vista</small></div>
            <p>ou 12x de <strong>R$ 30,72</strong></p>
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
