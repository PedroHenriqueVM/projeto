// Função para mostrar data e hora atual do sistema
function mostrarDataHora() {
    const agora = new Date(); // Cria um objeto Date com a data e hora atual
    
    // Formata a data: dia/mês/ano
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Mês começa do 0, por isso +1
    const ano = agora.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    
    // Formata a hora: hora:minuto:segundo
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const segundo = String(agora.getSeconds()).padStart(2, '0');
    const horaFormatada = `${hora}:${minuto}:${segundo}`;
    
    // Exibe na página
    document.getElementById('data').textContent = dataFormatada;
    document.getElementById('hora').textContent = horaFormatada;
}

// Chama a função ao carregar a página
mostrarDataHora();

// Atualiza a hora a cada 1 segundo (1000 milissegundos)
setInterval(mostrarDataHora, 1000);