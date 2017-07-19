$(function(){
    $('.menu').on('click',function(){
        $('.content').fadeOut('slow');
        $('#up').fadeOut('slow');
        $('#base').fadeOut('slow');
        $('#side').fadeOut('slow');
        $('#backdrop').fadeOut('slow');
        $('#title').animate({left: '60px', top: '60px', fontSize: '30px', lineHeight: '30px'}, 1000);
        $('#list').animate({fontSize: '10vh', left: '50%', lineHeight: '10vh'}, 1000);
    });
    $('#about').on('click', function(){
        $('#about').css({
            'text-decoration': 'line-through',
            'color' :'rgb(253, 199, 0)'
        });
        $('#up').fadeOut('slow');
        $('#side').fadeOut('slow');
        setTimeout(function(){window.location.href = "about.html";}, 1200);
    });
    $('#work').on('click', function(){
        $('#up').fadeOut('slow');
        $('#work').css({
            'text-decoration': 'line-through',
            'color' :'rgb(253, 199, 0)'
        });
        $('#base').fadeOut('slow'); 
        setTimeout(function(){window.location.href = "work.html";}, 1200);
    });
    $('#art').on('click', function(){
        $('#base').fadeOut('slow');
        $('#side').fadeOut('slow');
        $('#art').css({
            'text-decoration': 'line-through',
            'color' :'rgb(253, 199, 0)'
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

    $('#first').on('click',function(){
        $('#avatar').animate({opacity: 1}, 500);
        $('#education').animate({opacity:'0'}, 500);
        $('#language').animate({opacity:'0'}, 500);
    });

    $('#second').on('click',function(){
        $('#avatar').animate({opacity: 0}, 500);
        $('#education').animate({opacity:'1'}, 500);
        $('#language').animate({opacity:'0'}, 500);
    });

    $('#third').on('click',function(){
        $('#avatar').animate({opacity: 0}, 500);
        $('#education').animate({opacity:'0'}, 500);
        $('#language').animate({opacity:'1'}, 500);
    });
});
$(window).on('load',function(){
            $('.preloader').fadeOut();
        })
