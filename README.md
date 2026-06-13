# Agrinho
# 🌿 Raízes do Futuro

> Um site interativo e responsivo focado em sustentabilidade, conscientização ecológica e acessibilidade.

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um trabalho acadêmico/pessoal para demonstrar a aplicação de boas práticas de desenvolvimento web de front-end. O site conta com uma tela de carregamento animada, uma tela de boas-vindas com desfoque de fundo (*backdrop-filter*), contadores numéricos animados e um minigame interativo focado na recuperação de solos.

O design foi construído com uma paleta de cores voltada para a natureza (tons de verde, escuros e dourado), garantindo uma experiência visual imersiva e elegante.

---

## 🚀 Funcionalidades Principais

* **Animação de Loading:** Uma planta estilizada em CSS que cresce antes de liberar o acesso à página.
* **Minigame Ecológico:** Uma grade interativa 5x5 onde o usuário utiliza ferramentas (Água, Fertilizante e Joaninhas) para salvar uma fazenda antes que o tempo de 60 segundos acabe.
* **Acessibilidade Integrada:**
    * Controle de tamanho de fonte (Aumentar/Diminuir texto).
    * Modo de Alto Contraste para usuários com baixa visão.
* **Internacionalização:** Suporte dinâmico para os idiomas Português (BR) e Inglês (EN).
* **Efeitos Visuais Dinâmicos:** Elementos que surgem na tela conforme o usuário rola a página (*Scroll Animation* com `IntersectionObserver`).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de todo o conteúdo.
* **CSS3:** Estilização avançada, uso de variáveis, animações nativas (`@keyframes`) e responsividade (`@media queries`).
* **JavaScript (ES6+):** Lógica do minigame, manipulação da DOM, sistema de tradução e recursos de acessibilidade.

---

## 📂 Estrutura de Arquivos

O projeto está organizado de forma simples e direta:

```text
├── index.html      # Estrutura principal e conteúdo do site
├── style.css       # Estilizações, animações e responsividade
├── script.js      # Lógica do jogo, acessibilidade e traduções
└── README.md       # Documentação do projeto (este arquivo)