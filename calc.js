var numbers = [];

function getNumber(n){
	n = document.getElementById(n.id).getAttribute("name");
	numbers.push(n);
	document.getElementById('screen').innerHTML = numbers.join("").replace("/","÷").replace("*", "x");
}

function operation(){
	document.getElementById("screen").innerHTML = numbers.join("").replace("/","÷").replace("*", "x");
	r = eval(numbers.join(""))
	document.getElementById("screen").innerHTML += " = "+ r;
	numbers = [r];
}

function clearScreen() {
	document.getElementById('screen').innerHTML = " ";
	numbers = [];
}
