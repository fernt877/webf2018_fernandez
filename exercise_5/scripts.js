$(document).ready(function() {

    var bgImages = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", ];
    var count = bgImages.length
    var ticker = 0;
    var time = 0;

    var message = "MAGICAL AS"
    var name = "FUCK"
    var date = new Date();
    
    $("#text").text(message + " " + name + ",");
    $("#date").text(date);

    function screensaver() {
        var url = "url(" + bgImages[ticker] + ")"
        $("#screensaver").css("background-image", url);
        $("#ticker").text((ticker + 1) + "/" + count)
        ticker += 1;
        if (ticker > count - 1) {
            ticker = 0;
        }
    };

//screensaver();

$(document).click(function() {
// screensaver();
})

setInterval(function(){
    screensaver()
}, 5000)

$(document).mousemove(function(){
    ticker = 0;
    time = 0;
    $("#screensaver").css("opacity", 0)
    $("#ticker").css("opacity", 0)
})

setInterval(function(){
    time+=1;
    if(time>2) {
    $("#screensaver").css("opacity", 1)
    $("#ticker").css("opacity", 1)
}
},1000) 

})