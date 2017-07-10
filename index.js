$(function(){
    $('.menu').on('click',function(){
        $('.content').fadeOut('slow');
        $('#title').animate({left: '100px', top: '100px', fontSize: '100px'}, 1000);
        $('#list').animate({fontSize: '100px', left: '50%'}, 1000);
    });
    $('#about').on('click', function(){
        $('#work').fadeOut('slow');
        $('#art').fadeOut('slow');
        $('#list').animate({
            letterSpacing: '50px',
            fontSize: '50px',
            bottom: 0,
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
            letterSpacing: '50px',
            fontSize: '50px',
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
     $('#backdrop').animate({
            left: '50%',
            top: '50%'
        }, 800);
        $('#one').animate({
            top: '50%',
            left: '50%'
        }, 1000);
        $('#two').animate({
            left: '50%',
            top: '50%'
        }, 1200);
        $('#name').animate({
            opacity: '1'
        },1500);
});