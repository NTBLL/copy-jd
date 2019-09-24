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
