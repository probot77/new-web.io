document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-dark");
        themeToggle.textContent = document.body.classList.contains("theme-dark") ? "🌜" : "🌞";
    });

    // Form submission (demo only)
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        form.reset();
    });
});
