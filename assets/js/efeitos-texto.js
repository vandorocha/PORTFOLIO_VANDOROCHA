const cargos = [
    "Analista de Dados",
    "Desenvolvedor SQL",
    "Especialista em BI",
    "Administrador de Banco de Dados",
    "Engenheiro de Dados"
];

const p = document.querySelector('.typing-loop');
let i = 0;

function fadeLoop() {
    // Apaga texto com fade out
    p.style.opacity = 0;

    setTimeout(() => {
        // Atualiza o texto quando invisível
        p.textContent = cargos[i];
        // Faz fade in
        p.style.opacity = 1;

        // Após manter o texto visível por 2500ms, inicia fade out de novo
        setTimeout(() => {
            i = (i + 1) % cargos.length; // próxima frase, loopando
            fadeLoop();
        }, 2500); // duração do texto visível
    }, 800); // duração do fade out (deve casar com CSS transition)
}

fadeLoop();
