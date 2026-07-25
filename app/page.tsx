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
            <h1>Descubra como concurseiros da Enfermagem estão memorizando os assuntos mais cobrados usando o <em>Método da Memória Musical®</em> — mesmo tendo apenas 1 hora por dia para estudar.</h1>
            <p className="hero-lead">Uma nova forma de reforçar o que você estuda, mesmo com plantões, filhos e uma rotina apertada.</p>
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

      <section className="section identification">
        <div className="container narrow">
          <div className="section-tag">Isso parece familiar?</div>
          <h2>Você já passou por isso?</h2>
          <div className="pain-list">
            {[
              "Estuda durante horas e esquece tudo poucos dias depois.",
              "Faz dezenas de questões e continua errando os mesmos assuntos.",
              "Lê PDFs enormes e sente que nada fixa.",
              "Trabalha em plantões e nunca consegue revisar como gostaria.",
              "Tem medo de “dar branco” justamente na hora da prova.",
            ].map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section problem">
        <div className="container narrow">
          <div className="section-tag">O problema real</div>
          <h2>O maior erro dos concurseiros da enfermagem</h2>
          <p className="section-intro">Durante anos ensinaram você a estudar assim:</p>
          <div className="wrong-methods">
            {["PDFs enormes", "Videoaulas de três horas", "Resumos intermináveis", "Ler tudo várias vezes"].map((item) => <div key={item}><span>✓</span><strong>{item}</strong></div>)}
          </div>
          <div className="problem-answer">
            <span>O problema?</span>
            <p>Esses métodos exigem um enorme esforço para memorizar.</p>
            <p>E é justamente por isso que tanta gente esquece o conteúdo poucos dias depois.</p>
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
            <h2>O problema nunca foi sua memória.</h2>
            <p>Se você consegue lembrar músicas da infância...</p>
            <p>Mas esquece rapidamente aquilo que estudou na semana passada...</p>
            <p>O problema não é falta de inteligência.</p>
            <p>É que seu cérebro aprende de maneira diferente.</p>
          </div>
        </div>
        <div className="container memory-test">
          <div className="test-label">Faça um teste</div>
          <p>Complete mentalmente.</p>
          <blockquote>“Parabéns pra...”</blockquote>
          <p>Você completou <strong>“você”.</strong></p>
          <div className="test-divider" />
          <p>Agora tente lembrar o quarto tópico do último PDF que estudou.</p>
          <strong className="difficult">Difícil?</strong>
          <p>Isso acontece porque seu cérebro guarda padrões sonoros com muito mais facilidade do que grandes blocos de texto.</p>
          <p>Foi justamente dessa percepção que nasceu o <strong>Método da Memória Musical®.</strong></p>
        </div>
      </section>

      <section className="section method-intro">
        <div className="container narrow">
          <div className="section-tag">Agora você conhece a diferença</div>
          <h2>Conheça o Método da Memória Musical®</h2>
          <p className="method-lead">Um sistema de revisão desenvolvido para ajudar concurseiros da enfermagem a reforçar os conteúdos mais cobrados por meio de músicas criadas para facilitar a memorização.</p>
          <div className="method-uses">
            {["Enquanto dirige", "Enquanto trabalha", "Enquanto faz exercícios", "Enquanto cozinha", "Em qualquer momento livre do seu dia"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}
          </div>
          <div className="notice dark-notice"><strong>Importante:</strong> o método não substitui seus estudos. Ele potencializa a sua revisão.</div>
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
            <h2>Imagine entrar na prova...</h2>
            <p>Você lê uma questão sobre SUS.</p>
            <p>Instantaneamente lembra da música.</p>
            <p>Depois aparece uma questão sobre vacinação. Mais uma música.</p>
            <p>Outra questão sobre urgência e emergência. Novamente você lembra da sequência.</p>
            <div className="notice"><strong>É isso que acontece quando o conteúdo deixa de ser apenas um texto...</strong><br />E passa a fazer parte da sua memória.</div>
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
            <p>Você terá acesso ao Método da Memória Musical®, organizado em trilhas de revisão contendo os assuntos mais cobrados em concursos da enfermagem.</p>
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

      <section className="section social-proof">
        <div className="container">
          <div className="section-tag">Experiências reais</div>
          <h2>Quem está utilizando o Método da Memória Musical®</h2>
          <p className="section-intro">Resultados e experiências reais serão apresentados aqui com autorização dos alunos.</p>
          <div className="proof-grid">
            <div className="proof-placeholder"><span>01</span><strong>Depoimento em vídeo</strong><p>Espaço reservado para um vídeo real de aluno.</p></div>
            <div className="proof-placeholder"><span>02</span><strong>Relato de experiência</strong><p>Espaço reservado para um print ou depoimento verificável.</p></div>
            <div className="proof-placeholder"><span>03</span><strong>Aprovação ou resultado</strong><p>Espaço reservado para uma conquista documentada.</p></div>
          </div>
          <p className="proof-note">Nenhum depoimento fictício foi utilizado nesta página.</p>
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
          <div className="decision-copy">
            <p>Você pode continuar estudando exatamente como sempre estudou...</p>
            <p>Lendo centenas de páginas. Esquecendo boa parte do conteúdo. E torcendo para lembrar na hora da prova.</p>
            <span>Ou</span>
            <p>Pode começar a revisar de uma forma que acompanha sua rotina e aumenta a frequência de contato com os assuntos mais importantes.</p>
            <strong>A decisão é sua.</strong>
          </div>
          <Button>Quero começar a memorizar melhor</Button>
        </div>
      </section>

      <footer><div className="container"><a className="brand" href="#inicio"><span className="brand-mark"><i/><i/><i/><i/></span><span>MEMÓRIA <b>MUSICAL</b></span></a><p>© 2026 Método da Memória Musical®. Todos os direitos reservados.</p><p className="disclaimer">Este produto é um recurso complementar de revisão e não garante aprovação em concursos públicos. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p></div></footer>
    </main>
  );
}
