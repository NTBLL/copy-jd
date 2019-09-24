// 顶部广告关闭处理
(function () {
    var close = document.querySelector("i");
    close.addEventListener("click", function () {
        document.querySelector(".top-ad").style.display = "none";
    }, false);
}());

// 头部左边坐标
((function () {
    var currentPosition = document.querySelector(".position").children[1];
    var positions = document.querySelector(".all-position");
    var spans = positions.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        if (currentPosition.title == spans[i].innerText){
            spans[i].style.backgroundColor = "#F10215";
            spans[i].style.color = "#FFFFFF";
        }
    }
    var left = document.querySelector(".left");
    left.addEventListener("mouseover", function () {
        positions.style.display = "block";
    });
    left.addEventListener("mouseout", function () {
        positions.style.display = "none";
    })
})());

// 京东更多信息
((function () {
    var jJd = document.querySelector(".J_jd");
    jJd.addEventListener("mouseover",function () {
        document.querySelector(".my-jd").style.display = "block";
    },false)
    jJd.addEventListener("mouseout",function () {
        document.querySelector(".my-jd").style.display = "none";
    },false)
})());

//企业采购更多信息
((function () {
    var jEnterpirse = document.querySelector(".J_enterprise");
    jEnterpirse.addEventListener("mouseover",function () {
        document.querySelector(".enterprise").style.display = "block";
    },false)
    jEnterpirse.addEventListener("mouseout",function () {
        document.querySelector(".enterprise").style.display = "none";
    },false)
})());

//客服服务更多信息
((function () {
    var jService = document.querySelector(".J_service");
    jService.addEventListener("mouseover",function () {
        document.querySelector(".service").style.display = "block";
    },false)
    jService.addEventListener("mouseout",function () {
        document.querySelector(".service").style.display = "none";
    },false)
})());

//网站导航更多信息
((function () {
    var jWebnav = document.querySelector(".J_webnav");
    jWebnav.addEventListener("mouseover",function () {
        document.querySelector(".webnav").style.display = "block";
    },false)
    jWebnav.addEventListener("mouseout",function () {
        document.querySelector(".webnav").style.display = "none";
    },false)
})());

//京东二维码
((function () {
    var erweima = document.querySelector(".erweima");
    erweima.addEventListener("mouseover",function () {
        document.querySelector(".more-erweima").style.display = "block";
    },false)
    erweima.addEventListener("mouseout",function () {
        document.querySelector(".more-erweima").style.display = "none";
    },false)
})());

//购物车
((function () {
    var cart = document.querySelector(".cart");
    cart.addEventListener("mouseover",function () {
        cart.style.border = "1px solid #F10215";
        cart.style.borderBottom = "0";
        document.querySelector(".dropdown-cart").style.display = "block";

    },false);
    cart.addEventListener("mouseout",function () {
        document.querySelector(".dropdown-cart").style.display = "none";
        cart.style.border = "1px solid #999";
    },false)
})());

//主题左侧导航栏更多信息
((function () {
    var lis = document.getElementsByClassName("left-nav")[0].children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover",liOver,false);
        lis[i].addEventListener("mouseout",liOut,false);
    }
    function liOver() {
        this.getElementsByClassName("nav-more")[0].style.display = "block";
    }
    function liOut() {
        this.getElementsByClassName("nav-more")[0].style.display = "none";
    }
})());

//轮播图实现
((function () {
    var index = 0;
    $(".arr-right").on("click",function () {
        if(index >= $(".images img").length){
            index = 0;
        }else{
            index++;
        }
        $(".images>img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".choose .outer").eq(index).addClass("current").siblings().removeClass("current");
        return false;
    });
    $(".arr-left").on("click",function () {
        if(index < 0){
            index = $(".images img").length - 1;
        }else{
            index--;
        }
        $(".images>img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".choose .outer").eq(index).addClass("current").siblings().removeClass("current");
        return false;
    });
    $(".choose .outer").on("click",function () {
        var i = $(this).index();
        $(".choose .outer").eq(i).addClass("current").siblings().removeClass("current");
        $(".images img").eq(i).stop().fadeIn().siblings().stop().fadeOut();
    });

    var timeId = setInterval(function () {
        $(".arr-right").trigger("click");
    },2000);

    $(".slider").on("mouseover",function () {
        clearInterval(timeId);
    });
    $(".slider").on("mouseout",function () {
       timeId = setInterval(function () {
           $(".arr-right").trigger("click");
       },2000);
    });
})());


//three-image-slider
((function () {
    $(".middle-imgs").on("mouseenter",function () {
        $(".mask").show();
    });
    $(".mask").on("mouseleave",function () {
        $(".mask").hide();
    })

    var index = 0;
    $(".left-slider").on("click",function () {
        if(index < 0){
            index = $(".middle-imgs img").length - 1;
        }else{
            index--;
        }
        $(".middle-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".top-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".bottom-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        return false;
    });
    $(".right-slider").on("click",function () {
        if(index >= $(".middle-imgs img").length){
            index = 0;
        }else{
            index++;
        }
        $(".middle-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".top-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".bottom-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        return false;
    });
})());

