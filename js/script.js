const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


// Abrir e fechar menu no celular
menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


// Fechar menu depois de clicar em uma opção
navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


// Ano automático no rodapé
const year = document.getElementById("year");

year.textContent = ` • ${new Date().getFullYear()}`;
