var WildRydes = window.WildRydes || {};


async function displayText(){
    var text = "yo yo yo this is some text!!!"
    //document.getElementById("textField").innerHTML = text;
    //text.style.display = "block";

    var response = await fetch("https://api.chucknorris.io/jokes/random", {
        method: "GET" // default, so we can ignore
    })
    var exam = await response.json();
    document.getElementById("textField").textContent = JSON.stringify(exam, undefined, 2);
    text.style.display = "block";

}