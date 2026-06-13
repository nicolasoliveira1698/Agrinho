# 🌿 Raízes do Futuro

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

> **Raízes do Futuro** é uma plataforma web interativa desenvolvida para conscientização ecológica e práticas sustentáveis. O projeto une uma interface visualmente rica e imersiva a recursos robustos de acessibilidade e gamificação.

---

## 📌 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Destaques do Design e Interface](#-destaques-do-design-e-interface)
- [Funcionalidades de Acessibilidade](#-funcionalidades-de-acessibilidade)
- [O Minigame: Recuperação de Solo](#-o-minigame-recupera%C3%A7%C3%A3o-de-solo)
- [Arquitetura de Arquivos](#-arquitetura-de-arquivos)
- [Como Executar](#-como-executar)
- [Como Expandir o Projeto](#-como-expandir-o-projeto)
- [Autor](#-autor)

---

## 📋 Sobre o Projeto

O EcoFarm foi idealizado para ser mais do que um site informativo. Ele desafia os padrões tradicionais de design ao adotar uma estética baseada no *Luxury Green* — combinando tons profundos de verde-floresta, elementos em papel envelhecido (`--paper`) e detalhes em ouro dourado (`--gold`). 

O objetivo principal é engajar o usuário através da interatividade, demonstrando que páginas focadas em sustentabilidade podem ser elegantes, tecnológicas e acessíveis ao mesmo tempo.

---

## ✨ Destaques do Design e Interface

* **Smooth Preloader:** Animação baseada inteiramente em CSS nativo que simula o crescimento de uma planta germinando a partir do solo antes de revelar a aplicação.
* **Welcome Overlay:** Uma tela de introdução com efeito *Glassmorphism* (desfoque de fundo via `backdrop-filter` e opacidade controlada) que prepara o usuário para a experiência imersiva.
* **Scroll Animado:** Componentes textuais e cartões utilizam a API `IntersectionObserver` do JavaScript para realizar um efeito suave de *fade-up* assim que entram na área visível da tela.
* **Responsividade Avançada:** Layout totalmente adaptável via Grid e Flexbox, reestruturando menus, a linha do tempo e os cartões para uma experiência perfeita em smartphones e tablets.

---

## ♿ Funcionalidades de Acessibilidade

O projeto foi construído pensando na inclusão digital, contando com ferramentas em tempo real que não recarregam a página:

| Recurso | Descrição | Implementação |
| :--- | :--- | :--- |
| **Resizing de Texto** | Permite aumentar ou diminuir a fonte do corpo do site entre 80% e 140%. | Manipulação dinâmica de `body.style.fontSize` via JS. |
| **Alto Contraste** | Altera as cores de fundo para preto absoluto e textos/bordas para amarelo brilhante. | Injeção da classe `.high-contrast` no escopo global. |
| **Internacionalização** | Tradução instantânea de todo o conteúdo estrutural entre PT-BR e EN-US. | Uso de seletores baseados em atributos `data-pt` e `data-en`. |

---

## 🎮 O Minigame: Recuperação de Solo

Para reforçar o conceito de sustentabilidade, a página integra um simulador em formato de jogo de tabuleiro 5x5 (`#gameGrid`).

```text
⚙️ Mecânica do Jogo:
[ Escolha uma ferramenta ] ➡️ 💧 Água / 🌱 Fertilizante / 🐞 Joaninha
[ Clique nos blocos secos ] ➡️ Transforma a terra árida em solo fértil
[ Objetivo ]              ➡️ Recuperar todos os 25 blocos em menos de 60 segundos