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

    document.getElementById("textField").textContent = obj.value;
    text.style.display = "block";

}