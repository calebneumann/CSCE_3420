var WildRydes = window.WildRydes || {};


async function displayText(){
    var text = "yo yo yo this is some text!!!"
    //document.getElementById("textField").innerHTML = text;
    //text.style.display = "block";

    var response = await fetch("https://api.chucknorris.io/jokes/random", {
        method: "GET" // default, so we can ignore
    })
    var exam = await response.json();
    
    var poop = JSON.stringify(exam, undefined, 2);
    var obj = JSON.parse(poop);
    var values = Object.values(obj);

            
    var el = document.getElementById('content');
    var content;
    var rand = Math.floor(Math.random() * 10);

    if  (rand >= 0 && rand < 9) {
        document.getElementById("textField").textContent = obj.value + " 0-8";
    }
    else if  (rand == 9) {
        document.getElementById("textField").innerHTML = '<div>HAHA GET RICKROLLED</div><iframe width="280" height="157" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=SXWbX1Ftj_y2tdpO" title="YouTube video player" frameborder="0" allow="accelerometer; &autoplay = 1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

    }

    text.style.display = "block";

}