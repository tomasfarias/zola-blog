// In case you cannot tell, I don't do JS
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const btn = document.querySelector(".btn");
const theme = document.querySelector("#syntax-theme");

if (localStorage.getItem('theme') === 'dark' || prefersDarkScheme.matches) {
    document.body.className = 'dark';
    theme.href = "syntax-theme-dark.css";
} else {
    document.body.className = 'light';
    theme.href = "syntax-theme-light.css";
}

btn.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark' || prefersDarkScheme.matches) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        theme.href = "syntax-theme-light.css";
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        theme.href = "syntax-theme-dark.css";
        localStorage.setItem('theme', 'dark');
    }
});
