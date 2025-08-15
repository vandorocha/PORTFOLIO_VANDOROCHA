    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Alterna visibilidade do menu
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
        toggleButton.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', "false");
        }
    });

    // Fecha ao clicar em qualquer link do menu
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', "false");
        });
    });

    // Acessibilidade: toggle com Enter
    toggleButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            menu.classList.toggle('show');
        }
    });

