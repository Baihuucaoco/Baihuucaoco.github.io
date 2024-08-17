let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// let products = {
//   data: [
//     {
//       name: "Homemade crispy chilli oil",

//       image: url("https://apipics.s3.amazonaws.com/chinese_recipes_api/1.jpg"),
//     },

//     {
//       name: "RAEDA DECK",

//       image: "img/Raeda-Deck.jpg",
//     },

//     {
//       name: "MUSTY DECK",

//       image: "img/Musty-Deck.jpg",
//     },

//     {
//       name: "TRISTIQUE DECK",

//       image: "img/Tristique-deck.jpg",
//     },

//     {
//       name: "FIELD TRIP DECK",

//       image: "img/Fied-Trip-deck.jpg",
//     },

//     {
//       name: "TARO RAINBOW LOGO DECK",

//       image: "img/web-5.jpg",
//     },

//     {
//       name: "NEON RAINBOW LOGO DECK",

//       image: "img/web-1.jpg",
//     },

//     {
//       name: "ORANAGE RAINBOW LOGO DECK",

//       image: "img/web-2.jpg",
//     },

   
//   ],
// };
// async function takeData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     var data = JSON.parse(result)
//     console.log(data);
//   for (item of data) {
// 		//create it
// 		let card = document.createElement("div")
// 		//name it
// 	card.classList.add("card")
// 	//img
// 		let imgContainer = document.createElement("div")
// 	imgContainer.classList.add("img-container")
// 	//khai bao img
// 	let image = document.createElement("img")
// 		image.setAttribute("src", item.image)
// 		imgContainer.appendChild(image)
// 		card.appendChild(imgContainer)
		
// 	//items
// 		let container = document.createElement("div")
// 		container.classList.add("container")
// 		let name = document.createElement("h5")
// 		name.classList.add("name")
// 		name.innerText = item.title
// 		container.appendChild(name)
// 		let btn = document.createElement("button")
// 		btn.addEventListener("click", function(){
// 			window.location.href=""
// 		})
// 		btn.innerHTML = "Details     "
// 		let i = document.createElement("i")
// 		i.classList.add("fa-solid", "fa-arrow-right")
// 		btn.appendChild(i)
// 		container.appendChild(btn)
// 		card.appendChild(container)
// 		document.getElementById("overall").appendChild(card)
// 	}
// }catch (error) {
// 	console.error(error);
// }}
// takeData()