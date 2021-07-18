// Set darkmode
document.getElementById('mode').addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});
