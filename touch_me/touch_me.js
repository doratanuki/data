$(document).ready(function() {
  var startX, startY, dist, threshold = 150,
    allowedTime = 300, elapsedTime, startTime;

  $(".box").on("touchstart", function(e) {
    var touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // スワイプ開始時刻を記録
    e.preventDefault();
    $(".startX").text(startX)
    $(".startY").text(startY)
    $(".startT").text(startTime)
  });

  $(".box").on("touchmove", function(e) {
    e.preventDefault(); // デフォルトのスクロールを禁止
  });

  $(".box").on("touchend", function(e) {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;
    $(".endX").text(touchobj.pageX)
    $(".endY").text(touchobj.pageY)
    $(".endT").text(new Date().getTime())
    $(".moveX").text(dist)
    $(".moveY").text(touchobj.pageY - startY)
    $(".moveT").text(elapsedTime)


    // スワイプ時間が許可範囲内か
    if (elapsedTime <= allowedTime) {
      // スワイプが範囲以上か
      if (Math.abs(dist) >= threshold) {
        if (dist > 0) {
          // 右にスワイプされた場合の処理
          $(".box").removeClass("left");
          $(".box").addClass("right");
        } else {
          // 左にスワイプされた場合の処理
          $(".box").removeClass("right");
          $(".box").addClass("left");
        }
      }
    }

    e.preventDefault();
  });
});
