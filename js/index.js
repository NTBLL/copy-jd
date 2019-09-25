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
        if (currentPosition.title == spans[i].innerText) {
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
    jJd.addEventListener("mouseover", function () {
        document.querySelector(".my-jd").style.display = "block";
    }, false)
    jJd.addEventListener("mouseout", function () {
        document.querySelector(".my-jd").style.display = "none";
    }, false)
})());

//企业采购更多信息
((function () {
    var jEnterpirse = document.querySelector(".J_enterprise");
    jEnterpirse.addEventListener("mouseover", function () {
        document.querySelector(".enterprise").style.display = "block";
    }, false)
    jEnterpirse.addEventListener("mouseout", function () {
        document.querySelector(".enterprise").style.display = "none";
    }, false)
})());

//客服服务更多信息
((function () {
    var jService = document.querySelector(".J_service");
    jService.addEventListener("mouseover", function () {
        document.querySelector(".service").style.display = "block";
    }, false)
    jService.addEventListener("mouseout", function () {
        document.querySelector(".service").style.display = "none";
    }, false)
})());

//网站导航更多信息
((function () {
    var jWebnav = document.querySelector(".J_webnav");
    jWebnav.addEventListener("mouseover", function () {
        document.querySelector(".webnav").style.display = "block";
    }, false)
    jWebnav.addEventListener("mouseout", function () {
        document.querySelector(".webnav").style.display = "none";
    }, false)
})());

//京东二维码
((function () {
    var erweima = document.querySelector(".erweima");
    erweima.addEventListener("mouseover", function () {
        document.querySelector(".more-erweima").style.display = "block";
    }, false)
    erweima.addEventListener("mouseout", function () {
        document.querySelector(".more-erweima").style.display = "none";
    }, false)
})());

//购物车
((function () {
    var cart = document.querySelector(".cart");
    cart.addEventListener("mouseover", function () {
        cart.style.border = "1px solid #F10215";
        cart.style.borderBottom = "0";
        document.querySelector(".dropdown-cart").style.display = "block";

    }, false);
    cart.addEventListener("mouseout", function () {
        document.querySelector(".dropdown-cart").style.display = "none";
        cart.style.border = "1px solid #999";
    }, false)
})());

