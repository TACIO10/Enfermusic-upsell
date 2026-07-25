const checkoutUrl = "#oferta";

const subjects = [
  "Sistema Único de Saúde (SUS)",
  "Ética e Legislação em Enfermagem",
  "Saúde Coletiva",
  "Saúde da Mulher",
  "Saúde da Criança",
  "Urgência e Emergência",
  "Enfermagem Médico-Cirúrgica",
  "Farmacologia",
  "Biossegurança",
  "Administração em Enfermagem",
];

const moments = [
  ["No caminho", "Transforme o trajeto em uma revisão ativa."],
  ["No intervalo", "Reforce um assunto durante a pausa do plantão."],
  ["Em casa", "Continue aprendendo enquanto cuida da rotina."],
  ["Antes da prova", "Retome rapidamente os pontos mais importantes."],
];

const faqs = [
  ["O Método da Memória Musical® substitui meus estudos?", "Não. Ele complementa sua preparação, tornando suas revisões mais frequentes e eficientes."],
  ["Posso ouvir pelo celular?", "Sim. Você pode acessar a plataforma pelo celular e estudar onde estiver."],
  ["Funciona para qualquer concurso de enfermagem?", "O método foi desenvolvido para auxiliar na revisão dos conteúdos mais cobrados em concursos da área de enfermagem. Consulte as disciplinas disponíveis na plataforma e compare com o seu edital."],
  ["Preciso saber cantar?", "Não. Basta ouvir as músicas regularmente para reforçar o contato com os conteúdos."],
  ["Terei acesso imediatamente?", "Sim. Após a confirmação do pagamento, seu acesso é liberado para você começar a utilizar a plataforma."],
];

