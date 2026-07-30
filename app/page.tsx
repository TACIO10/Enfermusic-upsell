const essentialCheckout =
  "https://lastlink.com/p/CCE28D64F/checkout-payment/?utm_source=organic";
const completeCheckout =
  "https://lastlink.com/p/CAA8A573E/checkout-payment/?utm_source=organic";

const subjects = [
  "Sistema Único de Saúde (SUS)",
  "Ética em Enfermagem",
  "Saúde Coletiva",
  "Farmacologia",
  "Urgência e Emergência",
  "Biossegurança",
  "Saúde da Mulher",
  "Saúde da Criança",
  "Processo de Enfermagem",
  "Administração de Medicamentos",
  "Legislação em Enfermagem",
  "Outros temas dos principais editais",
];

const audios = [
  {
    number: "01",
    title: "Atenção Primária",
    description: "Fundamentos da Atenção Primária transformados em revisão musical.",
    src: "/media/atencao-primaria.mp3",
  },
  {
    number: "02",
    title: "Os Três Pilares da Saúde",
    description: "Conceitos essenciais reforçados de uma forma mais leve.",
    src: "/media/tres-pilares-saude.mp3",
  },
  {
    number: "03",
    title: "SUS em Ação",
    description: "Uma amostra musical sobre o Sistema Único de Saúde.",
    src: "/media/sus-em-acao.mp3",
  },
];