//主题左侧导航栏更多信息
((function () {
    var lis = document.getElementsByClassName("left-nav")[0].children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover", liOver, false);
        lis[i].addEventListener("mouseout", liOut, false);
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
    $(".arr-right").on("click", function () {
        if (index >= $(".images img").length) {
            index = 0;
        } else {
            index++;
        }
        $(".images>img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".choose .outer").eq(index).addClass("current").siblings().removeClass("current");
        return false;
    });
    $(".arr-left").on("click", function () {
        if (index < 0) {
            index = $(".images img").length - 1;
        } else {
            index--;
        }
        $(".images>img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".choose .outer").eq(index).addClass("current").siblings().removeClass("current");
        return false;
    });
    $(".choose .outer").on("click", function () {
        var i = $(this).index();
        $(".choose .outer").eq(i).addClass("current").siblings().removeClass("current");
        $(".images img").eq(i).stop().fadeIn().siblings().stop().fadeOut();
    });

    var timeId = setInterval(function () {
        $(".arr-right").trigger("click");
    }, 2000);

    $(".slider").on("mouseover", function () {
        clearInterval(timeId);
    });
    $(".slider").on("mouseout", function () {
        timeId = setInterval(function () {
            $(".arr-right").trigger("click");
        }, 2000);
    });
})());


//三组轮播图
((function () {
    $(".middle-imgs").on("mouseenter", function () {
        $(".mask").show();
    });
    $(".mask").on("mouseleave", function () {
        $(".mask").hide();
    })

    var index = 0;
    $(".left-slider").on("click", function () {
        if (index < 0) {
            index = $(".middle-imgs img").length - 1;
        } else {
            index--;
        }
        $(".middle-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".top-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".bottom-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        return false;
    });
    $(".right-slider").on("click", function () {
        if (index >= $(".middle-imgs img").length) {
            index = 0;
        } else {
            index++;
        }
        $(".middle-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".top-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $(".bottom-imgs img").eq(index).stop().fadeIn().siblings().stop().fadeOut();
        return false;
    });
})());


//倒计时
((function () {
    var time = 7200;
    printTime(7200);
    setInterval(printTime, 1000)

    function printTime() {
        var timeObj = parseTime(time);
        $(".time-hfs").eq(0).text(timeObj.h);
        $(".time-hfs").eq(1).text(timeObj.m);
        $(".time-hfs").eq(2).text(timeObj.s);
        if (time == 0) {
            time = 7200;
        }
        time--;
    }
})());


//倒计时货物轮播图01
((function () {
    $(".goods-arr-left").on("click", function () {
        if ($(".goods:animated").length > 0) return;
        var moveLeft = parseInt($(".goods").css("left"));
        if (moveLeft == -2400) {
            $(".goods").css("left", "0px");
            moveLeft = 0;
        }
        moveLeft = moveLeft - 800 + "px";
        $(".goods").stop().animate({left: moveLeft}, 500, "linear");
    });
    $(".goods-arr-right").on("click", function () {
        if ($(".goods:animated").length > 0) return;
        var moveLeft = parseInt($(".goods").css("left"));
        if (moveLeft == 0) {
            $(".goods").stop().css("left", "-2400px");
            moveLeft = -2400;
        }
        moveLeft = moveLeft + 800 + "px";
        $(".goods").stop().animate({left: moveLeft}, 500, "linear");
    });
})());


//倒计时模块右侧轮播图
((function () {
    var oindex = 0;
    $(".circle").on("mouseenter", function () {
        var index = $(this).index();
        var nowLeft = parseInt($(".goods2").css("left"));
        if (nowLeft == 0 && index == 0) return;
        if (nowLeft == -160 && index == 1) return;
        if (index == 1) {
            $(".goods2").stop().animate({left: -180}, 500, "linear");
            $(this).addClass("current").siblings().removeClass("current");
            oindex = 1;
        }
        if (index == 0) {
            $(".goods2").stop().animate({left: 0}, 500, "linear");
            $(this).addClass("current").siblings().removeClass("current");
            oindex = 0;
        }
    });

    var timeId = setInterval(function () {
        if (oindex == 0) {
            oindex = 1;
            $(".goods2").stop().animate({left: -180}, 300, "linear");
            $(".circle").eq(oindex).addClass("current").siblings().removeClass("current");
            return;
        }
        if (oindex == 1) {
            oindex = 0;
            $(".goods2").stop().animate({left: 0}, 300, "linear");
            $(".circle").eq(oindex).addClass("current").siblings().removeClass("current");
            return;
        }
    }, 3000);

    $(".goods2-list").on("mouseenter", function () {
        clearInterval(timeId);
    });
    $(".goods2-list").on("mouseleave", function () {
        timeId = setInterval(function () {
            if (oindex == 0) {
                oindex = 1;
                $(".goods2").stop().animate({left: -180}, 300, "linear");
                $(".circle").eq(oindex).addClass("current").siblings().removeClass("current");
                return;
            }
            if (oindex == 1) {
                oindex = 0;
                $(".goods2").stop().animate({left: 0}, 300, "linear");
                $(".circle").eq(oindex).addClass("current").siblings().removeClass("current");
                return;
            }
        }, 2000);
    });
})());


//格式化时间
function parseTime(time) {
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    var secondes = time;
    hours = hours > 9 ? hours : "0" + hours;
    minutes = minutes > 9 ? minutes : "0" + minutes;
    secondes = secondes > 9 ? secondes : "0" + secondes;
    return {h: hours, m: minutes, s: secondes};
}