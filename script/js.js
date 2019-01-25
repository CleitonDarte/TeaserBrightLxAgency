//------------------------------SCRIPT FOR GOOGLE MAP------------------------------
    function initMap() {
        var myLatLng = {lat: 38.746177, lng: -9.193814};
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: myLatLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Bright Lisbon Agency'
        });
    }
    

$(window).ready(function(){
    
    //------------------------------LOADING DAS PAGINAS------------------------------
    $(window).load(function(){
        $('.load_principal').delay(1500).fadeOut(600);
        $('.loading').fadeOut(600);
    });
    
    //------------------------------COUNDOWN------------------------------
    $('.coundown').countdown('2021/12/25 18:00:00')
        .on('update.countdown', function(event) {
            var format = '%H<span>h</span>%M<span>m</span>%S<span>seg</span>';
            if(event.offset.days > 0) {
                format = '%-d Dia%!d | ' + format;
            }
            if(event.offset.weeks > 0) {
                format = '%-w Semana%!w, ' + format;
            }
            $(this).html(event.strftime(format));
        })
        
        .on('finish.countdown', function(event) {
            $(this).html('Conhece a Bright!');            
            $('.nav_lateral').removeClass('true');
            $('.false').fadeOut(0);
            $('.true').fadeIn();
            
        });
    
    
    //------------------------------ANIMAR SCROLL DA PAGINA COM CLIQUE NO NAV LATERAL------------------------------
    $('.nav_lateral a').click(function(evento){
		
		evento.preventDefault(); //parar a execução do link
        
		var idSection = $(this).attr('href'); //guardar atributo href do link clicado
		var topSection = $(idSection).offset().top; //guardar distancia ao topo da seccao
        var scrollAoClick = topSection - 67.5; //calcular a distancia para onde ira¡
		
		$('html, body').stop().animate({scrollTop:scrollAoClick},800); //animar scroll do body
    });
    
    //------------------------------FECHAR E ABRIR A SUBSCRIÇAO NEWSLETTER------------------------------
    $('.fechar_newsletter').click(function(){
        $('.newsletter_space').fadeOut(200);
    });
    
    $('.open_newsletter').click(function(e){		
		e.preventDefault();
        $('.newsletter_space').fadeIn(200);
    });
    
    
    
    //------------------------------ABRIR MENU MOBILE------------------------------
    $('.botao_mobile_menu').click(function(){
        $('.icone_mobile_menu span').toggleClass('fechar_menu_mobile');
        $('.menu_mobile').fadeToggle();
        $('.main_menu').toggleClass('mobile_menu_aberto');
    });
    
    
    
    //------------------------------QUANDO HÁ UM SCROLL NO SITE------------------------------
    $(window).scroll(function(){
        var scrollActual = $(window).scrollTop();
        var alturaHeader = $('header').outerHeight();
        
        //------------------------------TORNAR MENU FIXO------------------------------
        $('.main_menu').removeClass('main_menu_fixo');
        if(scrollActual >= alturaHeader-68){
            $('.main_menu').addClass('main_menu_fixo');
        }
        
        //------------------------------PARALAX DA IMAGEM DE FUNDO DO HEADER------------------------------
        $('.fundo_header').css({'top':-scrollActual/4});
        
        
    });
    
});