const bonuses = [
  {
    number: "01",
    title: "Checklist dos assuntos mais cobrados",
    text: "Saiba o que priorizar e acompanhe sua evolução pelos temas com maior incidência.",
    image: "/media/bonus-checklist.webp",
  },
  {
    number: "02",
    title: "Banco de questões comentadas",
    text: "Pratique após cada revisão com questões organizadas por disciplina.",
    image: "/media/bonus-questoes.webp",
  },
  {
    number: "03",
    title: "Comunidade exclusiva de alunos",
    text: "Troque experiências, tire dúvidas e acompanhe as novidades do método.",
    image: "/media/bonus-comunidade.webp",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav wrap">
          <a className="brand" href="#inicio" aria-label="Memória Musical — início">
            <span className="brand-mark">♪</span>
            <span>MEMÓRIA MUSICAL</span>
          </a>
          <a className="nav-link" href="#oferta">Ver planos</a>
        </nav>

        <div className="hero-grid wrap">
          <div className="hero-copy">
            <span className="eyebrow light">Para concursos de enfermagem</span>
            <h1>
              Faça a matéria <em>voltar à memória</em> quando a questão aparecer.
            </h1>
            <p className="lead">
              Reforce os assuntos mais cobrados com músicas criadas para acompanhar
              seus plantões, deslocamentos e os poucos minutos livres do dia.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experimente">
                Ouvir uma amostra grátis <span>→</span>
              </a>
              <span className="microcopy">Sem cadastro · Dê o play agora</span>
            </div>
            <div className="hero-proof">
              <span>✓ Acesso imediato</span>
              <span>✓ Celular e computador</span>
              <span>✓ Garantia de 30 dias</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <img
              src="/media/oferta-memoria-musical.webp"
              alt="Método da Memória Musical no celular com comunidade, questões e checklist"
            />
            <div className="floating-card">
              <span className="sound-bars"><i /><i /><i /><i /><i /></span>
              <div>
                <small>Agora tocando</small>
                <strong>Revisão de SUS</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section">
        <div className="wrap narrow">
          <span className="eyebrow">A frustração é conhecida</span>
          <h2>Você estudou. Mas, na prova, a resposta simplesmente não veio.</h2>
          <p className="section-intro">
            PDFs longos e horas de videoaula podem ensinar o conteúdo. O problema
            aparece depois: encontrar tempo e energia para reencontrar a matéria
            vezes suficientes para ela permanecer acessível.
          </p>
          <div className="memory-test">
            <div>
              <span className="test-label">Complete mentalmente:</span>
              <blockquote>“Parabéns pra…”</blockquote>
              <strong>Fácil, não é?</strong>
            </div>
            <div className="divider-arrow">→</div>
            <div>
              <span className="test-label">Agora tente lembrar:</span>
              <blockquote>O 5º tópico do último PDF</blockquote>
              <strong>Percebe a diferença?</strong>
            </div>
          </div>
          <p className="insight">
            O problema não é falta de capacidade. <strong>É a forma como a revisão
            cabe — ou não cabe — na sua rotina.</strong>
          </p>
        </div>
      </section>

      <section className="mechanism section dark">
        <div className="wrap mechanism-grid">
          <div>
            <span className="eyebrow light">O mecanismo</span>
            <h2>Você não precisa encontrar mais horas. Precisa reencontrar a matéria mais vezes.</h2>
          </div>
          <div className="mechanism-copy">
            <p>
              O Método da Memória Musical transforma conteúdos recorrentes dos
              concursos de enfermagem em faixas organizadas por disciplina.
            </p>
            <p>
              Assim, sua revisão pode continuar no trânsito, no intervalo do
              plantão, caminhando ou cuidando da casa — sem substituir seu estudo
              principal.
            </p>
          </div>
          <div className="routine-strip">
            {["Estude", "Dê o play", "Reencontre", "Reconheça"].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="listen section" id="experimente">
        <div className="wrap">
          <div className="section-heading center listen-heading">
            <span className="eyebrow">Experimente o método</span>
            <h2>Escolha uma disciplina e dê o play.</h2>
            <p>Conheça a experiência de revisar por músicas antes de escolher seu acesso.</p>
          </div>

          <div className="sample-library">
            <section className="sample-collection">
              <div className="collection-heading">
                <div>
                  <span className="collection-index">Disciplina 01</span>
                  <h3>Saúde Pública e SUS</h3>
                </div>
                <span className="collection-count">3 amostras disponíveis</span>
              </div>
              <div className="audio-grid">
                {audios.map((audio) => (
                  <article className="audio-card" key={audio.title}>
                    <div className="audio-top">
                      <span>Faixa {audio.number}</span>
                      <span className="audio-icon">♪</span>
                    </div>
                    <h4>{audio.title}</h4>
                    <p>{audio.description}</p>
                    <audio controls preload="none" aria-label={`Ouvir ${audio.title}`}>
                      <source src={audio.src} type="audio/mpeg" />
                    </audio>
                  </article>
                ))}
              </div>
            </section>

            <section className="sample-collection pharma-collection">
              <div className="collection-heading">
                <div>
                  <span className="collection-index">Disciplina 02</span>
                  <h3>Farmacologia e Administração de Medicamentos</h3>
                </div>
                <span className="collection-count">Trilha da plataforma</span>
              </div>
              <div className="pharma-content">
                <div>
                  <span className="pharma-kicker">Revisão direcionada</span>
                  <h4>Reforce conceitos essenciais para uma administração segura.</h4>
                  <p>Uma seção organizada para acompanhar sua revisão de medicamentos durante a rotina.</p>
                </div>
                <ul>
                  <li>Fundamentos de Farmacologia</li>
                  <li>Vias de administração</li>
                  <li>Cálculo e diluição de medicamentos</li>
                  <li>Segurança na administração</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="fit section">
        <div className="wrap fit-grid">
          <div className="fit-visual">
            <img src="/media/fernanda-virada.webp" alt="Fones de ouvido sobre materiais de estudo" />
            <div className="time-badge"><strong>20</strong><span>minutos<br />por dia</span></div>
          </div>
          <div>
            <span className="eyebrow">Feito para a rotina real</span>
            <h2>Revise até quando você não está “sentada para estudar”.</h2>
            <div className="use-list">
              {[
                ["No trânsito", "Transforme o deslocamento em revisão."],
                ["No plantão", "Use uma pausa curta para reencontrar um tema."],
                ["Nas tarefas", "Continue ouvindo enquanto cuida da rotina."],
                ["Na caminhada", "Movimente o corpo sem abandonar o conteúdo."],
              ].map(([title, text], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <p><strong>{title}</strong>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contents section" id="conteudos">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Dentro da plataforma</span>
            <h2>Os temas que mais aparecem nos editais, prontos para acompanhar você.</h2>
          </div>
          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <div key={subject}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{subject}</strong>
              </div>
            ))}
          </div>
          <div className="center-cta">
            <a className="button dark-button" href="#oferta">Quero escolher meu acesso <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="comparison section dark">
        <div className="wrap">
          <div className="section-heading center light-heading">
            <span className="eyebrow light">Menos atrito, mais frequência</span>
            <h2>Qual revisão tem mais chance de caber no seu dia?</h2>
          </div>
          <div className="compare-grid">
            <article className="compare-old">
              <span className="compare-label">Revisão tradicional</span>
              <h3>Depende de parar tudo.</h3>
              <ul>
                <li>× PDFs extensos para reler</li>
                <li>× Mais tempo diante da tela</li>
                <li>× Difícil manter todos os dias</li>
                <li>× Revisões deixadas para depois</li>
              </ul>
            </article>
            <article className="compare-new">
              <span className="compare-label">Memória Musical</span>
              <h3>Acompanha o que você já faz.</h3>
              <ul>
                <li>✓ Faixas rápidas por disciplina</li>
                <li>✓ Ouça pelo celular</li>
                <li>✓ Mais contato com os conteúdos</li>
                <li>✓ Fácil de repetir na rotina</li>
              </ul>
            </article>
          </div>
          <p className="disclaimer-inline">
            O método é complementar: não substitui aulas, leitura ou resolução de questões.
          </p>
        </div>
      </section>

      <section className="bonuses section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">No plano completo</span>
              <h2>Três recursos para transformar revisão em preparação.</h2>
            </div>
            <p>Ouça, priorize o que estudar, pratique e mantenha o ritmo com outros alunos.</p>
          </div>
          <div className="bonus-grid">
            {bonuses.map((bonus) => (
              <article key={bonus.title}>
                <img src={bonus.image} alt={`Capa: ${bonus.title}`} />
                <div className="bonus-copy">
                  <span>Bônus {bonus.number}</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.text}</p>
                  <strong>Incluído no Plano Completo</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials section soft">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Experiência de alunas</span>
            <h2>Veja os relatos de quem incluiu as músicas na rotina.</h2>
          </div>
          <div className="testimonial-grid">
            {[
              ["depoimento-juliana.webp", "Depoimento de Juliana Rocha"],
              ["depoimento-camila.webp", "Depoimento de Camila Santos"],
              ["depoimento-amanda.webp", "Depoimento de Amanda Ferreira"],
            ].map(([image, alt]) => (
              <figure key={image}><img src={`/media/${image}`} alt={alt} /></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section" id="oferta">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Escolha seu acesso</span>
            <h2>Comece pelo essencial ou leve a preparação completa.</h2>
            <p>Pagamento único e acesso liberado após a confirmação.</p>
          </div>
          <div className="price-grid">
            <article className="price-card">
              <span className="plan-tag">Plano Essencial</span>
              <h3>Para começar a revisar com música</h3>
              <div className="price"><small>R$</small><strong>19</strong><small>,90</small></div>
              <p className="payment">pagamento único</p>
              <ul>
                <li>✓ Método da Memória Musical</li>
                <li>✓ Trilhas com assuntos essenciais</li>
                <li>✓ Acesso pelo celular e computador</li>
                <li>✓ Acesso imediato</li>
              </ul>
              <a
                className="button secondary"
                href={essentialCheckout}
                data-goatcounter-click="checkout-plano-essencial-19-90"
                data-goatcounter-title="Clique no checkout — Plano Essencial R$ 19,90"
                data-goatcounter-no-session="1"
              >
                Quero o Plano Essencial <span>→</span>
              </a>
            </article>

            <article className="price-card featured">
              <span className="popular">Melhor escolha</span>
              <span className="plan-tag">Plano Completo</span>
              <h3>Todo o método e todos os bônus</h3>
              <div className="price"><small>R$</small><strong>29</strong><small>,90</small></div>
              <p className="payment">pagamento único</p>
              <p className="installments">ou 5x de R$ 6,63</p>
              <ul>
                <li>✓ Biblioteca completa de músicas</li>
                <li>✓ Checklist dos assuntos mais cobrados</li>
                <li>✓ Banco de questões comentadas</li>
                <li>✓ Comunidade exclusiva</li>
                <li>✓ Novas músicas e atualizações</li>
                <li>✓ Suporte</li>
              </ul>
              <a
                className="button primary"
                href={completeCheckout}
                data-goatcounter-click="checkout-plano-completo-29-90"
                data-goatcounter-title="Clique no checkout — Plano Completo R$ 29,90"
                data-goatcounter-no-session="1"
              >
                Quero acesso completo <span>→</span>
              </a>
            </article>
          </div>
          <p className="secure-note">🔒 Compra segura · Liberação imediata · Garantia de 30 dias</p>
        </div>
      </section>

      <section className="guarantee section dark">
        <div className="wrap guarantee-grid">
          <div className="guarantee-seal"><strong>30</strong><span>DIAS</span></div>
          <div>
            <span className="eyebrow light">Risco reduzido</span>
            <h2>Ouça, explore e veja se o método cabe na sua rotina.</h2>
            <p>
              Você tem 30 dias para experimentar. Se perceber que o Método da
              Memória Musical não faz sentido para você, basta solicitar o reembolso.
            </p>
            <strong>O risco fica do nosso lado.</strong>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="wrap narrow">
          <div className="section-heading">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o play, tire suas dúvidas.</h2>
          </div>
          <div className="faq-list">
            {[
              [
                "1. O que é o Método da Memória Musical®?",
                "O Método da Memória Musical® é uma forma diferente de complementar seus estudos para concursos de Enfermagem. Em vez de depender apenas de PDFs e videoaulas, você também revisa os conteúdos por meio de músicas criadas com base nos principais assuntos cobrados nos editais.",
              ],
              [
                "2. O Método da Memória Musical® substitui PDFs, videoaulas ou cursos?",
                "Não.\n\nEle foi desenvolvido para complementar sua preparação. Você continua estudando pelos materiais tradicionais e utiliza as músicas para reforçar e revisar os conteúdos de forma prática durante a rotina.",
              ],
              [
                "3. Como estudar ouvindo música pode ajudar?",
                "As músicas permitem que você mantenha contato frequente com os conteúdos já estudados, aproveitando momentos em que normalmente não estaria revisando, como no carro, caminhando, fazendo tarefas de casa ou nos intervalos do trabalho.",
              ],
              [
                "4. Funciona mesmo para quem trabalha em plantão?",
                "Sim.\n\nO método foi pensado justamente para quem tem pouco tempo disponível. Como as músicas podem ser ouvidas em diferentes momentos do dia, fica mais fácil incluir revisões na rotina sem precisar passar horas extras sentado estudando.",
              ],
              [
                "5. Nunca consegui decorar nada com música. Mesmo assim vale a pena?",
                "Sim.\n\nVocê não precisa cantar nem ter facilidade musical. As músicas funcionam como uma ferramenta complementar de revisão. Muitas pessoas percebem que a combinação entre ritmo e repetição torna o contato com o conteúdo mais frequente e agradável.",
              ],
              [
                "6. As músicas são baseadas no edital?",
                "Sim.\n\nOs conteúdos são produzidos com foco nos assuntos mais recorrentes dos concursos de Enfermagem, ajudando você a revisar temas que costumam aparecer nas provas.",
              ],
              [
                "7. Para quais concursos o método serve?",
                "O Método da Memória Musical® foi desenvolvido para concursos da área da Enfermagem. Como cada edital possui suas particularidades, ele deve ser utilizado como complemento à preparação específica para o concurso que você pretende prestar.",
              ],
              [
                "8. Sou iniciante. Esse método é para mim?",
                "Sim.\n\nSe você está começando agora, as músicas ajudam a reforçar o conteúdo desde o início dos estudos. E, se já estuda há algum tempo, elas podem complementar sua rotina de revisões.",
              ],
              [
                "9. Tenho pouco tempo para estudar. Ainda vale a pena?",
                "Sim.\n\nUma das maiores vantagens do método é justamente permitir que você aproveite momentos do dia que normalmente seriam improdutivos para reforçar os conteúdos já estudados.",
              ],
              [
                "10. Posso acessar pelo celular?",
                "Sim.\n\nVocê poderá acessar a plataforma pelo celular, tablet ou computador, estudando de onde estiver.",
              ],
              [
                "11. O acesso é imediato?",
                "Sim.\n\nApós a confirmação do pagamento, seu acesso é liberado e você já pode começar a utilizar a plataforma.",
              ],
              [
                "12. Vou receber atualizações?",
                "Sempre que novos conteúdos forem adicionados dentro do período de acesso do seu plano, eles ficarão disponíveis na plataforma conforme as condições da oferta.",
              ],
              [
                "13. E se eu não gostar?",
                "Você conta com uma garantia de 7 dias.\n\nAssim, poderá conhecer a plataforma e decidir com tranquilidade se o Método da Memória Musical® faz sentido para a sua preparação.",
              ],
              [
                "14. Preciso estudar todos os dias ouvindo música?",
                "Não.\n\nAs músicas são uma ferramenta para complementar suas revisões. Você pode utilizá-las nos momentos que fizerem sentido para a sua rotina de estudos.",
              ],
              [
                "15. Em quanto tempo vou perceber resultados?",
                "Cada pessoa possui uma rotina e um ritmo de aprendizado diferentes.\n\nO Método da Memória Musical® foi criado para facilitar suas revisões e complementar sua preparação, mas o desempenho em concursos depende de diversos fatores, como constância, planejamento e dedicação aos estudos.",
              ],
              [
                "16. Como começo depois da compra?",
                "É simples.\n\n1. Finalize sua compra.\n2. Receba o acesso imediatamente.\n3. Entre na plataforma.\n4. Escolha a playlist do assunto que deseja revisar.\n5. Comece a estudar utilizando o Método da Memória Musical®.",
              ],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap narrow">
          <span className="eyebrow light">Sua próxima revisão pode começar agora</span>
          <h2>Deixe a matéria acompanhar você — e não o contrário.</h2>
          <p>Escolha o plano que combina com sua preparação e receba o acesso imediatamente.</p>
          <a className="button primary" href="#oferta">Quero começar agora <span>↑</span></a>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <a className="brand" href="#inicio"><span className="brand-mark">♪</span><span>MEMÓRIA MUSICAL</span></a>
          <p>© 2026 Método da Memória Musical. Todos os direitos reservados.</p>
          <p className="legal">Este produto é um recurso complementar de revisão e não garante aprovação. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p>
        </div>
      </footer>
    </main>
  );
}
