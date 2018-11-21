var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function press()
{
	var temp = this.parentElement;
	console.log(temp);
	temp.parentNode.removeChild(temp);
}
var i = 1;
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	var but = document.createElement("button");
	var lbl = document.createTextNode("Delete");
	but.appendChild(lbl);
	li.appendChild(but);
	ul.appendChild(li);
	but.addEventListener("click", press)
	but.id = i;
	i = i + 1;
	input.value = "";
}

function saving()
{
	var li = document.querySelectorAll('li');

	var arr = []
	for(var j = 0; j < li.length; j++)
	{
		arr.push(li[j].textContent.replace("Delete",""))
	}
	console.log(arr);

}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
var button1 = document.getElementsByTagName("button");
var saveButton = document.getElementById("save");
for(i = 2; i < button1.length; i++)
{
	button1[i].id = i;
	button1[i].addEventListener("click", press);
}

button.addEventListener("click", addListAfterClick);
saveButton.addEventListener("click",saving);
input.addEventListener("keypress", addListAfterKeypress);









