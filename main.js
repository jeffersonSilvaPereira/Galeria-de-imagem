$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereço-imagem-nova").val();
        const novoItem =$('<li style= display:none></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imgagem-link">
                <a href="${enderecoDaNovaImagem}" title="ver imgaem em tamanho real" target="_blank">
                    ver imgaem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-imagem-nova').val('')
        $(novoItem).fadeIn(1000);
    })
})

