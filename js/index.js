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



