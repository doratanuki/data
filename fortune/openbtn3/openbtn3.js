$(function(){
    $(".openbtn").on("click",function(){
        $(this).toggleClass('active');
        $(".open-menu").toggleClass('panelactive');
        $(".open-menu-background").fadeToggle(600);
        $(".open-menu-background").toggleClass('panelactive');

        if ($(".openbtn").hasClass('active')) {
            $(".open-menu-background").on("click",function(){
                $(".openbtn").removeClass('active');
                $(".open-menu").removeClass('panelactive');
                $(".open-menu-background").hide()
                $(".open-menu-background").removeClass('panelactive');
            })
        }
    });

    $(".open-menu-item").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $(".open-menu").removeClass('panelactive');
        $(".open-menu-background").hide()
        $(".open-menu-background").removeClass('panelactive');
    });
});