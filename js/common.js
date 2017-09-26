// JavaScript Document    
$(function(){
    $('#top_button').bind('click', Method.topwindow);//返回顶部
    Method.windscroll();//返回顶部按钮隐藏显示
})

var param={
	navBar : 0
}

Method={
	//返回顶部
	topwindow: function () {
        var top = $(window).scrollTop();
        if (top > 0) {
            $(window).scrollTop(0);
        }
    },
    windscroll: function () {
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= 100 && param.navBar == 0) {
                param.navBar = 1;
                $('#top_button').css('opacity', '1').show(1000);
            }
            else if (scrollTop < 100 && param.navBar == 1) {
                param.navBar = 0;
                $('#top_button').hide(1000);
            }
        });
    },
	//选项卡切换
	tabswitchClick: function (id,cls) {
        $(id).click(function () {
			$(id).parent().removeClass('active');
            $(this).parent().addClass('active');


            var targetNumber = $(id).index(this);
            //背景图片也切换
            $('.page3').css('background','url(image/culturebg03-'+(targetNumber+1)+'.jpg) 50%') ;

            $(cls).hide();
            $(cls+':eq(' + targetNumber + ')').show();
			return false;
        });
   },
    tabinit: function (id,cls) {
    	$(cls).hide();
		$(id).parent().removeClass('active');
        $(id).first().parent().addClass('active');
            $(cls+':eq(' + 0 + ')').show();
		Method.tabswitchClick(id,cls);
    }
}


var winH = $(window).height();
var bigimgH = $('.big-img').height();
$('.mask-bg').height(winH);

