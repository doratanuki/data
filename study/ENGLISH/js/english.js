//===============================
//          HTML追加
//===============================
function make_frame(){
    $(".blog-frame > .blog-title").before('<div class="btn"><span></span><span></span></div>');
    $(".blog-frame").each(function(){
      $(this).children(".btn, .blog-title").wrapAll('<div class="blog-title-btn"></div>')
      $(this).children(".blog-text, .day").wrapAll('<div class="blog-content"></div>')
    });
}

//===============================
//          SHOW＆HIDE
//===============================
function show_hide(){
    $(".blog-title-btn").on("click",function(){
      $(this).siblings(".blog-content").slideToggle();
      $(this).contents(".btn").toggleClass("close");
    });
}

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
    make_frame();
    show_hide();
    $('.random').click(function(){
        close_all();
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
