import "./App.css";

function App() {
  return (
    <div className="site">

      {/* =========================
          CABEÇALHO
      ========================== */}
      <header className="header">
        <div className="container header-content">

          <a href="#inicio" className="logo">
            DEV<span>SYS</span>
          </a>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#aprendizado">Aprendizado</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#atuacao">Mercado</a>
            <a href="#projetos">Projetos</a>
          </nav>

        </div>
      </header>


      {/* =========================
          HERO
      ========================== */}
      <main>

        <section id="inicio" className="hero">

          <div className="container hero-content">

            <div className="hero-text">

              <p className="hero-subtitle">
                TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS
              </p>

              <h1>
                Transforme ideias em
                <span> sistemas.</span>
              </h1>

              <p className="hero-description">
                Desenvolva soluções, aprenda novas tecnologias e
                construa seu futuro na área de tecnologia.
              </p>

              <div className="hero-buttons">
                <a href="#sobre" className="btn primary">
                  Conheça o curso
                </a>

                <a href="#tecnologias" className="btn secondary">
                  Tecnologias
                </a>
              </div>

            </div>


            <div className="hero-visual">

              <div className="code-window">

                <div className="window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-content">

                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">futuro</span> = {"{"}
                  </p>

                  <p className="indent">
                    tecnologia:{" "}
                    <span className="green">"inovação"</span>,
                  </p>

                  <p className="indent">
                    criatividade:{" "}
                    <span className="green">true</span>,
                  </p>

                  <p className="indent">
                    aprendizado:{" "}
                    <span className="green">"sempre"</span>
                  </p>

                  <p>{"};"}</p>

                  <p className="code-cursor">
                    █
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SOBRE O CURSO
        ========================== */}
        <section id="sobre" className="section">

          <div className="container">

            <div className="section-title">

              <p className="section-label">
                SOBRE O CURSO
              </p>

              <h2>
                O que é Desenvolvimento de Sistemas?
              </h2>

              <p>
                Aprenda a transformar problemas em soluções
                utilizando programação e tecnologia.
              </p>

            </div>


            <div className="about-grid">

              <div className="about-text">

                <h3>
                  Tecnologia para criar soluções
                </h3>

                <p>
                  Desenvolvimento de Sistemas é uma área voltada
                  para a criação, desenvolvimento e manutenção de
                  sistemas e aplicações.
                </p>

                <p>
                  Durante o curso, o aluno desenvolve conhecimentos
                  em programação, desenvolvimento web, bancos de
                  dados, APIs, aplicativos e versionamento de código.
                </p>

                <p>
                  O objetivo é preparar o estudante para compreender
                  problemas e desenvolver soluções utilizando
                  diferentes tecnologias.
                </p>

              </div>


              <div className="about-card">

                <div className="big-icon">
                  &lt;/&gt;
                </div>

                <h3>
                  Desenvolva seu futuro
                </h3>

                <p>
                  Aprenda conceitos e ferramentas utilizados
                  no desenvolvimento de sistemas.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            O QUE VOCÊ APRENDE
        ========================== */}
        <section id="aprendizado" className="section dark-section">

          <div className="container">

            <div className="section-title light">

              <p className="section-label">
                APRENDIZADO
              </p>

              <h2>
                O que você aprende
              </h2>

              <p>
                Conhecimentos que fazem parte da formação
                em Desenvolvimento de Sistemas.
              </p>

            </div>


            <div className="cards-grid">

              <div className="info-card">
                <div className="card-icon">01</div>
                <h3>Lógica de programação</h3>
                <p>
                  Desenvolva o raciocínio necessário para
                  resolver problemas através da programação.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">02</div>
                <h3>Desenvolvimento Web</h3>
                <p>
                  Crie páginas e aplicações para a internet.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">03</div>
                <h3>Frontend</h3>
                <p>
                  Desenvolva interfaces que os usuários
                  podem visualizar e utilizar.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">04</div>
                <h3>Backend</h3>
                <p>
                  Trabalhe com regras de negócio,
                  servidores e processamento de dados.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">05</div>
                <h3>Banco de dados</h3>
                <p>
                  Aprenda a armazenar e organizar
                  informações de sistemas.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">06</div>
                <h3>APIs</h3>
                <p>
                  Desenvolva e utilize APIs para
                  comunicação entre sistemas.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">07</div>
                <h3>Aplicativos</h3>
                <p>
                  Conheça conceitos relacionados ao
                  desenvolvimento de aplicações.
                </p>
              </div>


              <div className="info-card">
                <div className="card-icon">08</div>
                <h3>Versionamento</h3>
                <p>
                  Utilize ferramentas como Git para
                  controlar a evolução do código.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            TECNOLOGIAS
        ========================== */}
        <section id="tecnologias" className="section">

          <div className="container">

            <div className="section-title">

              <p className="section-label">
                TECNOLOGIAS
              </p>

              <h2>
                Ferramentas e tecnologias
              </h2>

              <p>
                Algumas das tecnologias relacionadas
                ao desenvolvimento de sistemas.
              </p>

            </div>


            <div className="tech-grid">

              <div className="tech-card">
                <span className="tech-symbol">&lt;/&gt;</span>
                <span>HTML</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">#</span>
                <span>CSS</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">JS</span>
                <span>JavaScript</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">⚛</span>
                <span>React</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">N</span>
                <span>Node.js</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">SQL</span>
                <span>SQL</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">G</span>
                <span>Git</span>
              </div>

              <div className="tech-card">
                <span className="tech-symbol">GH</span>
                <span>GitHub</span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            ÁREAS DE ATUAÇÃO
        ========================== */}
        <section id="atuacao" className="section gray-section">

          <div className="container">

            <div className="section-title">

              <p className="section-label">
                MERCADO
              </p>

              <h2>
                Áreas de atuação
              </h2>

              <p>
                O conhecimento em desenvolvimento de sistemas
                pode ser aplicado em diferentes áreas.
              </p>

            </div>


            <div className="career-list">

              <div className="career-item">
                <span>01</span>
                <div>
                  <h3>Desenvolvimento Frontend</h3>
                  <p>
                    Criação de interfaces e experiências para usuários.
                  </p>
                </div>
              </div>


              <div className="career-item">
                <span>02</span>
                <div>
                  <h3>Desenvolvimento Backend</h3>
                  <p>
                    Desenvolvimento da lógica e funcionamento interno
                    das aplicações.
                  </p>
                </div>
              </div>


              <div className="career-item">
                <span>03</span>
                <div>
                  <h3>Desenvolvimento Full Stack</h3>
                  <p>
                    Trabalho envolvendo frontend e backend.
                  </p>
                </div>
              </div>


              <div className="career-item">
                <span>04</span>
                <div>
                  <h3>Desenvolvimento de aplicações</h3>
                  <p>
                    Criação de diferentes tipos de sistemas e aplicações.
                  </p>
                </div>
              </div>


              <div className="career-item">
                <span>05</span>
                <div>
                  <h3>Banco de dados</h3>
                  <p>
                    Organização, armazenamento e gerenciamento
                    de informações.
                  </p>
                </div>
              </div>


              <div className="career-item">
                <span>06</span>
                <div>
                  <h3>Suporte e manutenção</h3>
                  <p>
                    Manutenção e suporte de sistemas existentes.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            PROJETOS
        ========================== */}
        <section id="projetos" className="section">

          <div className="container">

            <div className="section-title">

              <p className="section-label">
                PROJETOS
              </p>

              <h2>
                O que você pode criar?
              </h2>

              <p>
                Exemplos de sistemas que podem ser desenvolvidos
                utilizando conhecimentos de programação.
              </p>

            </div>


            <div className="projects-grid">

              <div className="project-card">
                <div className="project-number">01</div>
                <h3>Sistema de cadastro</h3>
                <p>
                  Sistema para cadastro e gerenciamento
                  de clientes.
                </p>
                <span>CRUD • BANCO DE DADOS</span>
              </div>


              <div className="project-card">
                <div className="project-number">02</div>
                <h3>Sistema de estoque</h3>
                <p>
                  Aplicação para controle e organização
                  de produtos.
                </p>
                <span>WEB • DATABASE</span>
              </div>


              <div className="project-card">
                <div className="project-number">03</div>
                <h3>Agendamentos</h3>
                <p>
                  Sistema para organização de horários
                  e agendamentos.
                </p>
                <span>WEB • API</span>
              </div>


              <div className="project-card">
                <div className="project-number">04</div>
                <h3>Loja virtual</h3>
                <p>
                  Aplicação para apresentação e venda
                  de produtos.
                </p>
                <span>E-COMMERCE • WEB</span>
              </div>


              <div className="project-card">
                <div className="project-number">05</div>
                <h3>Dashboard</h3>
                <p>
                  Painel administrativo para visualização
                  de informações.
                </p>
                <span>REACT • DATA</span>
              </div>


              <div className="project-card">
                <div className="project-number">06</div>
                <h3>Aplicativo de tarefas</h3>
                <p>
                  Aplicação para organizar tarefas
                  e atividades.
                </p>
                <span>APP • JAVASCRIPT</span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CHAMADA PARA AÇÃO
        ========================== */}
        <section className="cta">

          <div className="container cta-content">

            <p className="section-label">
              COMECE AGORA
            </p>

            <h2>
              Seu futuro na tecnologia
              pode começar aqui.
            </h2>

            <p>
              Conheça o curso Técnico em Desenvolvimento
              de Sistemas e comece a construir suas soluções.
            </p>

            <a href="#inicio" className="btn primary">
              Voltar ao início
            </a>

          </div>

        </section>

      </main>


      {/* =========================
          RODAPÉ
      ========================== */}
      <footer className="footer">

        <div className="container footer-content">

          <div>
            <h3>DEV<span>SYS</span></h3>
            <p>
              Técnico em Desenvolvimento de Sistemas
            </p>
          </div>

          <div className="footer-info">
            <p>SENAI</p>
            <p>2026</p>
            <p>Aluno: Pedro Nunes Fagundes</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 - Técnico em Desenvolvimento de Sistemas
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;