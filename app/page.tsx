const plans = [
  {
    name: "Plano Mensal",
    eyebrow: "COMECE AGORA",
    description: "Ideal para começar com o menor investimento e experimentar todo o conteúdo.",
    price: "5",
    suffix: "no primeiro mês",
    note: "Depois, a renovação segue pelo valor mensal da oferta.",
    benefits: ["Acesso imediato ao conteúdo", "Cancele quando quiser", "Atualizações durante a assinatura"],
    href: "https://lastlink.com/p/C84A6065C?cp=PrimeiroMes",
    cta: "QUERO COMEÇAR POR R$ 5",
    featured: true,
  },
  {
    name: "Acesso Vitalício",
    eyebrow: "MELHOR CUSTO-BENEFÍCIO",
    description: "Faça um único pagamento e mantenha seu acesso para sempre, sem mensalidades.",
    price: "197",
    suffix: "pagamento único",
    note: "Sem renovação e sem cobranças recorrentes.",
    benefits: ["Acesso vitalício ao conteúdo", "Pagamento único", "Todas as futuras atualizações"],
    href: "https://lastlink.com/p/CF036AAF0/",
    cta: "QUERO ACESSO VITALÍCIO",
    featured: false,
  },
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
          <span>ESCOLHA COMO VOCÊ QUER CONTINUAR</span>
          <h2>Qual opção combina mais com você?</h2>
          <p>As duas opções liberam o acesso imediatamente após a confirmação do pagamento.</p>
        </div>

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
