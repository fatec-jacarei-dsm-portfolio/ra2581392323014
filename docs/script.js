const projects = [
  {
    title: "Curso Scrum - Plataforma Educacional",
    image: "assets/thecode.png",
    description: `Esse projeto foi desenvolvido no 1º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), como 
    uma solução educacional alinhada à metodologia ágil Scrum. O objetivo foi criar uma plataforma simples de curso online para 
    introduzir os conceitos, papéis e etapas do Scrum de forma acessível e didática. A aplicação conta com uma 
    interface web desenvolvida com HTML, CSS, JavaScript e o framework Bootstrap, proporcionando uma navegação 
    responsiva e moderna. Atuei como membro do Dev Team, contribuindo diretamente com a estruturação das páginas e na estilização com CSS, garantindo 
    uma experiência visual coerente com a proposta da plataforma. Um dos destaques do projeto foi o desenvolvimento de uma seção com 
    perguntas e respostas, em que os usuários recebiam um certificado simbólico ao final, com base em sua pontuação no quiz sobre Scrum. Esse projeto 
    foi essencial para aplicar, na prática, os conhecimentos iniciais de front-end e também para vivenciar o trabalho em equipe sob uma abordagem ágil.`,
    link: "https://github.com/Team-The-Code/API-1DSM-2023",
    stack: "HTML, CSS, JavaScript, Bootstrap"
  },

  {
    title: "Nutri Wise - Sistema de Controle de Nutrientes",
    image: "assets/nutriwise.png",
    description: `O projeto Nutri-Wise foi desenvolvido no 2º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), com o objetivo de criar uma aplicação web voltada à promoção da saúde e do bem-estar. A plataforma permite que o usuário acompanhe sua alimentação e hábitos saudáveis por meio do controle de nutrientes, cálculo de calorias e monitoramento de atividades físicas. Entre as funcionalidades, estão a criação de cardápios personalizados, o cálculo de IMC, o registro de exercícios com estimativa de calorias perdidas e o controle de metas de peso.

A aplicação foi construída com as tecnologias React, Vite, TypeScript, HTML e CSS, resultando em uma interface moderna, leve e responsiva. Atuei como integrante do Dev Team, contribuindo tanto no front-end quanto no back-end do sistema. No front-end, auxiliei na estruturação e estilização de componentes com React, TypeScript e CSS. No back-end, participei da definição de rotas e da lógica de cálculos relacionados ao controle nutricional e à saúde do usuário.

Esse projeto foi fundamental para aprofundar meus conhecimentos em desenvolvimento full stack com foco em boas práticas, componentização e colaboração em equipe utilizando ferramentas e frameworks modernos.`,
    link: "https://github.com/WiseBuilders/Nutri-Wise",
    stack: "React, Vite, TypeScript, CSS"
  },

  {
    title: "Zen Tech - Plataforma Meteorológica",
    image: "assets/Zentech.png",
    description: `O projeto Zen Tech foi desenvolvido no 3º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), com o propósito de criar uma plataforma voltada à disseminação de dados meteorológicos coletados por estações instaladas no entorno do lago de Furnas. Essa região é conhecida por registrar eventos de vento extremo que, frequentemente, representam riscos significativos, inclusive ocasionando naufrágios. A proposta do sistema foi permitir a visualização gráfica dos dados coletados em tempo real, além de gerar alertas preventivos para informar a população dos 30 municípios ao redor do lago sobre os riscos para navegação.

A aplicação foi construída com React, CSS e MongoDB. Os dados meteorológicos foram puxados diretamente de um banco de dados MySQL disponibilizado pelo estabelecimento parceiro, possibilitando a exibição dinâmica das informações no frontend. Durante o desenvolvimento, atuei como integrante do Dev Team, contribuindo principalmente na camada visual da aplicação. Participei da construção e estilização das interfaces com foco em acessibilidade e clareza das informações. Esse projeto também foi uma oportunidade de aprendizado prático com o uso do banco de dados MongoDB, ampliando minhas habilidades no desenvolvimento de soluções que integram dados reais e funcionalidades de impacto social.
`,
    link: "https://github.com/Viniciusfernandes2/Zen-Tech-Documentacao",
    stack: "React, CSS, MongoDB, MySQL"
  },

  {
    title: "Bio-Alert – Sistema de Detecção de Quedas",
    image: "assets/bioalert.png",
    description: `O Bio-Alert é um sistema desenvolvido no 4º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), 
  com foco na detecção automática de quedas em idosos. O projeto foi idealizado para aumentar a segurança de pessoas 
  da terceira idade que vivem sozinhas, reduzindo o tempo de resposta em emergências.

  A solução utiliza sensores inteligentes embarcados que monitora continuamente os movimentos do usuário. Quando o acelerômetro 
  identifica um padrão compatível com queda, o dispositivo aciona um fluxo automático de comunicação, enviando os dados via Wi-Fi para um aplicativo 
  mobile. Além disso, o sistema dispara alertas para um número previamente cadastrado.

  No desenvolvimento da solução, foi utilizado um conjunto de tecnologias modernas, incluindo React Native, 
  TypeScript, Node.js, C++, e o serviço em nuvem Supabase para autenticação e gerenciamento de dados. Também foi construído um protótipo físico 
  utilizando ESP32, acelerômetro, display e jumpers, permitindo a validação prática do sistema.
  Atuei como Product Owner (PO), contribuindo na organização do backlog, documentação, GitHub e nos testes de funcionamento do sistema.`,
    link: "https://github.com/Viniciusfernandes2/Zen-Tech-ABP4",
    stack: "React Native, TypeScript, Node.js, C++, Supabase"
  },

  {
    title: "Soccer Inspector – Sistema Inteligente de Análise de Desempenho",
    image: "assets/soccer.png",
    description: `O Soccer Inspector foi desenvolvido no 5º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM),
  com o objetivo de criar uma plataforma para análise de desempenho de atletas de futebol, utilizando dashboards,
  análise de dados e Inteligência Artificial.

  A solução permite analisar indicadores físicos, dados históricos de partidas, perfis de atletas e possíveis quedas
  de desempenho. O projeto conta com dashboard web, aplicativo mobile, API backend, banco de dados PostgreSQL e
  módulo de Inteligência Artificial.

  Foram utilizadas tecnologias como React, TypeScript, Vite, TailwindCSS, Node.js, Express, PostgreSQL, Python,
  TensorFlow, Flutter e Dart, além de Git, GitHub e Figma.

  Atuei principalmente no desenvolvimento do front-end, contribuindo com as interfaces e funcionalidades da aplicação.
  Também participei de algumas atividades do back-end e do desenvolvimento mobile utilizando Flutter e Dart,
  ampliando minha experiência com desenvolvimento multiplataforma.`,
    link: "https://github.com/HighTechDSM/ABP_5_DSM",
    stack: "React, TypeScript, Node.js, PostgreSQL, Python, Flutter"
  }
];

let currentIndex = 0;

function renderProjects() {
  const carousel = document.getElementById("carousel");
  const dotsContainer = document.getElementById("carousel-dots");
  carousel.innerHTML = "";
  dotsContainer.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "carousel-card";
    if (index === currentIndex) card.classList.add("active");

    card.innerHTML = `
      <div class="media">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="description">
        <p class="meta">Projeto ${index + 1} de ${projects.length} — ${project.stack}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a class="repo-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
  <svg class="repo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z"/>
  </svg>
  Ver repositório no GitHub
</a>
      </div>
    `;

    carousel.appendChild(card);

    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Ir para o projeto ${index + 1}`);
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderProjects();
    });
    dotsContainer.appendChild(dot);
  });
}

function nextProject() {
  currentIndex = (currentIndex + 1) % projects.length;
  renderProjects();
}

function prevProject() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderProjects();
}

document.addEventListener("DOMContentLoaded", renderProjects);