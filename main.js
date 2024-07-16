$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const novaImagem = $('#endereco-nova-imagem').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${novaImagem}">`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${novaImagem}">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem)
            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(1000)
            $('#endereco-nova-imagem').val(' ')
    })

})

