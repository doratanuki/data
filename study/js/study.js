$(function(){
  $(".blog-frame > .blog-title").before('<div class="btn"><span></span><span></span></div>')
  $(".blog-frame").each(function(){
    $(this).children(".btn, .blog-title").wrapAll('<div class="blog-title-btn"></div>')
    $(this).children(".blog-text, .day").wrapAll('<div class="blog-content"></div>')
  })
  
  //ボタンクリックしたとき
  $(".blog-title-btn").on("click",function(){
    $(this).siblings(".blog-content").slideToggle();
    $(this).contents(".btn").toggleClass("close");
  });
});


  
