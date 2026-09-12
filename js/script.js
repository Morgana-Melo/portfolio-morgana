const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
    const active = nav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", active);
});

document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("contactForm");

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("nome-contato").value.trim();
    const email = document.getElementById("email-contato").value.trim();
    const message = document.getElementById("mensagem").value.trim();

    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:SEU_EMAIL_AQUI?subject=${subject}&body=${body}`;
});
