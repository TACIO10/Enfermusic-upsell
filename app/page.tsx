const checkoutUrl = "#acesso";

const contents = [
  "Sistema Único de Saúde (SUS)", "Ética em Enfermagem", "Saúde Coletiva",
  "Farmacologia", "Urgência", "Emergência", "Biossegurança",
  "Saúde da Mulher", "Saúde da Criança", "Processo de Enfermagem",
  "Administração de Medicamentos", "Legislação em Enfermagem",
];

const faqs = [
  ["O Método da Memória Musical substitui meus estudos?", "Não. Ele complementa sua preparação e ajuda a tornar as revisões mais frequentes."],
  ["Posso ouvir pelo celular?", "Sim. A plataforma pode ser acessada pelo celular e pelo computador."],
  ["Preciso saber cantar?", "Não. Basta ouvir as músicas regularmente para reforçar o contato com os conteúdos."],
  ["Terei acesso imediatamente?", "Sim. Após a confirmação do pagamento, o acesso é liberado."],
];

function Button({ children }: { children: React.ReactNode }) {
  return <a className="cta" href={checkoutUrl}>{children}<span aria-hidden="true">→</span></a>;
}

function CheckList({ items }: { items: string[] }) {
  return <ul className="fold-checks">{items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>;
}

function ProofPlaceholder({ type, index }: { type: string; index: number }) {
  return <div className={`media-proof media-proof-${index % 3}`}><span>0{index}</span><div className="media-icon" aria-hidden="true">{type === "Vídeo" ? "▶" : type === "Áudio" ? "♪" : "▧"}</div><strong>{type}</strong><small>Insira aqui uma prova real autorizada</small></div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Memória Musical - início"><span className="brand-mark"><i/><i/><i/><i/></span><span>MEMÓRIA <b>MUSICAL</b></span></a>
        <a className="top-link" href="#conteudos">O que você recebe</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" role="img" aria-label="Profissional de enfermagem revisando pelo celular" />
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span/>Para concursos de enfermagem</div>
            <h1>Memorize os assuntos mais cobrados nos concursos de enfermagem com apenas <em>20 minutos por dia</em></h1>
            <p className="hero-lead">Reforce os conteúdos mais importantes mesmo com plantões, filhos e uma rotina apertada.</p>
            <Button>Quero memorizar melhor agora</Button>
            <p className="microcopy"><span>✓</span>Acesso pelo celular <span>✓</span>Liberação imediata</p>
          </div>
          <div className="hero-product">
            <div className="product-glow" />
            <img src="/memoria-musical-app.webp" alt="Aplicativo Memória Musical com uma trilha sobre o Sistema Único de Saúde" />
            <div className="product-caption"><span className="live-dot"/><strong>Trilhas organizadas por assunto</strong><small>Revise pelo celular onde estiver</small></div>
          </div>
        </div>
      </section>

      <section className="fold social-first">
        <div className="container">
          <div className="fold-kicker">Resultados de alunos</div>
          <h2>Mais de <span className="editable-number">XXX</span> concurseiros já estão utilizando o Método da Memória Musical</h2>
          <div className="stars" aria-label="Cinco estrelas"><i/><i/><i/><i/><i/></div>
          <p className="placeholder-warning">Substitua “XXX” pelo número real antes de divulgar.</p>
          <div className="proof-preview-grid">
            <ProofPlaceholder type="Depoimento" index={1}/><ProofPlaceholder type="Print" index={2}/><ProofPlaceholder type="Vídeo" index={3}/><ProofPlaceholder type="WhatsApp" index={4}/>
          </div>
        </div>
      </section>

      <section className="fold pain-fold">
        <div className="container narrow">
          <div className="fold-kicker">Sua rotina de estudos</div>
          <h2>Você já passou por isso?</h2>
          <CheckList items={["Estuda durante horas.", "Faz resumos enormes.", "Assiste videoaulas.", "Resolve questões.", "E poucos dias depois já esqueceu boa parte do conteúdo."]}/>
          <div className="exam-pain"><span>Na hora da prova...</span><p>Você sabe que estudou aquilo.</p><strong>Mas a resposta simplesmente não vem.</strong></div>
        </div>
      </section>

      <section className="fold memory-fold">
        <div className="container split">
          <div className="brain-visual compact-brain"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="brain-core"><span>♪</span><small>MEMÓRIA</small><b>+</b><small>REPETIÇÃO</small></div></div>
          <div>
            <div className="fold-kicker light">Uma nova perspectiva</div>
            <h2>O problema nunca foi sua memória.</h2>
            <p>Você consegue lembrar músicas que ouviu anos atrás.</p>
            <p>Mas provavelmente não consegue lembrar o conteúdo do último PDF que estudou.</p>
            <p>Então o problema não é sua memória.</p>
            <strong>É a forma como você revisa.</strong>
          </div>
        </div>
      </section>

      <section className="fold test-fold">
        <div className="container memory-test">
          <div className="test-label">Faça um teste</div>
          <p>Complete mentalmente.</p>
          <blockquote>“Parabéns pra...”</blockquote>
          <p>Você completou.</p>
          <div className="test-divider"/>
          <p>Agora tente lembrar o quinto tópico do último PDF que estudou.</p>
          <strong className="difficult">Percebe a diferença?</strong>
          <p>Seu cérebro tende a recuperar com muito mais facilidade informações que foram reforçadas repetidamente por meio de padrões sonoros.</p>
          <p>Foi exatamente dessa ideia que nasceu o <strong>Método da Memória Musical.</strong></p>
        </div>
      </section>

      <section className="fold method-fold">
        <div className="container">
          <div className="fold-kicker">Um sistema de revisão</div>
          <h2>Conheça o Método da Memória Musical</h2>
          <p className="fold-lead">Um sistema de revisão criado para ajudar concurseiros da Enfermagem a reforçar os conteúdos mais cobrados por meio de músicas organizadas por disciplina.</p>
          <div className="where-grid">
            {[["TR","Dirigindo"],["PL","No plantão"],["CM","Caminhando"],["TN","Treinando"],["CS","Em casa"]].map(([icon,text])=><div key={text}><span>{icon}</span><strong>{text}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="fold routine-fold">
        <div className="container">
          <div className="fold-kicker">Cabe na vida real</div>
          <h2>Estude até quando você não está estudando.</h2>
          <div className="routine-four">
            {[["01","Trânsito","Transforme o caminho em revisão."],["02","Intervalo do plantão","Use uma pausa para reforçar um assunto."],["03","Academia","Ouça enquanto movimenta o corpo."],["04","Tarefas de casa","Continue revisando dentro da sua rotina."]].map(([n,t,d])=><article key={t}><span>{n}</span><div className="line-art"/><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="fold how-fold">
        <div className="container">
          <div className="fold-kicker light">Passo a passo</div>
          <h2>Como funciona</h2>
          <div className="steps-flow">
            {["Escolha a disciplina.", "Ouça.", "Reforce naturalmente.", "Revise várias vezes durante a semana.", "Chegue mais preparado para a prova."].map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong>{i<4&&<i aria-hidden="true">↓</i>}</div>)}
          </div>
        </div>
      </section>

      <section className="fold imagine-fold">
        <div className="container imagine-grid">
          <div>
            <div className="fold-kicker light">Na hora da prova</div>
            <h2>Imagine entrar na prova.</h2>
            <div className="exam-sequence"><p>Você lê uma questão sobre <strong>SUS.</strong><span>Lembra da música.</span></p><p>Depois uma questão sobre <strong>vacinação.</strong><span>Mais uma música.</span></p><p>Depois <strong>urgência.</strong><span>Outra música.</span></p></div>
            <blockquote>Você não tenta decorar. Você apenas reconhece uma informação revisada várias vezes.</blockquote>
          </div>
          <div className="question-card"><div className="question-head"><span>SIMULADO</span><small>Questão 14 de 30</small></div><p>Os princípios doutrinários do Sistema Único de Saúde incluem:</p><div className="option">A <span>Centralização e seletividade</span></div><div className="option correct">B <span>Universalidade, integralidade e equidade</span><b>✓</b></div><div className="memory-cue"><i>♪</i><div><small>A memória conectou</small><strong>“Universal para todos...”</strong></div></div></div>
        </div>
      </section>

      <section className="fold content-fold" id="conteudos">
        <div className="container">
          <div className="fold-kicker">Dentro da plataforma</div>
          <h2>Tudo o que você recebe</h2>
          <div className="content-grid">{contents.map((item,i)=><div key={item}><span>✓</span><strong>{item}</strong><small>{String(i+1).padStart(2,"0")}</small></div>)}</div>
          <p className="content-more">Além de outros conteúdos presentes nos principais editais.</p>
        </div>
      </section>

      <section className="fold routine-prep">
        <div className="container split">
          <div><div className="fold-kicker">Para quem tem vida real</div><h2>Uma preparação que acompanha sua rotina.</h2><p>Revisões rápidas, organizadas e acessíveis nos dispositivos que já fazem parte do seu dia.</p></div>
          <CheckList items={["Trabalha em plantões", "Tem pouco tempo", "Precisa de revisões rápidas", "Acesso pelo celular", "Acesso pelo computador", "Recebe atualizações"]}/>
        </div>
      </section>

      <section className="fold students-fold">
        <div className="container">
          <div className="fold-kicker light">Prova social</div>
          <h2>O que dizem os alunos</h2>
          <p className="fold-lead">Uma área ampla para reunir vídeos, prints, conversas e áudios reais de alunos.</p>
          <div className="student-media-grid">
            {Array.from({length:10},(_,i)=><ProofPlaceholder key={i} type={i<5?"Vídeo":i<7?"Print":i<9?"WhatsApp":"Áudio"} index={i+1}/>)}
          </div>
          <p className="honesty-note">Os espaços acima devem ser substituídos apenas por provas reais e autorizadas.</p>
        </div>
      </section>

      <section className="fold access-fold" id="acesso">
        <div className="container access-grid">
          <div>
            <div className="fold-kicker light">Acesso completo</div>
            <h2>Você recebe acesso completo</h2>
            <CheckList items={["Método da Memória Musical", "Todas as músicas", "Plataforma", "Atualizações", "Novas disciplinas", "Suporte", "Acesso imediato"]}/>
          </div>
          <div className="offer-card"><span className="offer-label">COMECE SUA REVISÃO</span><div className="offer-logo"><span className="brand-mark"><i/><i/><i/><i/></span><strong>Memória Musical</strong></div><p>Transforme momentos livres em oportunidades de reforçar os assuntos mais importantes.</p><Button>Quero acessar agora</Button><small>Ambiente seguro • Acesso pelo celular</small></div>
        </div>
      </section>

      <section className="section faq"><div className="container faq-grid"><div><div className="section-tag">Perguntas frequentes</div><h2>Tire suas dúvidas.</h2></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
      <footer><div className="container"><a className="brand" href="#inicio"><span className="brand-mark"><i/><i/><i/><i/></span><span>MEMÓRIA <b>MUSICAL</b></span></a><p>© 2026 Método da Memória Musical. Todos os direitos reservados.</p><p className="disclaimer">Este produto é um recurso complementar de revisão e não garante aprovação. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p></div></footer>
    </main>
  );
}