function Button({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <a className={`cta ${light ? "cta-light" : ""}`} href={checkoutUrl}>{children}<span aria-hidden="true">→</span></a>;
}

function Waveform() {
  return <div className="waveform" aria-hidden="true">{[18,31,46,25,52,68,38,57,78,42,61,32,48,70,40,55,29,44,20].map((h,i)=><i key={i} style={{height:h}} />)}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Memória Musical - início">
          <span className="brand-mark"><i /><i /><i /><i /></span>
          <span>MEMÓRIA <b>MUSICAL</b></span>
        </a>
        <a className="top-link" href="#plataforma">O que você recebe</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" role="img" aria-label="Profissional de enfermagem revisando conteúdos pelo celular e fones de ouvido" />
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span />Para concursos de enfermagem</div>
            <h1>Memorize os assuntos mais cobrados com apenas <em>1 hora por dia.</em></h1>
            <p className="hero-lead">Descubra como concurseiros da enfermagem estão transformando conteúdos importantes em músicas fáceis de revisar — mesmo com plantões, filhos e uma rotina apertada.</p>
            <Button>Quero memorizar melhor agora</Button>
            <p className="microcopy"><span>✓</span> Acesso pelo celular <span>✓</span> Liberação imediata</p>
          </div>
          <div className="audio-card">
            <div className="audio-top"><span className="live-dot" />Tocando agora <small>03:18</small></div>
            <div className="cover-art">
              <span className="cross">+</span>
              <div><small>FAIXA 01</small><strong>Princípios<br />do SUS</strong></div>
            </div>
            <Waveform />
            <div className="player">
              <span>01:24</span><button aria-label="Reproduzir amostra">▶</button><span>03:18</span>
            </div>
            <p>Conteúdo que acompanha o seu ritmo.</p>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container strip-grid">
          <div><strong>1 hora</strong><span>pode render muito mais</span></div>
          <div><strong>10+ temas</strong><span>essenciais da enfermagem</span></div>
          <div><strong>Onde estiver</strong><span>revisão prática pelo celular</span></div>
        </div>
      </section>

      <section className="section problem">
        <div className="container narrow">
          <div className="section-tag">O problema real</div>
          <h2>Você não precisa estudar mais.<br /><em>Precisa lembrar melhor.</em></h2>
          <p className="section-intro">Existe uma enorme diferença entre passar horas estudando e conseguir recuperar a informação exatamente quando ela é necessária.</p>
          <div className="contrast">
            <div className="contrast-card old">
              <span className="number">01</span><h3>O ciclo que cansa</h3>
              <ul>
                <li>Ler PDFs intermináveis</li><li>Assistir a videoaulas longas</li><li>Fazer resumos gigantes</li><li>Esquecer tudo poucos dias depois</li>
              </ul>
            </div>
            <div className="contrast-arrow" aria-hidden="true">→</div>
            <div className="contrast-card new">
              <span className="number">02</span><h3>Uma revisão que acompanha você</h3>
              <ul>
                <li>Ouvir conteúdos em qualquer lugar</li><li>Revisar várias vezes sem sobrecarga</li><li>Associar informações a ritmo e repetição</li><li>Reconhecer o assunto com mais facilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section brain">
        <div className="container split">
          <div className="brain-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="brain-core"><span>♪</span><small>RITMO</small><b>+</b><small>REPETIÇÃO</small></div>
            <span className="sound s1" /><span className="sound s2" /><span className="sound s3" />
          </div>
          <div>
            <div className="section-tag light">Por que faz sentido</div>
            <h2>O problema nunca foi a sua memória.</h2>
            <p>Você se lembra de músicas que ouviu há 10 ou 20 anos, mas talvez não consiga recordar o conteúdo de um PDF estudado na semana passada.</p>
            <p>Ritmo, padrões e repetição criam mais pontos de contato com a informação. O Método da Memória Musical® usa esse princípio para tornar a revisão mais frequente e memorável.</p>
            <div className="notice"><strong>Importante:</strong> o método não substitui seus estudos. Ele potencializa a sua revisão.</div>
          </div>
        </div>
      </section>

      <section className="section routine">
        <div className="container">
          <div className="section-tag">Cabe na vida real</div>
          <h2>Estude até quando você<br /><em>não está estudando.</em></h2>
          <p className="section-intro">Aumente o contato com os conteúdos sem precisar encontrar novas horas na agenda.</p>
          <div className="moment-grid">
            {moments.map(([title, text], i) => <article key={title}><span>0{i+1}</span><div className={`moment-icon m${i+1}`}><i /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section exam">
        <div className="container split exam-grid">
          <div>
            <div className="section-tag light">Na hora da prova</div>
            <h2>A questão aparece.<br />A lembrança vem junto.</h2>
            <p>Imagine ler uma questão sobre SUS e lembrar de um trecho da música. Em seguida, encontrar Ética em Enfermagem e reconhecer a sequência do conteúdo.</p>
            <ul className="clean-list"><li>Mais contatos com os assuntos</li><li>Revisões menos cansativas</li><li>Recuperação mais natural da informação</li></ul>
          </div>
          <div className="question-card">
            <div className="question-head"><span>SIMULADO</span><small>Questão 14 de 30</small></div>
            <p>Os princípios doutrinários do Sistema Único de Saúde incluem:</p>
            <div className="option">A <span>Centralização e seletividade</span></div>
            <div className="option correct">B <span>Universalidade, integralidade e equidade</span><b>✓</b></div>
            <div className="option">C <span>Privatização e regionalização</span></div>
            <div className="memory-cue"><i>♪</i><div><small>A memória conectou</small><strong>“Universal para todos...”</strong></div></div>
          </div>
        </div>
      </section>

      <section className="section library" id="plataforma">
        <div className="container">
          <div className="library-head">
            <div><div className="section-tag">Dentro da plataforma</div><h2>Um acervo organizado pelos temas que mais importam.</h2></div>
            <p>Encontre rapidamente a matéria que deseja reforçar e crie uma rotina de revisão que funciona para você.</p>
          </div>
          <div className="subject-grid">
            {subjects.map((s, i)=><div className="subject" key={s}><span>{String(i+1).padStart(2,"0")}</span><strong>{s}</strong><i>♪</i></div>)}
            <div className="subject more"><span>+</span><strong>E diversos outros conteúdos dos principais editais</strong></div>
          </div>
        </div>
      </section>

      <section className="section audience">
        <div className="container split">
          <div>
            <div className="section-tag">Feito para você</div>
            <h2>Uma preparação que respeita a sua rotina.</h2>
            <p>O Método da Memória Musical® foi criado para quem quer avançar sem transformar a preparação em mais uma fonte de exaustão.</p>
          </div>
          <div className="audience-list">
            {["Trabalha em plantões e tem pouco tempo","Estuda há meses, mas continua esquecendo","Está cansado de depender apenas de PDFs","Quer revisar no ônibus, na academia ou em casa","Busca uma preparação mais leve e constante"].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}
          </div>
        </div>
      </section>

      <section className="offer" id="oferta">
        <div className="container offer-grid">
          <div>
            <div className="section-tag light">Comece hoje</div>
            <h2>Talvez sua aprovação não dependa de estudar mais.</h2>
            <p className="offer-highlight">Mas de memorizar melhor.</p>
            <p>Tenha acesso ao Método da Memória Musical® e transforme seus momentos livres em oportunidades de revisão.</p>
            <ul className="clean-list"><li>Conteúdos organizados por tema</li><li>Acesso prático pelo celular</li><li>Revisões em qualquer lugar</li><li>Liberação após a confirmação do pagamento</li></ul>
          </div>
          <div className="offer-card">
            <span className="offer-label">ACESSO À PLATAFORMA</span>
            <div className="offer-logo"><span className="brand-mark"><i/><i/><i/><i/></span><strong>Memória Musical®</strong></div>
            <p>Comece agora uma forma mais prática e constante de revisar para concursos de enfermagem.</p>
            <Button light>Sim, quero acessar agora</Button>
            <small>Ambiente seguro • Acesso pelo celular</small>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-grid">
          <div><div className="section-tag">Perguntas frequentes</div><h2>Antes de começar,<br />tire suas dúvidas.</h2><p>Estas são as respostas para as perguntas mais comuns sobre o método e a plataforma.</p></div>
          <div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <span className="music-mark">♪</span>
          <h2>Quantas questões você pode estar perdendo por não lembrar do que já estudou?</h2>
          <p>Chega de transformar a revisão em uma tarefa cansativa. Faça o conteúdo acompanhar o seu dia.</p>
          <Button>Quero começar a memorizar melhor</Button>
        </div>
      </section>

      <footer><div className="container"><a className="brand" href="#inicio"><span className="brand-mark"><i/><i/><i/><i/></span><span>MEMÓRIA <b>MUSICAL</b></span></a><p>© 2026 Método da Memória Musical®. Todos os direitos reservados.</p><p className="disclaimer">Este produto é um recurso complementar de revisão e não garante aprovação em concursos públicos. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p></div></footer>
    </main>
  );
}
