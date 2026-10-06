const plans = [
  {
    name: "📅 Plano Mensal",
    eyebrow: "FLEXIBILIDADE TOTAL",
    description: "Acesso completo ao App de Simulados com cobrança mensal.",
    price: "19,90",
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
    price: "47",
    suffix: "por 6 meses",
    note: "Equivale a apenas R$ 7,83 por mês.",
    benefits: ["Acesso completo ao App de Simulados", "Economize R$ 72,40", "Seis meses de preparação"],
    href: "https://lastlink.com/p/C367A5A78/checkout-payment/",
    cta: "QUERO O PLANO SEMESTRAL",
    style: "semestral",
  },
  {
    name: "👑 Plano Anual",
    eyebrow: "MELHOR CUSTO-BENEFÍCIO",
    description: "O plano escolhido por quem pretende estudar até a aprovação.",
    price: "87",
    suffix: "por 12 meses",
    note: "Equivale a apenas R$ 7,25 por mês.",
    benefits: ["Acesso completo ao App de Simulados", "Economize R$ 151,80", "Um ano inteiro de preparação"],
    href: "https://lastlink.com/p/CE98B3216/checkout-payment/",
    cta: "QUERO O PLANO ANUAL",
    style: "annual featured",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="vsl-shell" aria-labelledby="page-title">
        <header className="hero-copy">
          <h1 id="page-title">Você comprou o plano mensal ou anual… mas e se nunca mais precisasse se preocupar com <strong>renovação?</strong></h1>
          <p>Agora você pode ter o <strong>Memória Musical para sempre</strong>, com <strong>acesso vitalício ao aplicativo</strong> e estudar no seu ritmo, sem mensalidades ou renovações.</p>
        </header>

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
