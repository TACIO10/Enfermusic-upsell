const plans = [
  {
    name: "📅 Plano Mensal",
    eyebrow: "FLEXIBILIDADE TOTAL",
    description: "Acesso completo ao App de Simulados com cobrança mensal.",
    price: "47",
    suffix: "por mês",
    note: "Assine mês a mês e cancele quando quiser.",
    benefits: ["Acesso completo ao App de Simulados", "Cobrança mensal", "Cancele quando quiser"],
    href: "https://lastlink.com/p/CF626C39E/checkout-payment/",
    cta: "QUERO O PLANO MENSAL",
    style: "monthly",
  },
  {
    name: "🔥 Plano Semestral",
    eyebrow: "ECONOMIA INTELIGENTE",
    description: "Seis meses completos de acesso por um valor muito menor que o plano mensal.",
    price: "147",
    suffix: "por 6 meses",
    note: "Equivale a apenas R$ 24,50 por mês.",
    benefits: ["Acesso completo ao App de Simulados", "Economize R$ 135", "Seis meses de preparação"],
    href: "https://lastlink.com/p/C367A5A78/checkout-payment/",
    cta: "QUERO O PLANO SEMESTRAL",
    style: "semestral",
  },
  {
    name: "👑 Plano Anual",
    eyebrow: "MELHOR CUSTO-BENEFÍCIO",
    description: "O plano escolhido por quem pretende estudar até a aprovação.",
    price: "197",
    suffix: "por 12 meses",
    note: "Equivale a apenas R$ 16,42 por mês.",
    benefits: ["Acesso completo ao App de Simulados", "Economize R$ 367", "Um ano inteiro de preparação"],
    href: "https://lastlink.com/p/CE98B3216/checkout-payment/",
    cta: "QUERO O PLANO ANUAL",
    style: "annual featured",
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

        <div className="offers-heading">
          <span>ESCOLHA COMO VOCÊ QUER CONTINUAR</span>
          <h2>Qual opção combina mais com você?</h2>
          <p>Todos os planos liberam o acesso imediatamente após a confirmação do pagamento.</p>
        </div>

        <div className="offer-stack">
          {plans.map((plan) => (
            <article className={`price-card ${plan.style}`} key={plan.name}>
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

        <button className="deny-button" id="denyButton4deaf72" type="button">Não, obrigado. Quero continuar sem esta oferta.</button>
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
