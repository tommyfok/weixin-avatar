$(function() {
    $("#file-input, #unread").change(function(b) {
        var imgRaw = $('#file-input')[0].files[0];
        if (!imgRaw) return;
        $("#result").html('正在处理图像，请稍候...');
        var a = loadImage(imgRaw, function(c) {
            var d = document.createElement("canvas"), e = "getContext" in d ? d.getContext("2d") :null;
            d.width = 300;
            d.height = 300;
            if (e) {
                var unread = $('#unread').val();
                e.drawImage(c, 0, 0, c.width, c.height, 0, 0, 300, 300);
                e.beginPath();
                e.arc(247, 53, 53, 0, Math.PI * 2, true);
                e.fillStyle = "#f00";
                e.fill();
                e.font = "Bold 75px Arial";
                e.fillStyle = "#fff";
                e.textBaseline = "middle";
                e.fillText(unread, 247 - e.measureText(unread).width / 2, 53);
                $("#result").html(dui(d));
                $("#result").show();
            }
        });
    });
    $("#chooseHead").click(function() {
        $("#file-input").trigger("click");
    });
});

function dui(a) {
    var b = new Image();
    b.src = a.toDataURL("image/png");
    return b;
}

WeixinApi.ready(function(a) {
    var b = {
        appId:"",
        imgUrl:"http://tommyfok.github.io/weixin-avatar/example/01.PNG",
        link:"http://tommyfok.github.io/weixin-avatar/",
        desc:document.description || "温馨提示：如过度使用本程序导致被好友拉黑，作者概不负责。",
        title:document.title || "调戏好友的正确姿势"
    };
    var c = {};
    a.shareToFriend(b, c);
    a.shareToTimeline(b, c);
    a.shareToWeibo(b, c);
});
