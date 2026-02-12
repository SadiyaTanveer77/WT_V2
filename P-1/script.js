function generateRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	const numDisplay = document.getElementById("randomNumber");
	numDisplay.innerHTML = "";
	const newPara = document.createElement("p");
	newPara.innerHTML = "Random Number: " + randomNumber;
	numDisplay.appendChild(newPara);
}

function addItem() {
	var itemList = document.getElementById("itemList");
	var newItem = document.createElement("li");
	newItem.innerHTML = "Item " + (itemList.children.length + 1);
	itemList.appendChild(newItem);
}

function removeItem() {
	var itemList = document.getElementById("itemList");
	if (itemList.children.length > 0) {
		itemList.removeChild(itemList.lastChild);
	}
}