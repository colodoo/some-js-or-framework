/**
 * Created by Administrator on 2016/6/22.
 */

window.onload = function(){
    var container = $("#container");
    var player = $(document.createElement('div'));
    var cursourShadow = $(document.createElement('div'));
    player.attr('id','player');
    //player.attr('src','image/RoleAction/Yangpa.spr/Yangpa_0.bmp');
    container.css({
        'background':'url(image/Map/SevenStartHall_0.bmp) no-repeat'
    });
    player.css({
        'background':'url(image/RoleAction/Yangpa.spr/Yangpa_0.bmp) no-repeat'
    });
    cursourShadow.attr('id','cursourShadow');
    //cursourShadow.attr('src','image/RoleAction/CursorShadow.spr/CursorShadow_0.bmp');
    cursourShadow.css({
        'background':'url(image/RoleAction/CursorShadow.spr/CursorShadow_0.bmp) no-repeat'
    });
    container.append(player);
    container.append(cursourShadow);

    //��ʼ����ʽ
    container.css({
        'display':'block',
        'width':'800px',
        'height':'600px'
    });
    player.css({
        'display': 'block',
        'position': 'absolute',
        'width':'80px',
        'height':'80px'
    })
    cursourShadow.css({
        'position':'absolute',
        'display':'none',
        'width':'41px',
        'height':'44px'
    });

    //����Ч������
    //container.animate({left:'200px'}, 5000, function(){
    //    window.console.log('ok');
    //});
    //���ͼƬ
    //var tempImg = $(document.createElement('img'));
    //tempImg.attr('src','http://qlogo4.store.qq.com/qzone/425343603/425343603/100?1412247925');
    //tempImg.css({
    //    'draggable':'false',
    //    'borderRadius':'50px'
    //});
    //container.append(tempImg);
    //���ͼƬ�õķ���
    //container.css({
    //    'background':'url("image/RoleAction/Yangpa.spr/Yangpa_0.bmp") no-repeat'
    //})

    //������ʾ
    var hideButton = $("#hideButton");
    var showButton = $("#showButton");
    var Button = $("#Button");
    hideButton.click(function(){
        container.hide();
});
    showButton.click(function(){
        container.show();
    });
    Button.click(function(){
        container.slideToggle();
    });
    //����ƶ��¼�����
    //$(document).mousemove(function(e){
    //    window.console.log(e.pageX + ", " + e.pageY);
    //    player.css({
    //        'left': e.pageX - (player.width()/2) + 'px',
    //        'top':e.pageY - (player.height()/2) + 'px'
    //    });
    //})
    //$(document).mouseup(function(){
    //    $(document).unbind('mousemove');
    //})

    //����������˸
    container.mousedown(function(e) {
        cursourShadow.css({
            'display':'block',
            'left': e.pageX - cursourShadow.width() + 'px',
            'top': e.pageY - cursourShadow.height() + 'px'
        });
        var i1 = 0;
        var cursourShadowInterval = setInterval(function() {
            cursourShadow.css({
                'background':'url(image/RoleAction/CursorShadow.spr/CursorShadow_' + i1 + '.bmp) no-repeat'
            });
            i1++;
            if(i1 == 7) {
                clearInterval(cursourShadowInterval);
                cursourShadow.css({
                    'display':'none'
                });
            }
        }, 83)

        var isStop = false;

        //�����ܶ�
        var i2 = 0;
        player.css({
            'width':'100px',
            'height':'100px'
        });
        var playerInterval = setInterval(function() {
            player.css({
                'background':'url("image/RoleAction/Yangpa.spr/Yangpa_4' + i2 + '.bmp") no-repeat'
            });
            i2++;
            if(i2 == 5) {
                if (isStop) {
                    clearInterval(playerInterval);
                } else {
                    i2 = 0;
                }
            }


        }, 250)

        //�ƶ�λ��
        player.animate({
            'left': e.pageX - player.width() + 'px',
            'top': e.pageY - player.height() + 'px'
        }, 2000, function(){
            isStop = true
            player.stop(true);
        })
    });


    //��37 �ϡ�38 �ҡ�39 �¡�40
    //�ƶ�DEMO
    //$(document).keydown(function (e) {
    //    var pos = player.position();
    //    var left = pos.left;
    //    var top = pos.top;
    //    //var left = pos.left;
    //    //var top = pos.top;
    //    window.console.log('left:' + left + ' top:' + top);
    //
    //    if(event.which == 37) {
    //        player.attr('src','image/RoleAction/Yangpa.spr/Yangpa_25.bmp');
    //        player.css({
    //            left: (left-5) + 'px'
    //        })
    //    }
    //    if(event.which == 38) {
    //        player.attr('src','image/RoleAction/Yangpa.spr/Yangpa_15.bmp');
    //        player.css({
    //            top: (top-5) + 'px'
    //        })
    //    }
    //    if(event.which == 39) {
    //        player.attr('src','image/RoleAction/Yangpa.spr/Yangpa_25.bmp');
    //        player.css({
    //            left: (left+5) + 'px'
    //        })
    //    }
    //    if(event.which == 40) {
    //        player.attr('src','image/RoleAction/Yangpa.spr/Yangpa_40.bmp');
    //        player.css({
    //            top: (top+5) + 'px'
    //        })
    //    }
    //});

}