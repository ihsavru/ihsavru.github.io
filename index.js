$(function(){
    $('.menu').on('click',function(){
        $('.content').fadeOut('slow');
        $('#backdrop').fadeOut('slow');
        $('#title').animate({left: '60px', top: '60px', fontSize: '30px', lineHeight: '30px'}, 1000);
        $('#list').animate({fontSize: '10vh', left: '50%', lineHeight: '10vh'}, 1000);
    });
    $('#about').on('click', function(){
        $('#work').fadeOut('slow');
        $('#art').fadeOut('slow');
        $('#list').animate({
            letterSpacing: '5vw',
            fontSize: '5vw',
            bottom: '50px'
        }, 1000);
        $('#list').css({
            'text-decoration': 'line-through'
        });
        $('#up').fadeOut('slow');
        $('#side').fadeOut('slow');
        setTimeout(function(){window.location.href = "about.html";}, 1200);
    });
    $('#work').on('click', function(){
        $('#list').fadeOut('slow');
        $('#up').fadeOut('slow');
        $('#base').fadeOut('slow');
        setTimeout(function(){window.location.href = "work.html";}, 1200);
    });
    $('#art').on('click', function(){
        $('#work').fadeOut('slow');
        $('#about').fadeOut('slow');
        $('#list').animate({
            letterSpacing: '5vw',
            fontSize: '5vw',
            top: 0,
        }, 1000);
        $('#base').fadeOut('slow');
        $('#side').fadeOut('slow');
        $('#list').css({
            'text-decoration': 'line-through'
        });
        setTimeout(function(){window.location.href = "art.html";}, 1200);
    });
    $('#title').on('click', function(){
        window.location.href = 'index.html';
    });
    setTimeout(function(){
        $('#backdrop').animate({
            left: '50%',
            top: '50%',
            opacity: '1'
        }, 800);
        $('#one').animate({
            top: '50%',
            left: '50%',
            opacity: '1'
        }, 1000);
        $('#two').animate({
            left: '50%',
            top: '50%',
            opacity: '1'
        }, 1200);
        $('#name').animate({
            opacity: '1'
        },1500);
    },1500);
});