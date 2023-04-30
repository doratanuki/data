function random(){
  var random = Math.floor(Math.random() * 10000)
  $(".probability").text(random);
  if(random < 1667){
    $('.num1').fadeIn(1000);

  }  else if (random < 3333){
    $(".num2").fadeIn(1000);

  }  else if (random < 5000){
    $(".num3").fadeIn(1000);

  }  else if (random < 6666){
    $(".num4").fadeIn(1000);

  }  else if (random < 8333){
    $(".num5").fadeIn(1000);

  }  else {
    $(".num6").fadeIn(1000);

  }
}

$(function(){
  $(".shake").on("click",function(){
    $(".result > li").hide()
    random();
  });
});