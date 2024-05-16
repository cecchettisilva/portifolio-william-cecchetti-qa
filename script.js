$(document).ready(function(){
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Parallax effect
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $('.section').css('background-position-y', -(scroll * 0.2) + 'px');
    });
});

$(document).ready(function(){
    // Função para carregar o conteúdo de outras páginas nas seções correspondentes
    function loadPageContent(page, targetId) {
        $.ajax({
            url: page,
            dataType: "html",
            success: function(data) {
                $(targetId).html(data);
            },
            error: function(xhr, status, error) {
                console.error("Erro ao carregar a página: " + error);
            }
        });
    }

    // Carrega o conteúdo das outras páginas nas seções correspondentes
    loadPageContent("about.html #sobre", "#conteudo-sobre");
    loadPageContent("contact.html #contato", "#conteudo-contato");
    loadPageContent("experiences.html #experiencias", "#conteudo-experiencias");
    loadPageContent("github.html #github", "#conteudo-github");
});

// Mostrar o botão de volta ao topo quando o usuário rolar a página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

// Função para rolar suavemente para o topo da página quando o botão for clicado
function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow'); // Para rolar suavemente
}
