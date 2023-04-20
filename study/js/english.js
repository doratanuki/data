$(function(){
    //RANDOM
    //ランダム生成
    $('.random').click(function(){
        for(let i = 0; i < $('.blog-frame').length; i++){
            //0から要素数-1の整数がランダム生成
            var random = Math.floor(Math.random() * ($('.blog-frame').length - i)) + i
            if(random === i){
            $('.blog-frame').eq(i)
            }else{
            $('.blog-frame').eq(random).insertBefore($('.blog-frame').eq(i))
            }
            console.log(i);
        }
        $(".header-menu").removeClass('panelactive');
    })

    //CLOSE ALL
    $('.close-all').click(function(){
        $(".blog-content").slideUp()
        $(".btn").removeClass("close")
        $(".header-menu").removeClass('panelactive');
    })
});


  //============================
//     スライドしたら非表示
//============================
$(function(){
    $(".blog-title").after('<div class="delete"><span></span><span></span></div>')
    $(".delete").on("click",function(){
        $(this).parents(".blog-frame").hide()
    })
})