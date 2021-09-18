$(document).ready(function(){
    

$('.title_menu').mouseenter(function(){

    $(this).children('.menu').slideDown(1000)
    $(this).children('.menu').css({'background-color':'rgba(0,0,0,0.1)'})
    
})
$('.title_menu').mouseleave(function(){

    $(this).children('.menu').slideUp(400)
})

//passo a scrivere il codice per attivare il menu hamburger al click sull' hamburger

$('.hamburger i').click(function(){

    $('.menu-hamburger').css({'display':'block'})
})

$('.menu-close i').click(function(){

    $('.menu-hamburger').css({'display':'none'})
})
    
})