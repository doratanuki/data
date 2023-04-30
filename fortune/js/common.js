function random(){
  var random = Math.floor(Math.random() * 100)
  $(".probability").text(random);
  if(random < 22){
    $('.num1').fadeIn(1000);
    $('.num1 > p').delay(1300).fadeIn(1000);
  }  else if (random < 30){
    $(".num2").fadeIn(1000)
    $('.num2 > p').delay(1300).fadeIn(1000);
  }  else if (random < 42){
    $(".num3").fadeIn(1000)
    $('.num3 > p').delay(1300).fadeIn(1000);
  }  else if (random < 67){
    $(".num4").fadeIn(1000)
    $('.num4 > p').delay(1300).fadeIn(1000);
  }  else if (random < 81){
    $(".num5").fadeIn(1000)
    $('.num5 > p').delay(1300).fadeIn(1000);
  }  else if (random < 95){
    $(".num6").fadeIn(1000)
    $('.num6 > p').delay(1300).fadeIn(1000);
  }  else {
    $(".num7").fadeIn(1000)
    $('.num7 > p').delay(1300).fadeIn(1000);
  }
}

$(function(){
  $(".fortune").on("click",function(){
    $("li ,p").hide()
    random();
  });
});