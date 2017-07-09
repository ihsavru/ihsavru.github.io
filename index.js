$(function(){
    $('#title').on('click',function(){
        $(this).animate({left: '155px', top: '155px'}, 1000);
        $('#left').animate({ height: '230px'}, 1000);
        $('#right').animate({ height: '245px', left: "230px"}, 1000);
        $('#top').animate({ width: '230px'}, 1000);
        $('#bottom').animate({ top: '230px', width: "245px"}, 1000);
        $('.links').animate({width: '300px',left: '50%', top: '95%'}, 1000);
    });
})