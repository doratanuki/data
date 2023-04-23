//===============================
//      　単語入力　追加
//===============================
function add_input_text(){
    $(".input-frame").append('<div class="input-frame-item"><div><label class="textA"></label><input type="text" class="English-spelling-input"></div><div><label class="textB"></label><input type="text" class="Japanese-spelling-input"></div></div>')
    $(".sec1-table").append('<tr class="frames"><td class="words English-spelling"></td><td class="words Japanese-spelling"></td></tr>');
    
    var t = $(".input-frame-item").length
    $(".input-frame-item:last-of-type").find(".textA").text(`英単語${t}：`)
    $(".input-frame-item:last-of-type").find(".textB").text(`日本語${t}：`)
    $(".frames:last-of-type").find(".English-spelling").text(`ENGLISH${t}`)
    $(".frames:last-of-type").find(".Japanese-spelling").text(`日本語${t}`)

    for (let i = 0; i <= $(".input-frame-item").length; i++){
      //入力部
      $(`.input-frame-item:nth-of-type(${i})`).find(".English-spelling-input").addClass(`English-spelling-input${i}`);
      $(`.input-frame-item:nth-of-type(${i})`).find(".Japanese-spelling-input").addClass(`Japanese-spelling-input${i}`);
      //表示部
      $(`.frames:nth-of-type(${i})`).find(".English-spelling").addClass(`English-spelling${i}`);
      $(`.frames:nth-of-type(${i})`).find(".Japanese-spelling").addClass(`Japanese-spelling${i}`);
    }
}

//===============================
//      　単語入力　削除
//===============================

function delete_input_text(){
  $(".input-frame-item:last-of-type").remove()
  $(".frames:last-of-type").remove()
}

//===============================
//      　単語入力　開閉
//===============================
function show_hide(){
  $(".open-close-frame").slideToggle(500)
  $(".btn-option").text(function(i, text){
    return text === "入力フォームを開く" ? "入力フォームを閉じる" :"入力フォームを開く"
  });
}

//===============================
//      単語入力を反映させる
//===============================

function input_text(){
  for(let i = 0; i <= $(".input-frame-item").length; i++){
    $(`.English-spelling-input${i}`).on('change', function(){
      $(`.English-spelling${i}`).text($(this).val())
    });
    $(`.Japanese-spelling-input${i}`).on('change', function(){
      $(`.Japanese-spelling${i}`).text($(this).val())
    });
  }
}


//===============================
//      選択ボタン(言語選択)
//===============================
function English(){
    $('.Japanese-spelling').addClass("hide");
    $('.English-spelling').removeClass("hide");
}

function Japanese(){
  $('.English-spelling').addClass("hide");
  $('.Japanese-spelling').removeClass("hide");
}

//===============================
//      ランダム選択ボタン
//===============================
function random(){
    for(let i = 0; i < $('.frames').length; i++){
      //0から要素数-1の整数がランダム生成
      var random = Math.floor(Math.random() * ($('.frames').length - i)) + i
      if(random === i){
        $('.frames').eq(i)
      }else{
        $('.frames').eq(random).insertBefore($('.frames').eq(i))
      }
    }
}

//===============================
//          単語帳めくり
//===============================
function change_words(){
  $('tr > .English-spelling').click(function(){
      $(this).addClass("hide")
      $(this).siblings(".Japanese-spelling").removeClass("hide")
  });
  $('tr > .Japanese-spelling').click(function(){
    $(this).addClass("hide")
    $(this).siblings(".English-spelling").removeClass("hide")
  });
}


//===============================
//      スライドしたら非表示
//===============================
function delete_words() {
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
}

//===============================
//              発火
//===============================
$(function(){
  input_text();
  change_words();
  delete_words();
  English()
  $(".btn-option").on("click",function(){
    show_hide();
  });
  $(".btn-Eng").on("click",function(){
    English();
  });
  $(".btn-Jap").on("click",function(){
    Japanese();
  });
  $(".btn-random").on("click",function(){
    random();
  });
  $(".btn-add").on("click",function(){
    add_input_text();
    input_text();
    English();
    change_words();
  });
  $(".btn-delete").on("click",function(){
    delete_input_text();
  });
});