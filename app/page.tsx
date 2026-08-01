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
        <div className="video-frame" aria-label="Espaço reservado para o vídeo"><div className="video-placeholder" /><div className="video-progress" /></div>

        <div className="offers-heading">
          <span>ESCOLHA COMO VOCÊ QUER CONTINUAR</span>
          <h2>Qual opção combina mais com você?</h2>
          <p>As duas opções liberam o acesso imediatamente após a confirmação do pagamento.</p>
        </div>

        <div className="offer-stack">
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
