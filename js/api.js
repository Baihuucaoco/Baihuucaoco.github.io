const url = 'https://chinese-food-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '93d16bfe53msh436049637a3c9dbp17f23bjsn5e2bba5a4180',
		'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
	}
};
async function getData(){
	try {
	const response = await fetch(url, options);
	const result = await response.text();
	var data = JSON.parse(result)
	console.log(data);
	for (item of data) {
		//create it
		let card = document.createElement("div")
		//name it
	card.classList.add("card")
	//img
		let imgContainer = document.createElement("div")
	imgContainer.classList.add("img-container")
	//khai bao img
	let image = document.createElement("img")
		image.setAttribute("src", item.image)
		imgContainer.appendChild(image)
		card.appendChild(imgContainer)
		
	//items
		let container = document.createElement("div")
		container.classList.add("container")
		let name = document.createElement("h5")
		name.classList.add("name")
		name.innerText = item.title
		container.appendChild(name)
		let btn = document.createElement("button")
		btn.addEventListener("click", function(){
			window.location.href="../html/recipes2.html"
		})
		btn.innerHTML = "Details     "
		let i = document.createElement("i")
		i.classList.add("fa-solid", "fa-arrow-right")
		btn.appendChild(i)
		container.appendChild(btn)
		card.appendChild(container)
		document.getElementById("product").appendChild(card)
	}
} catch (error) {
	console.error(error);
}
}
getData()