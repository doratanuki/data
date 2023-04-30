$(window).on('load',function(){
    $("#loading-text").delay(5000).fadeOut('slow');
    $("#loading").delay(6000).fadeOut('slow');
    repeat();
});


function loading_animation(){
    for (let i = 0; i < $('p span').length + 1 ; i++) {
        $(`p span:nth-of-type(${i})`).delay(i * 100).animate({top: '-20px'}, 300).animate({top: '0px'}, 300);
    }        
}

function repeat(){
    //最初に1回
    let i = 0;
    loading_animation()
    //2回目からの処理内容
    let next_animation = function(){
        i++;
        console.log(i)
        if(i < 5){
            loading_animation();
        } else{
            clearInterval(time)
        }
    }
    //2回目からの処理実行
    let time = setInterval(next_animation,2000);
}
