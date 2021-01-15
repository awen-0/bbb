window.onload = function(){

    $(".nav1").css({"top":"0","transition":".6s","opacity":"1"})

    $(".nav3").css({"opacity":"1","transition":"2s"})

    $(".nav4").css({"opacity":"1","transition":"2s"})


    $(".nav1-2 .sousuo").click(function() {
        $(".nav .nav2").css("opacity","1");
    })
    $(".nav1-2 .sousuo2").click(function() {
        $(".nav .nav2").css("opacity","1");
    })

    $(".nav2-1 .tuichu").click(function() {
        $(".nav .nav2").css("opacity","0");
    })

    $(".nav2-3").mousemove(function() {
            $(".nav2-3").css({
            left:"500px",
            // position:"absolute",
        });
        
    })

    $(".nav2-3").click(function() {
            $(".nav2-3").css({
            left:"0px",
            // position:"absolute",
        });
        
    })

    $(".jieshao").click(function() {
        var top = $(".main2").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    })
    $(".jineng").click(function() {
        var top = $(".main3").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    })
    $(".zuopin").click(function() {
        var top = $(".main4").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    })

    

    $(".nav4 img").click(function() {
			var top = $(".main").offset();
			console.log(top.top);
			var scr = $("body,html").scrollTop();
			console.log(scr);
			// 获取高度 以700毫秒秒的速度实现效果
			$("body,html").animate({scrollTop:top.top},"slow")
        })
        
        $(function() {
			$(".nav4").toggleClass("active");
		})
		

        $(window).scroll(function() {
            var b =$(window).scrollTop();
            console.log(b);
            if(b>=456){
                $(".main2-2-1").css({"left":"0px","transition":".6s","opacity":"1"})
                $(".main2-2-2").css({"right":"0px","transition":".6s","opacity":"1"})
            }
            if(b>400){
                $(".main2-1").css({"opacity":"1","transition":"4s"})
            }
            if(b>1400){
                $(".main3-1").css({"opacity":"1","transition":"4s"})
            }
            if(b>2200){
                $(".main4-1").css({"opacity":"1","transition":"4s"})
            }
            if(b>2300){
                $(".main4-2").css({"opacity":"1","transition":"2s"})
            }
            if(b>=1900){
                $(".dd1").css({"width":"95%"})
                $(".dd2").css({"width":"80%"})
                $(".dd3").css({"width":"75%"})
                $(".dd4").css({"width":"90%"})
                $(".dd5").css({"width":"85%"})
                $(".dd6").css({"width":"65%"})
            }else{
                $(".dd1").css("width","0%",)
                $(".dd2").css("width","0%",)
                $(".dd3").css("width","0%",)
                $(".dd4").css("width","0%",)
                $(".dd5").css("width","0%",)
                $(".dd6").css("width","0%",)
            }
        })
}