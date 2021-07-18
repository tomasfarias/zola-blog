// In case you cannot tell, I don't do JS
if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
    document.body.className = 'dark';
} else {
    document.body.className = 'light';
}

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
