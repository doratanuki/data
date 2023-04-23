//===============================
//          RANDOMボタン
//===============================
function random(){
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
}

//===============================
//          CLOSEボタン
//===============================
function close_all(){
    $(".blog-content").slideUp()
    $(".btn").removeClass("close")
    $(".header-menu").removeClass('panelactive');
}

//===============================
//          REVERSEボタン
//===============================
function reverse(){
    $(".blog-frame").each(function(){
        var title = $(this).find(".blog-title").text()
        var text = $(this).find(".blog-text").text()
        $(this).find(".blog-title").text(text);
        $(this).find(".blog-text").text(title);
    });
    $(".header-menu").removeClass('panelactive');
}

//===============================
//          DELETEボタン
//===============================
function delete_text(){
    $(".blog-title").after('<div class="delete"><span></span><span></span></div>')
    $(".delete").on("click",function(){
        $(this).parents(".blog-frame").hide()
    });
}


//===============================
//             発火
//===============================
$(function(){
    $('.random').click(function(){
        random();
    });
    $('.close-all').click(function(){
        close_all();
    });
    $('.reverse').click(function(){
        close_all();
        reverse();
    });
    delete_text();
});