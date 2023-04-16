//開閉
$(function(){
  $(document).on('click', '.close-text-input', function(){
      $(".open-close-frame").toggle()
      $(this).text(function(i, text){
        return text === "入力フォームを開く" ? "入力フォームを閉じる" :"入力フォームを開く"
      });
  });
});


//単語入力を反映させる
$(function(){
  for(let i = 1; i <= 8; i++){
    $(`#English-spelling-input${i}`).on('change', function(){
      $(`#English-spelling${i}`).text($(this).val());
    });
    $(`#Japanese-spelling-input${i}`).on('change', function(){
      $(`#Japanese-spelling${i}`).text($(this).val());
    });
  }
});


//選択ボタン(言語選択)
$('#choice1-1').on('click',function(){
    $('.Japanese-spelling').addClass("hide");
    $('.English-spelling').removeClass("hide");
    $('.sec1').show();
});

$('#choice1-2').on('click',function(){
  $('.English-spelling').addClass("hide");
  $('.Japanese-spelling').removeClass("hide");
  $('.sec1').show();
});

//ランダム選択ボタン
$(function(){
  //ランダムON
  $('#choice2-1').click(function(){
    for(let i = 0; i < $('.frames').length; i++){
      //0から要素数-1の整数がランダム生成
      var random = Math.floor(Math.random() * ($('.frames').length - i)) + i
      if(random === i){
        $('.frames').eq(i)
      }else{
        $('.frames').eq(random).insertBefore($('.frames').eq(i))
      }
      console.log(i);
    }
  })
});


//単語帳めくったりする
$(function(){
  $('tr > .English-spelling').click(function(){
      $(this).addClass("hide")
      $(this).siblings(".Japanese-spelling").removeClass("hide")
  });
  $('tr > .Japanese-spelling').click(function(){
    $(this).addClass("hide")
    $(this).siblings(".English-spelling").removeClass("hide")
  });
});



//============================
//     スライドしたら非表示
//============================

$(document).ready(function() {
  var startX, startY, dist, threshold = 100,
    allowedTime = 300, elapsedTime, startTime;

  $("tr > td").on("touchstart", function(e) {
    var touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // スワイプ開始時刻を記録
  });

  $("tr > td").on("touchend", function(e) {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;

    // スワイプ時間が許可範囲内か
    if (elapsedTime <= allowedTime) {
      // スワイプが範囲以上か
      if (Math.abs(dist) >= threshold) {
        if (dist < 0) {
          // 左にスワイプされた場合の処理
          $(e.target).addClass("hide")
        }
      }
    }
  });
});
