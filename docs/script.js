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
    link: "https://github.com/Team-The-Code/API-1DSM-2023"
  },
  
  {
    title: "Nutri Wise - Sistema de Controle de Nutrientes",
    image: "assets/nutriwise.png",
    description: `O projeto Nutri-Wise foi desenvolvido no 2º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), com o objetivo de criar uma aplicação web voltada à promoção da saúde e do bem-estar. A plataforma permite que o usuário acompanhe sua alimentação e hábitos saudáveis por meio do controle de nutrientes, cálculo de calorias e monitoramento de atividades físicas. Entre as funcionalidades, estão a criação de cardápios personalizados, o cálculo de IMC, o registro de exercícios com estimativa de calorias perdidas e o controle de metas de peso.

A aplicação foi construída com as tecnologias React, Vite, TypeScript, HTML e CSS, resultando em uma interface moderna, leve e responsiva. Atuei como integrante do Dev Team, contribuindo tanto no front-end quanto no back-end do sistema. No front-end, auxiliei na estruturação e estilização de componentes com React, TypeScript e CSS. No back-end, participei da definição de rotas e da lógica de cálculos relacionados ao controle nutricional e à saúde do usuário.

Esse projeto foi fundamental para aprofundar meus conhecimentos em desenvolvimento full stack com foco em boas práticas, componentização e colaboração em equipe utilizando ferramentas e frameworks modernos.`,
    link: "https://github.com/WiseBuilders/Nutri-Wise"
  },
  
  {
    title: "Zen Tech - Plataforma Meteorológica",
    image: "assets/Zentech.png",
    description: `O projeto Zen Tech foi desenvolvido no 3º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), com o propósito de criar uma plataforma voltada à disseminação de dados meteorológicos coletados por estações instaladas no entorno do lago de Furnas. Essa região é conhecida por registrar eventos de vento extremo que, frequentemente, representam riscos significativos, inclusive ocasionando naufrágios. A proposta do sistema foi permitir a visualização gráfica dos dados coletados em tempo real, além de gerar alertas preventivos para informar a população dos 30 municípios ao redor do lago sobre os riscos para navegação.

A aplicação foi construída com React, CSS e MongoDB. Os dados meteorológicos foram puxados diretamente de um banco de dados MySQL disponibilizado pelo estabelecimento parceiro, possibilitando a exibição dinâmica das informações no frontend. Durante o desenvolvimento, atuei como integrante do Dev Team, contribuindo principalmente na camada visual da aplicação. Participei da construção e estilização das interfaces com foco em acessibilidade e clareza das informações. Esse projeto também foi uma oportunidade de aprendizado prático com o uso do banco de dados MongoDB, ampliando minhas habilidades no desenvolvimento de soluções que integram dados reais e funcionalidades de impacto social.

`,
    link: "https://github.com/Viniciusfernandes2/Zen-Tech-Documentacao"
  },
  
  {
  title: "Bio-Alert – Sistema de Detecção de Quedas",
  image: "assets/bioalert.png",
  description: `
  O Bio-Alert é um sistema desenvolvido no 4º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM), 
  com foco na detecção automática de quedas em idosos. O projeto foi idealizado para aumentar a segurança de pessoas 
  da terceira idade que vivem sozinhas, reduzindo o tempo de resposta em emergências.

  A solução utiliza sensores inteligentes embarcados que monitora continuamente os movimentos do usuário. Quando o acelerômetro 
  identifica um padrão compatível com queda, o dispositivo aciona um fluxo automático de comunicação, enviando os dados via Wi-Fi para um aplicativo 
  mobile. Além disso, o sistema dispara alertas para um número previamente cadastrado.

  No desenvolvimento da solução, foi utilizado um conjunto de tecnologias modernas, incluindo React Native, 
  TypeScript, Node.js, C++, e o serviço em nuvem Supabase para autenticação e gerenciamento de dados. Também foi construído um protótipo físico 
  utilizando ESP32, acelerômetro, display e jumpers, permitindo a validação prática do sistema.
  Atuei como Product Owner (PO), contribuindo na organização do backlog, documentação, GitHub e nos testes de funcionamento do sistema.
  `,
  link: "https://github.com/Viniciusfernandes2/Zen-Tech-ABP4"
}


];

let currentIndex = 0;

function renderProjects() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "carousel-card";
    if (index === currentIndex) card.classList.add("active");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="description">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
      </div>
    `;

    carousel.appendChild(card);
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
