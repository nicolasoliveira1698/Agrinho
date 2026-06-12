// Tela de carregamento

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

    }, 2000);

});

// Entrar no site

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    document.getElementById("login-screen").style.display = "none";

    document.getElementById("main-content").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});