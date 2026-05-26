function enviarCurriculo() {
    const input = document.getElementById("arquivo");

    const arquivo = input.files[0];

    if (!arquivo) {
        alert("Escolha um arquivo");
        return;
    }

    if (
        arquivo.type != "application/pdf" && 
        arquivo.type !="application/msword" &&
        arquivo.type != "application/VideoEncoder.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        alert("Por favor, selecione arquivo PDF ou Word.");
        return;        
    }

    document.getElementById("information").innerHTML = `
        Concluido com sucesso <br>
        Nome do Arquivo: ${arquivo.name} <br>
        Tipo: ${arquivo.type} <br>
        Tamanho: ${(arquivo.size / 1024).toFixed(2)} KB
    `;

    document.getElementById("download").style.display = "inline-block";
}