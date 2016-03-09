;(function($){
    $.fn.extend({
        bannerSlider: function(options){
            var self = this;
            if(!self.length){return self;};
            return self.each(function(){
                //设置插件默认值
                options = $.extend({
                    move: "left",
                    slider:{
                        showSlider: "true",
                        showIndex: "true",
                        slParentBg: "rgba(0,0,0,0.5)",
                        slph: "48px",
                        slBg: "rgba(255,0,0,0.2)",
                        slHBg: "rgba(255,255,255,0.8)",
                        slHColor: "#000",
                        slColor: "#fff",
                        slWidth: "24px",
                        slHeight: "24px",
                        slRadius: "50%"
                    },
                    btn: {
                        showBtn: "true",
                        btnWidth: "48px",
                        btnHeight: "48px",
                        btnBg: "url(img/banbtn.png) no-repeat 0 0",
                        posSpace: "25px"
                    }

                },options);
                var $pic = $(this).find('img'),
                    pw = $pic.width(),
                    ph = $pic.height(),
                    len = $(this).children().length,
                    index = 0,
                    picTimer;

                var $this = $(this);
                $this.css({"position":"relative","height":ph+"px","overflow":"hidden"});
                $this.children().wrapAll('<div id="pl" style="width:'+pw*(len+1)+'px;height:'+ph+'px;position:absolute;left:0;top:0;font-size:0"></div>');

                var btn ='';
                if(options.btn.showBtn=="true"){
                    btn += '<span class="sp_prev"></span><span class="sp_next"></span>'
                }
                if(options.slider.showSlider=="true"){
                    btn +='<ul style="position:absolute;background:'+options.slider.slParentBg+';height:'+options.slider.slph+';line-height:'+options.slider.slph+';right:0;bottom:0;width:100%;text-align:right;font-size:0;">';
                    var css = 'width:'+options.slider.slWidth+';height:'+options.slider.slHeight+';background:'+options.slider.slBg+';color:'+options.slider.slColor+';text-align:center;line-height:'+options.slider.slHeight+';margin-right:5px;border-radius:'+options.slider.slRadius+';cursor:pointer;font-size:12px;font-family:Arial;font-size:12px;display:inline-block;*display:inline;*zoom:1'
                    for(var i = 1; i <= len; i++){
                        //btn += '<li>'+ i +'</li>';
                        btn += '<li style="'+css+'">'+ i +'</li>';
                    }
                    btn += '</ul>';
                }
                $this.append(btn);

                var $span = $this.find('span');//左右点击按钮
                var $pl = $this.find('#pl');//动画执行层

                //上下切图按钮样式
                $span.css({"width":options.btn.btnWidth,"height":options.btn.btnHeight,"position":"absolute","top":(ph-parseInt(options.btn.btnHeight))/2+"px","background":options.btn.btnBg,"overflow":"hidden","opacity":"0.1","cursor":"pointer","display":"inline-block","\*display":"inline","\*zoom":"1"});
                $span.filter('.sp_prev').css({"left":options.btn.posSpace,"background-position":"0 0"});
                $span.filter('.sp_next').css({"right":options.btn.posSpace,"background-position":"-"+ options.btn.btnWidth +" 0"});
                //鼠标点击span事件
                $span.on("click",function(){
                    if($(this).hasClass('sp_prev')){
                        index -= 1;
                        if(index == -1){
                            showLasPic();
                            index = len-1;
                        }else{
                            showPics(index);
                        }
                    }else if($(this).hasClass('sp_next')){
                        index += 1;
                        if(index == len){
                            showFirPic();
                            index = 0;
                        }else{
                            showPics(index);
                        }
                    }
                });

                //鼠标移至滑块效果
                $this.find('li').mouseenter(function(){
                    index = $(this).index();
                    showPics(index);
                }).eq(0).trigger("mouseenter");

                //父层动画执行引导
                $this.hover(function(){
                    $span.stop(true,false).animate({"opacity":0.8},500);
                    clearInterval(picTimer);
                },function(){
                    $span.stop(true,false).animate({"opacity":0.1},500);

                    picTimer = setInterval(function(){
                        if(options.move == "left"){
                            index++;//动画运动方向++为左移动--为右移动 此处由外参数控制
                        }else if(options.move == "right"){
                            index--;
                        }

                        if(index == len){
                            showFirPic();
                            index = 0;
                        }else if(index == -1){
                            showLasPic();
                            index = len-1;
                        }else{
                            showPics(index);
                        }
                    },3000);
                }).trigger("mouseleave");

                //动画执行方法
                function showPics(index){
                    slider(index);
                    $pl.stop(true,false).animate({"left":-index*pw},500);
                }
                //动画执行到最后时跳转至第一个图层方法
                function showFirPic(){
                    $pl.append($pl.children().first().clone());
                    $pl.stop(true,false).animate({"left":-index*pw},500,function(){
                        $pl.css("left","0");
                        $pl.children().last().remove();
                    });
                    slider(0);
                }
                //动画向上执行到第一个时跳转至第一个
                function showLasPic(){
                    $pl.children().last().clone().insertBefore($pl.children().first());
                    $pl.css("left",-(pw)+"px");
                    $pl.stop(true,false).animate({"left":0*pw},500,function(){
                        $pl.css("left",(-(len-1)*pw)+"px");
                        $pl.children().first().remove();
                    });
                    slider(len-1);
                }
                //滑块效果
                function slider(index){
                    $this.find('li').css({"background":options.slider.slBg,"color":options.slider.slColor}).eq(index).css({"background":options.slider.slHBg,"color":options.slider.slHColor});
                }
            });
        }
    });
})(jQuery);