
/*
  Arquivo visual opcional.
  Não altera a lógica do gerador.
  Apenas melhora pequenos detalhes de interface após o carregamento.
*/
document.addEventListener('DOMContentLoaded', function () {
    document.title = 'Mensagens | Gerador';

    const descricao = document.getElementById('descricao');
    if (descricao) {
        descricao.setAttribute('aria-live', 'polite');
    }

    const texto = document.getElementById('texto');
    if (texto) {
        texto.setAttribute('placeholder', 'Sua mensagem aparecerá aqui...');
        texto.setAttribute('aria-label', 'Mensagem gerada');
    }

    document.querySelectorAll('.card button').forEach(function (button) {
        button.setAttribute('type', 'button');
    });
});
