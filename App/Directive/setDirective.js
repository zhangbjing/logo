/**
 * Created by 你猜 on 2017/10/15.
 */
app.directive('search', function($timeout) {
   return {
       templateUrl: './App/View/temp/setWorld.html',
       controller: 'setController',
       link:function(scope, ele, attr, controller){
            $timeout(function(){
                //tab切换
                $('.header p').on('click', 'a', function(){
                    $(this).addClass('bg').siblings().removeClass('bg')
                });
                //轮播图
                var mySwiper = new Swiper('.logo-box', {
                    autoplay: 1000,
                    loop: true,
                    pagination: '.pagination'
                });
                //点击加载
                $('.ipt').on('click', function(){
                    var str = "";
                    for(var i=0;i<2;i++){
                        str += "<li><p><img src=" + 'Content/img/img_6.gif' + "></p><p>上海大众-全新路途L</p><p>上汽大众-全新旅途L享2年0利率</p><b><span>1元</span><s>1.44万</s></b></li>";
                    }
                    $(".car ul").append(str);
                });
                //iscroll
                var w = document.getElementsByClassName('ison_nav')[0].scrollWidth;
                $('.ison_nav').css({
                    'width': w + 'px'
                })
                var myScroll = new iScroll('ison', {
                    scrollX: true,
                    scrollY: false,
                    hScrollbar: false,
                    vScrollbar: false,
                    vScroll: false
                })
            },100)
       }
   }
});