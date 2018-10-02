$(document).ready(function() {

    var bgImages = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", ];
    var count = bgImages.length
    var ticker = 1;
    var time = 0;

    var message = "Welcome"
    var name = "to my despair"
    var date = new Date();
    
    $("#text").text(message + " " + name + ",");
    $("#date").text(date);

   function screensaver() {
        var url = "url(" + bgImages[ticker] + ")";
        $("#screensaver").css("background-image", url);

        var tickerText = ticker + "/" + count;
        $("#ticker").text(tickerText);

        ticker+=1;
        if(ticker == count) {
            ticker = 1;
        }
}

//screensaver();



})