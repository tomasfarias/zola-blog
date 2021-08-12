// In case you cannot tell, I don't do JS
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const btn = document.querySelector(".btn");

if (localStorage.getItem('theme') === 'dark' || prefersDarkScheme.matches) {
    document.body.className = 'dark';
} else {
    document.body.className = 'light';
}

btn.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark' || prefersDarkScheme.matches) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});
