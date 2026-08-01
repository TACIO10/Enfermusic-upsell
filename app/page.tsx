const acceptUrl = "#adicionar-ao-pedido";
const declineUrl = "#continuar-sem-oferta";

const benefits = [
  ["01", "Treine com músicas reais", "Saia dos exercícios isolados e reconheça acordes, intervalos e progressões dentro de músicas agradáveis."],
  ["02", "Fortaleça a memória auditiva", "Crie referências sonoras mais claras e perceba detalhes musicais que antes passavam despercebidos."],
  ["03", "Pratique sem parar sua rotina", "Transforme momentos no trabalho, na caminhada, no trânsito ou no descanso em treino auditivo."],
];

const included = [
  "Seleção estratégica de músicas com progressões claras",
  "Referências para ouvido absoluto e relativo",
  "Aplicação prática do treinamento do Loop Auditivo",
  "Acesso imediato e pagamento único",
];

export default function Home() {
  return (
    <main>
      <div className="alert-bar">
        <span className="pulse" />
        <strong>Atenção:</strong> sua compra ainda não está 100% concluída
      </div>

      <section className="hero">
        <div className="noise" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="brand"><span>♪</span> LOOP AUDITIVO</div>
            <p className="hello">Hey, aqui é a Helena novamente.</p>
            <h1>Leve seu ouvido musical <em>para o mundo real.</em></h1>
            <p className="lead">
              Combine o Loop Auditivo com uma seleção estratégica de músicas e acelere sua capacidade de reconhecer acordes, intervalos e progressões harmônicas.
            </p>
            <a className="cta hero-cta" href="#oferta">Quero acelerar minha evolução <span>↓</span></a>
            <div className="micro-row"><span>✓ Acesso imediato</span><span>✓ Pagamento único</span><span>✓ Compra protegida</span></div>
          </div>

          <div className="hero-art" aria-label="Representação visual de uma playlist para treinamento auditivo">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="headphones"><div className="headband" /><div className="ear left" /><div className="ear right" /></div>
            <div className="playlist-card">
              <span className="card-kicker">AGORA TOCANDO</span>
              <div className="wave">{[18,32,48,25,56,38,68,44,24,52,34,62,29,45,20].map((h,i)=><i key={i} style={{height:h}} />)}</div>
              <strong>Treino de percepção</strong>
              <small>Progressões harmônicas claras</small>
              <div className="progress"><span /></div>
              <div className="controls">◀ <b>▶</b> ▶</div>
            </div>
            <div className="note note-one">♪</div><div className="note note-two">♫</div>
          </div>
        </div>
      </section>

      <section className="story section">
        <div className="wrap narrow">
          <span className="eyebrow">Uma pergunta começou a se repetir</span>
          <blockquote>“Helena, existe alguma forma de acelerar ainda mais o desenvolvimento do ouvido?”</blockquote>
          <p className="answer">Sim, existe.</p>
          <p>Logo depois de começarem a utilizar o Loop Auditivo, muitos alunos perceberam a evolução e quiseram ir além: reconhecer os mesmos padrões não apenas durante o treino, mas também nas músicas que ouviam todos os dias.</p>
        </div>
      </section>

      <section className="imagine section dark">
        <div className="wrap imagine-grid">
          <div>
            <span className="eyebrow light">Agora imagine</span>
            <h2>Ouvir uma música e finalmente perceber o que antes passava despercebido.</h2>
          </div>
          <div className="imagine-list">
            {["Reconhecer acordes com mais facilidade", "Identificar intervalos e movimentos harmônicos", "Perceber padrões musicais com mais clareza", "Tocar com mais confiança"].map((item,i)=><div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="solution section">
        <div className="wrap solution-grid">
          <div className="album-art">
            <div className="album-top"><span>EDIÇÃO ESPECIAL</span><span>♪</span></div>
            <div className="album-wave">{[36,68,44,82,52,92,61,75,40,66,30].map((h,i)=><i key={i} style={{height:h}} />)}</div>
            <h3>Playlist de Músicas</h3>
            <p>para treinar ouvido<br/>absoluto e relativo</p>
          </div>
          <div>
            <span className="eyebrow">Não é uma playlist comum</span>
            <h2>Uma ponte entre o treinamento e a música de verdade.</h2>
            <p>Esta playlist foi cuidadosamente selecionada para ajudar seu cérebro a criar conexões auditivas mais rápidas, usando músicas com progressões harmônicas claras e fáceis de identificar.</p>
            <p>Assim, você aplica o que aprende no Loop Auditivo em um contexto real, agradável e fácil de incluir na rotina.</p>
            <div className="bridge"><span>LOOP AUDITIVO</span><i>→</i><span>MÚSICAS REAIS</span></div>
          </div>
        </div>
      </section>

      <section className="benefits section soft">
        <div className="wrap">
          <div className="section-heading"><span className="eyebrow">O que muda na prática</span><h2>Seu treino continua mesmo quando você não está “estudando”.</h2></div>
          <div className="benefit-grid">{benefits.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
          <div className="routine"><span>NO TRABALHO</span><i>•</i><span>NA CAMINHADA</span><i>•</i><span>NO TRÂNSITO</span><i>•</i><span>NO DESCANSO</span></div>
        </div>
      </section>

      <section className="offer section dark" id="oferta">
        <div className="wrap offer-grid">
          <div className="offer-copy">
            <span className="eyebrow light">Oferta exclusiva para novos alunos</span>
            <h2>Complete seu treinamento da forma mais inteligente.</h2>
            <p>Adicione agora a Playlist de Músicas para Treinar Ouvido Absoluto e Relativo ao seu pedido.</p>
            <ul>{included.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul>
          </div>
          <article className="price-card">
            <span className="exclusive">SOMENTE NESTA PÁGINA</span>
            <p className="price-intro">De <s>R$ 97</s> por apenas</p>
            <div className="price"><small>R$</small><strong>47</strong></div>
            <p className="payment">pagamento único · sem mensalidades</p>
            <a className="cta" href={acceptUrl} data-goatcounter-click="upsell-playlist-47">SIM, ADICIONAR AO MEU PEDIDO <span>→</span></a>
            <div className="safe">🔒 Acesso imediato · Compra protegida</div>
          </article>
        </div>
      </section>

      <section className="guarantee section">
        <div className="wrap guarantee-grid">
          <div className="seal"><span>✓</span><strong>RISCO<br/>ZERO</strong></div>
          <div><span className="eyebrow">Sua escolha continua protegida</span><h2>Experimente e avalie por conta própria.</h2><p>A playlist conta com a mesma garantia da sua compra. Você pode acessar o material, experimentar e decidir com tranquilidade se ele faz sentido para o seu desenvolvimento musical.</p></div>
        </div>
      </section>

      <section className="urgency">
        <div className="wrap urgency-inner"><span className="clock">!</span><div><strong>Esta condição está disponível apenas agora.</strong><p>Ao sair desta página, a oferta será encerrada e não poderá ser acessada novamente por este valor.</p></div></div>
      </section>

      <section className="final section dark">
        <div className="wrap narrow center">
          <span className="eyebrow light">Seu próximo acorde começa aqui</span>
          <h2>Transforme cada música em uma oportunidade de evoluir.</h2>
          <p>Adicione a playlist ao seu pedido e una treinamento direcionado com aplicação prática.</p>
          <a className="cta final-cta" href={acceptUrl}>SIM, QUERO A PLAYLIST POR R$ 47 <span>→</span></a>
          <a className="decline" href={declineUrl}>Não desejo essa oferta. Quero continuar apenas com o Loop Auditivo.</a>
        </div>
      </section>

      <footer><div className="wrap"><div className="brand"><span>♪</span> LOOP AUDITIVO</div><p>© 2026 · Todos os direitos reservados.</p></div></footer>
    </main>
  );
}
