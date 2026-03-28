// script.js - Funcionalidade de Dark/Light Mode

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    // Função para alternar tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
    });

    // Adicionar navegação aos perfis
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        profile.addEventListener('click', () => {
            const profileName = profile.querySelector('figcaption').textContent;
            const profileImage = profile.querySelector('img').src;
            
            localStorage.setItem('perfilAtivoNome', profileName);
            localStorage.setItem('perfilAtivoImagem', profileImage);
            
            window.location.href = './catalogo/catalogo.html';
        });
    });
});