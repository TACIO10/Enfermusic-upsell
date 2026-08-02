const plans = [
  {
    name: "Acesso Completo",
    eyebrow: "CONDIÇÃO ESPECIAL",
    description: "Todo o Método da Memória Musical e os três bônus reunidos em um único acesso.",
    price: "67",
    suffix: "pagamento único",
    note: "Sem mensalidade e sem cobranças recorrentes.",
    benefits: ["Método da Memória Musical®", "Checklist dos assuntos mais cobrados", "Banco de questões", "Comunidade exclusiva"],
    href: "https://lastlink.com/p/CF036AAF0/",
    cta: "QUERO ACESSO COMPLETO POR R$ 67",
    featured: true,
  },
];

const packageItems = [
  ["♪", "Método da Memória Musical®", "R$ 197"],
  ["✓", "Checklist", "R$ 27"],
  ["Q", "Banco de Questões", "R$ 37"],
  ["+", "Comunidade Exclusiva", "R$ 37"],
];

export default function Home() {
  return (
    <main className="page">
      <section className="vsl-shell" aria-labelledby="page-title">
        <h1 id="page-title"><span>ESPERE! SUA COMPRA AINDA NÃO</span><span>ESTÁ COMPLETA...</span></h1>
        <div
          className="video-frame"
          aria-label="Vídeo da oferta"
          dangerouslySetInnerHTML={{ __html: '<vturb-smartplayer id="vid-6a6dfdfda5d5ced98d475173" style="display:block;margin:0 auto;width:100%"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:56.25% 0 0;z-index:0;background-color:black"></div></vturb-smartplayer>' }}
        />
        <script dangerouslySetInnerHTML={{ __html: 'var s=document.createElement("script");s.src="https://scripts.converteai.net/f7f63c56-fc11-4d6b-889e-71d2f24f657c/players/6a6dfdfda5d5ced98d475173/v4/player.js",s.async=true,document.head.appendChild(s);' }} />

        <div className="offers-heading delayed-offer">
          <span>OFERTA ESPECIAL</span>
          <h2>Leve o método completo com todos os bônus.</h2>
          <p>Veja tudo o que está incluído no seu acesso.</p>
        </div>

        <section className="value-stack delayed-offer" aria-label="Valor total do pacote">
          <div className="value-stack-heading">
            <span>VALOR TOTAL DO PACOTE</span>
            <strong>Mais preparação em uma única oferta</strong>
          </div>
          <div className="value-items">
            {packageItems.map(([icon, item, value]) => (
              <div className="value-item" key={item}>
                <span className="value-icon">{icon}</span>
                <strong>{item}</strong>
                <span className="value-price">{value}</span>
              </div>
            ))}
          </div>
          <div className="value-total">
            <span>De <s>R$ 298</s></span>
            <p>Mas hoje você não paga R$ 298.</p>
            <p>Nem R$ 197.</p>
            <strong>Seu acesso completo sai por apenas:</strong>
          </div>
        </section>

        <div className="offer-stack delayed-offer">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? "featured" : "lifetime"}`} key={plan.name}>
              <div className="card-copy">
                <span className="plan-eyebrow">{plan.eyebrow}</span>
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <ul>{plan.benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}</ul>
              </div>
              <div className="card-offer">
                <div className="price"><small>R$</small><strong>{plan.price}</strong></div>
                <span className="price-suffix">{plan.suffix}</span>
                <p className="price-note">{plan.note}</p>
                <a className="buy-button" href={plan.href}>{plan.cta}<span>→</span></a>
                <small className="secure">🔒 Compra segura · Acesso imediato</small>
              </div>
            </article>
          ))}
        </div>

        <button className="deny-button delayed-offer" id="denyButton4deaf72" type="button">Não, obrigado. Quero continuar sem esta oferta.</button>
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('player:ready', function(event) {
            var detail = event.detail || {};
            var config = detail.config || {};
            var player = detail.player || document.querySelector('vturb-smartplayer');
            var playerId = config.id || (player && player.id ? player.id.replace(/^vid-/, '') : '');
            if (playerId !== '6a6dfdfda5d5ced98d475173' || !player || typeof player.displayHiddenElements !== 'function') return;
            player.displayHiddenElements(222, ['.delayed-offer'], { persist: false });
          });
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
