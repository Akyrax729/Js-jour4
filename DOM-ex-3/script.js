// Galerie d'images interactive
// Énoncé : Crée une série de petites images côte à côte (par exemple, trois ou quatre <img> avec la classe thumbnail). Ajoute une grande zone d'affichage d'image en haut de la page, avec un <img id="mainImage" src=""> qui est vide au début. Lorsque l'utilisateur clique sur une des miniatures, la source de mainImage est mise à jour pour afficher l'image cliquée en grand dans la zone d'affichage.

let thumb = document.querySelectorAll('.thumbnail');
let main = document.getElementById('main-image');

thumb[0].addEventListener ('click', function () {
    main.setAttribute ('src', 'bg-slider-01.jpg');
})
thumb[1].addEventListener ('click', function () {
    main.setAttribute ('src', 'bg-slider-05.jpg');
})
thumb[2].addEventListener ('click', function () {
    main.setAttribute ('src', 'bg-slider-06.jpg');
})

