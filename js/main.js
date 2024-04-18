function typeWrite(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = ' ';
	textoArray.forEach(function (letra, i) {

		setTimeout(function () {
			elemento.innerHTML += letra;
		}, 75 * i)

	});
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);


// Search bar
function aplicaFiltroCards() {
	var input, filter, cards, cardContainer, h5, title, i;
	input = document.getElementById("filtroCards");
	filter = input.value.toUpperCase();
	cardContainer = document.getElementById("containerCards");
	cards = cardContainer.getElementsByClassName("card");
	for (i = 0; i < cards.length; i++) {
		title = cards[i].querySelector(".card-body");
		if (title.innerText.toUpperCase().indexOf(filter) > -1) {
			cards[i].style.display = "";
		} else {
			cards[i].style.display = "none";
		}
	}
}