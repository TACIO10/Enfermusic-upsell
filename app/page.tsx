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

      <section className="fold fernanda-story">
        <div className="container">
          <div className="fold-kicker">Uma jornada possível</div>
          <h2>A história da Fernanda poderia ser a sua.</h2>
          <p className="story-subtitle">De candidata frustrada... à aprovação.</p>

          <div className="story-timeline">
            <article className="story-stage">
              <div className="story-media study-media"><img src="/fernanda-antes.webp" alt="Mesa de estudos da Fernanda com computador, materiais e estetoscópio" /></div>
              <div className="story-copy">
                <div className="stage-head"><span>ETAPA 1 — ANTES</span><time>Janeiro de 2025</time></div>
                <blockquote>“Eu estudava todos os dias... mas parecia que nunca era suficiente.”</blockquote>
                <CheckList items={["Lia PDFs enormes.", "Fazia resumos intermináveis.", "Assistia horas de videoaulas.", "Estudava sempre que podia."]}/>
                <p>Mas poucos dias depois... já tinha esquecido boa parte do conteúdo.</p>
                <blockquote className="small-quote">“Na hora das questões eu sabia que tinha estudado aquele assunto, mas simplesmente não conseguia lembrar da resposta.”</blockquote>
              </div>
            </article>

            <div className="timeline-connector"><span>↓</span></div>

            <article className="story-stage reverse">
              <div className="story-media turning-media"><img src="/fernanda-virada.webp" alt="Fones de ouvido sobre materiais de estudo, representando a mudança na forma de revisar" /></div>
              <div className="story-copy">
                <div className="stage-head"><span>ETAPA 2 — A VIRADA</span><time>Abril de 2025</time></div>
                <h3>Fernanda decidiu mudar a forma de revisar.</h3>
                <p>Ao invés de depender apenas de PDFs e resumos, começou a utilizar o Método da Memória Musical para reforçar os conteúdos durante a rotina.</p>
                <p>Agora ela revisava:</p>
                <CheckList items={["No trânsito.", "Enquanto tomava café.", "Nos intervalos do plantão.", "Caminhando."]}/>
                <strong>Sem precisar encontrar horas extras para estudar.</strong>
              </div>
            </article>

            <div className="timeline-connector"><span>↓</span></div>

            <article className="story-stage">
              <div className="story-media approved-media"><img src="/fernanda-depois.webp" alt="Fernanda sorrindo com roupa hospitalar após a aprovação" /></div>
              <div className="story-copy">
                <div className="stage-head"><span>ETAPA 3 — DEPOIS</span><time>Novembro de 2025</time></div>
                <blockquote>“Na prova, a sensação foi completamente diferente.”</blockquote>
                <p>Em várias questões, ela lembrava naturalmente dos conteúdos que havia revisado ao longo das semanas.</p>
                <p>Em vez de tentar decorar tudo na última hora, ela havia reforçado o aprendizado continuamente.</p>
                <div className="story-result"><span>O resultado?</span><strong>Mais segurança durante a prova e a conquista da aprovação.</strong></div>
              </div>
            </article>
          </div>

          <div className="story-final">
            <p>Você não precisa estudar o dobro.</p>
            <strong>Você precisa encontrar uma forma de revisar melhor.</strong>
            <span>Foi exatamente para isso que criamos o Método da Memória Musical.</span>
          </div>
        </div>
      </section>

      <section className="fold social-first">
        <div className="container">
          <div className="fold-kicker">Criado para a rotina real</div>
          <h2>Para quem precisa estudar mesmo com pouco tempo.</h2>
          <div className="credibility-audience">
            {["Estudantes", "Técnicos de Enfermagem", "Enfermeiros", "Quem trabalha em plantões", "Quem estuda para concursos"].map((item, i)=><div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}
          </div>
          <div className="authority-numbers">
            <div><Users aria-hidden="true"/><strong>2.347</strong><span>alunos</span></div>
            <div><PlayCircle aria-hidden="true"/><strong>186.420</strong><span>reproduções</span></div>
            <div><Clock3 aria-hidden="true"/><strong>8.915</strong><span>horas estudadas</span></div>
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

      <section className="fold memory-fold">
        <div className="container split">
          <div className="brain-visual compact-brain"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="brain-core"><span>♪</span><small>MEMÓRIA</small><b>+</b><small>REPETIÇÃO</small></div></div>
          <div>
            <div className="fold-kicker light">Por que isso acontece</div>
            <h2>O problema nunca foi sua memória.</h2>
            <p>Você consegue lembrar músicas que ouviu anos atrás.</p>
            <p>Mas provavelmente não consegue lembrar o conteúdo do último PDF que estudou.</p>
            <p>Então o problema não é sua memória.</p>
            <strong>É a forma como você revisa.</strong>
          </div>
        </div>
      </section>

      <section className="fold origin-fold">
        <div className="container narrow">
          <div className="fold-kicker">Como tudo começou</div>
          <h2>Uma pergunta simples deu origem ao método.</h2>
          <div className="origin-story">
            <p>Se músicas permanecem na memória por tantos anos, por que os conteúdos estudados desaparecem em poucos dias?</p>
            <p>A resposta não estava em estudar ainda mais. Estava em criar uma forma mais prática de reencontrar a matéria várias vezes durante a rotina.</p>
            <strong>Foi dessa busca que nasceu o Método da Memória Musical: transformar a revisão em algo que pode acompanhar o concurseiro ao longo do dia.</strong>
          </div>
        </div>
      </section>

      <section className="fold method-fold">
        <div className="container">
          <div className="fold-kicker">Um sistema de revisão</div>
          <h2>Conheça o Método da Memória Musical</h2>
          <p className="fold-lead">Um sistema de revisão criado para ajudar concurseiros da Enfermagem a reforçar os conteúdos mais cobrados por meio de músicas organizadas por disciplina.</p>
          <div className="where-grid">
            {[[CarFront,"Dirigindo"],[Hospital,"No plantão"],[Footprints,"Caminhando"],[Dumbbell,"Treinando"],[House,"Em casa"]].map(([Icon,text])=><div key={String(text)}><span><Icon aria-hidden="true"/></span><strong>{String(text)}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="fold audio-samples">
        <div className="container">
          <div className="fold-kicker light">Ouça agora</div>
          <h2>Dê o play e experimente o método.</h2>
          <p className="fold-lead">Três exemplos para você sentir como os conteúdos de enfermagem podem acompanhar sua rotina.</p>
          <div className="audio-sample-grid">
            {[
              ["01", "Atenção Primária", "Revisão musical sobre os fundamentos da Atenção Primária.", "/atencao-primaria.mp3"],
              ["02", "Os Três Pilares da Saúde", "Uma faixa para reforçar conceitos essenciais de forma mais leve.", "/tres-pilares-saude.mp3"],
              ["03", "SUS em Ação", "Conteúdos do Sistema Único de Saúde apresentados em formato musical.", "/sus-em-acao.mp3"],
            ].map(([number, title, description, src]) => (
              <article className="sample-card" key={title}>
                <div className="sample-cover"><span>{number}</span><Music2 aria-hidden="true"/><i/><i/><i/><i/><i/></div>
                <div className="sample-copy"><small>FAIXA DE EXEMPLO</small><h3>{title}</h3><p>{description}</p></div>
                <audio controls preload="none" aria-label={`Ouvir ${title}`}><source src={src} type="audio/mpeg"/>Seu navegador não suporta reprodução de áudio.</audio>
                <div className="listen-anywhere"><Headphones aria-hidden="true"/><span>Ouça pelo celular ou computador</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fold routine-fold">
        <div className="container">
          <div className="fold-kicker">Cabe na vida real</div>
          <h2>Estude até quando você não está estudando.</h2>
          <div className="routine-four">
            {[[CarFront,"01","Trânsito","Transforme o caminho em revisão."],[Hospital,"02","Intervalo do plantão","Use uma pausa para reforçar um assunto."],[Dumbbell,"03","Academia","Ouça enquanto movimenta o corpo."],[House,"04","Tarefas de casa","Continue revisando dentro da sua rotina."]].map(([Icon,n,t,d])=><article key={String(t)}><span>{String(n)}</span><div className="routine-icon"><Icon aria-hidden="true"/></div><h3>{String(t)}</h3><p>{String(d)}</p></article>)}
          </div>
        </div>
      </section>

      <section className="fold how-fold">
        <div className="container">
          <div className="fold-kicker light">Passo a passo</div>
          <h2>Como funciona</h2>
          <div className="steps-flow">
            {["Escolha a disciplina.", "Dê o play.", "Ouça durante sua rotina.", "Revise naturalmente.", "Chegue mais preparado para a prova."].map((step,i)=><div key={step}><span>{["①","②","③","④","⑤"][i]}</span><strong>{step}</strong>{i<4&&<i aria-hidden="true">↓</i>}</div>)}
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

      <section className="fold comparison-fold">
        <div className="container">
          <div className="fold-kicker">Compare as duas experiências</div>
          <h2>Qual forma de revisar cabe melhor na sua rotina?</h2>
          <div className="comparison-grid">
            <div className="comparison-card traditional"><span>ESTUDO TRADICIONAL</span><h3>Mais esforço para revisar</h3><ul><li>PDFs enormes</li><li>Revisões cansativas</li><li>Difícil revisar diariamente</li><li>Muito tempo lendo</li></ul></div>
            <div className="comparison-versus">ou</div>
            <div className="comparison-card musical"><span>MEMÓRIA MUSICAL</span><h3>Mais frequência na rotina</h3><ul><li>Revisões rápidas</li><li>Ouça em qualquer lugar</li><li>Mais frequência</li><li>Fácil de encaixar na rotina</li></ul></div>
          </div>
        </div>
      </section>

      <section className="fold students-fold">
        <div className="container">
          <h2>O que dizem os alunos</h2>
          <p className="fold-lead">Relatos de alunas que incluíram as músicas na rotina de estudos.</p>
          <div className="testimonial-gallery">
            <figure>
              <img src="/depoimento-juliana.webp" alt="Depoimento de Juliana Rocha sobre o Método da Memória Musical" />
              <figcaption>Juliana Rocha</figcaption>
            </figure>
            <figure>
              <img src="/depoimento-camila.webp" alt="Depoimento de Camila Santos sobre o Método da Memória Musical" />
              <figcaption>Camila Santos</figcaption>
            </figure>
            <figure>
              <img src="/depoimento-amanda.webp" alt="Depoimento de Amanda Ferreira sobre o Método da Memória Musical" />
              <figcaption>Amanda Ferreira</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="fold access-fold" id="acesso">
        <div className="container opportunity">
          <div className="fold-kicker light">Uma oportunidade de revisar diferente</div>
          <h2>Hoje você recebe acesso completo a:</h2>
          <div className="bonuses">
            <div className="bonuses-heading">
              <Gift aria-hidden="true" />
              <div>
                <span>Bônus exclusivos</span>
                <h3>Ao garantir seu acesso hoje, você também recebe gratuitamente:</h3>
              </div>
            </div>
            <div className="bonus-grid">
              <article>
                <div className="bonus-product"><img src="/bonus-checklist.png" alt="Capa do Checklist dos Assuntos Mais Cobrados" /></div>
                <span>BÔNUS #1</span>
                <h3>Checklist dos Assuntos Mais Cobrados</h3>
                <p>Saiba exatamente quais conteúdos priorizar na sua preparação para os concursos de Enfermagem.</p>
                <p>Você receberá um checklist organizado pelos temas com maior incidência nas provas, permitindo acompanhar sua evolução e revisar o que realmente importa.</p>
                <del>De R$ 67,00</del>
                <strong>GRÁTIS</strong>
              </article>
              <article>
                <div className="bonus-product"><img src="/bonus-questoes.png" alt="Capa do Banco de Questões Comentadas por Tema" /></div>
                <span>BÔNUS #2</span>
                <h3>Banco de Questões Comentadas por Tema</h3>
                <p>Coloque seu conhecimento em prática logo após cada revisão.</p>
                <p>Questões organizadas por disciplina, com comentários para ajudar a compreender os principais pontos cobrados pelas bancas.</p>
                <del>De R$ 97,00</del>
                <strong>GRÁTIS</strong>
              </article>
              <article>
                <div className="bonus-product"><img src="/bonus-comunidade.png" alt="Capa da Comunidade Exclusiva de Alunos" /></div>
                <span>BÔNUS #3</span>
                <h3>Comunidade Exclusiva de Alunos</h3>
                <p>Tenha acesso a uma comunidade exclusiva para trocar experiências, tirar dúvidas, acompanhar novidades e manter a motivação durante toda a preparação.</p>
                <ul>
                  <li>Compartilhe sua evolução.</li>
                  <li>Tire dúvidas com outros alunos.</li>
                  <li>Receba atualizações em primeira mão.</li>
                  <li>Estude com pessoas que têm o mesmo objetivo.</li>
                </ul>
                <del>De R$ 37,00</del>
                <strong>GRÁTIS</strong>
              </article>
            </div>
          </div>
          <section className="value-stack">
            <div className="value-stack-intro">
              <span>Resumo da sua condição</span>
              <h3>Tudo o que você recebe hoje</h3>
            </div>
            <div className="value-items">
              <article>
                <div><strong>Método da Memória Musical®</strong><p>Aprenda a memorizar os assuntos mais cobrados através de músicas criadas especialmente para concursos de enfermagem.</p></div>
                <b>R$ 127,00</b>
              </article>
              <article>
                <div><strong>Bônus 1 — Checklist dos Assuntos Mais Cobrados</strong><p>Saiba exatamente quais conteúdos priorizar para estudar de forma mais estratégica.</p></div>
                <b>R$ 67,00</b>
              </article>
              <article>
                <div><strong>Bônus 2 — Banco de Questões Comentadas por Tema</strong><p>Treine com questões organizadas por assunto e fortaleça sua memorização.</p></div>
                <b>R$ 97,00</b>
              </article>
              <article>
                <div><strong>Bônus 3 — Comunidade Exclusiva de Alunos</strong><p>Tire dúvidas, compartilhe sua evolução e receba atualizações exclusivas.</p></div>
                <b>R$ 37,00</b>
              </article>
            </div>
            <div className="package-total">
              <span>Valor total do pacote</span>
              <strong>R$ 328,00</strong>
            </div>
            <div className="special-condition">
              <p>Você poderia pagar <strong>R$ 328,00</strong> por todo esse material.</p>
              <p>Afinal, cada recurso foi desenvolvido para acelerar sua preparação e aumentar suas chances de aprovação.</p>
              <div>
                <span>Mas hoje você não vai pagar R$ 328,00.</span>
                <span>Nem R$ 197,00.</span>
                <span>Nem R$ 127,00.</span>
              </div>
              <p>Você terá acesso ao <strong>Método da Memória Musical®</strong>, juntamente com <strong>todos os bônus</strong>, por uma condição especial disponível apenas nesta página.</p>
            </div>
          </section>
          <div className="opportunity-grid">
            <CheckList items={["Método da Memória Musical", "Biblioteca completa", "Atualizações", "Plataforma online", "Acesso pelo celular", "Acesso pelo computador", "Novas músicas", "Suporte"]}/>
            <div className="price-panel">
              <span>De:</span><del>R$ XXX</del>
              <small>Por apenas:</small><strong>R$ XX</strong>
              <p>Preencha os valores reais antes da publicação definitiva.</p>
              <Button>Quero acessar agora</Button>
              <em>Acesso imediato após a confirmação</em>
            </div>
          </div>
        </div>
      </section>

      <section className="fold guarantee-fold">
        <div className="container guarantee-box">
          <div className="guarantee-seal"><strong>30</strong><span>DIAS</span></div>
          <div>
            <div className="fold-kicker">Risco reduzido</div>
            <h2>Ainda está em dúvida?</h2>
            <p>Experimente durante 30 dias.</p>
            <p>Se perceber que o Método da Memória Musical não faz sentido para sua rotina, basta solicitar o reembolso.</p>
            <strong>Sem perguntas.</strong>
          </div>
        </div>
      </section>

      <section className="section faq"><div className="container faq-grid"><div><div className="section-tag">Perguntas frequentes</div><h2>Tire suas dúvidas.</h2></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
      <footer><div className="container"><a className="brand" href="#inicio"><span className="brand-mark"><i/><i/><i/><i/></span><span>MEMÓRIA <b>MUSICAL</b></span></a><p>© 2026 Método da Memória Musical. Todos os direitos reservados.</p><p className="disclaimer">Este produto é um recurso complementar de revisão e não garante aprovação. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p></div></footer>
    </main>
  );
}
import { CarFront, Clock3, Dumbbell, Footprints, Gift, Headphones, Hospital, House, Music2, PlayCircle, Users } from "lucide-react";
