var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");

function gradientBG () {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"
    // adding the code into the website!!
    css.textContent = body.style.background + ";";
};

color1.addEventListener("input", gradientBG);

color2.addEventListener("input", gradientBG);

//generate a new button to create random color1 and color2 values

var button = document.getElementById("btn");

function numbers () {
    return Math.floor((Math.random() * 199999) + 99999);
}


function getNumbers () {
    color1.value = "#" + numbers();
    color2.value = "#" + numbers();
    body.style.background = gradientBG();
	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", getNumbers);
