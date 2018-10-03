/* global $ */
function getXkcdComic() {
    var randomComic = Math.floor(Math.random() * 600);
    var myurl= "http://dynamic.xkcd.com/api-0/jsonp/comic/" + randomComic;
    
    $.ajax({
        url : myurl,
        crossDomain: true,
        dataType : "jsonp",
        success : function(parsed_json) {
            console.log(parsed_json);
            document.getElementById("laugh_container").style.background = 'url(' + JSON.stringify(parsed_json["img"]) + ')';
            document.getElementById("laugh_container").style.backgroundRepeat = 'no-repeat';
            document.getElementById("laugh_container").style.backgroundSize = 'contain';
            document.getElementById("laugh_text").innerHTML = '';
            document.getElementById("laugh_text").style.background = 'transparent';
        }
    });
}

function getChuckNorrisJoke() {
    var myurl = "https://api.icndb.com/jokes/random";
    console.log(myurl);
    $.ajax({
        url : myurl,
        crossDomain: true,
        dataType : "json",
        success : function(parsed_json) {
            console.log(parsed_json.value.joke);
            document.getElementById("laugh_text").innerHTML = parsed_json.value.joke;
            document.getElementById("laugh_text").style.textAlign = 'center';
            document.getElementById("laugh_text").style.fontSize = '96px';
            document.getElementById("laugh_text").style.fontFamily = 'impact';
            document.getElementById("laugh_text").style.position = 'absolute';
            document.getElementById("laugh_text").style.bottom = 0;
            document.getElementById("laugh_text").style.color = 'white';
            document.getElementById("laugh_text").style.paddingTop = '0';
            document.getElementById("laugh_text").style.left = "10vh";
            document.getElementById("laugh_text").style.right = "10vh";
            document.getElementById("laugh_text").style.backgroundColor = 'transparent';
            document.getElementById("laugh_container").style.background = 'url(chuck_norris.jpg)';
            document.getElementById("laugh_container").style.backgroundRepeat = 'no-repeat';
            document.getElementById("laugh_container").style.backgroundSize = 'cover';
        }
    });
}

function getRandomJoke() {
    var myurl = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
    
    $.ajax({
        url: myurl,
        crossDomain: true,
        dataType: "json",
        success: function(parsed_json) {
            var joke = parsed_json.setup += "\n\n" + parsed_json.punchline;
            document.getElementById("laugh_text").innerHTML = joke;
            document.getElementById("laugh_text").style.textAlign = 'center';
            document.getElementById("laugh_text").style.fontSize = '28px';
            document.getElementById("laugh_text").style.top = "40vh";
            document.getElementById("laugh_text").style.left = "0";
            document.getElementById("laugh_text").style.right = "0";
            document.getElementById("laugh_text").style.color = 'black';
            document.getElementById("laugh_text").style.fontFamily = 'helvetica';
            document.getElementById("laugh_text").style.backgroundColor = 'white';
            document.getElementById("laugh_container").style.background = 'white';
        }
    });
}

function getNextJoke() {
    //Get a random api to search for the joke
    var apiIndex = Math.floor(Math.random() * 3);
    switch(apiIndex) {
        case(0):
            getChuckNorrisJoke();
            break;
        case(1):
            getXkcdComic();
            break;
        case(2):
            getRandomJoke();
            break;
        default:
            getRandomJoke();
            break;
    }
}