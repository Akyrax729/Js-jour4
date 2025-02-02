// Filtrer une liste d'éléments
// Énoncé : Crée une liste de pays dans un <ul id="countryList"> (par exemple : France, Allemagne, Espagne) et un champ de saisie <input id="filterInput" placeholder="Filtrer les pays...">. Lorsqu'un utilisateur tape quelque chose dans le champ, affiche uniquement les pays qui contiennent le texte saisi.
// Objectif : Manipuler le DOM pour filtrer dynamiquement des éléments en fonction de l'entrée utilisateur.

const filter = document.getElementById('filter-input');
const country = document.getElementById ('country-list');
let filter2 = filter.value.toUpperCase();
let pays = [
    "Afghanistan ","Afrique_Centrale ","Afrique_du_Sud ","Albanie ","Algerie ","Allemagne ","Andorre ","Angola ","Anguilla ","Arabie_Saoudite ","Argentine ","Armenie ","Australie ","Autriche ","Azerbaidjan ","Bahamas ","Bangladesh ","Barbade ","Bahrein ","Belgique ","Belize ","Benin ","Bermudes ","Bielorussie ","Bolivie ","Botswana ","Bhoutan ","Boznie_Herzegovine ","Bresil ","Brunei ","Bulgarie ","Burkina_Faso ","Burundi ","Caiman ","Cambodge ","Cameroun ","Canada ","Canaries ","Cap_Vert ","Chili ","Chine ","Chypre ","Colombie ","Congo ","Congo_democratique ","Cook ","Coree_du_Nord ","Coree_du_Sud ","Costa_Rica ","Côte_d_Ivoire ","Croatie ","Cuba ","Danemark ","Djibouti ","Dominique ","Egypte ","Emirats_Arabes_Unis ","Equateur ","Erythree ","Espagne ","Estonie ","Etats_Unis ","Ethiopie ","Falkland ","Feroe ","Fidji ","Finlande ","France ","Gabon ","Gambie ","Georgie ","Ghana ","Gibraltar ","Grece ","Grenade ","Groenland ","Guadeloupe ","Guam ","Guatemala","Guernesey ","Guinee ","Guinee_Bissau ","Guinee_Equatoriale ","Guyana ","Guyane_Francaise ","Haiti ","Hawaii ","Honduras ","Hong_Kong ","Hongrie ","Inde ","Indonesie ","Iran ","Iraq ","Irlande ","Islande ","Israel ","italie ","Jamaique ","Jan Mayen ","Japon ","Jersey ","Jordanie ","Kazakhstan ","Kenya ","Kirghizistan ","Kiribati ","Koweit ","Laos ","Lesotho ","Lettonie ","Liban ","Liberia ","Liechtenstein ","Lituanie ","Luxembourg ","Lybie ","Macao ","Macedoine ","Madagascar ","Madère ","Malaisie ","Malawi ","Maldives ","Mali ","Malte ","Man ","Mariannes du Nord ","Maroc ","Marshall ","Martinique ","Maurice ","Mauritanie ","Mayotte ","Mexique ","Micronesie ","Midway ","Moldavie ","Monaco ","Mongolie ","Montserrat ","Mozambique ","Namibie ","Nauru ","Nepal ","Nicaragua ","Niger ","Nigeria ","Niue ","Norfolk ","Norvege ","Nouvelle_Caledonie ","Nouvelle_Zelande ","Oman ","Ouganda ","Ouzbekistan ","Pakistan ","Palau ","Palestine ","Panama ","Papouasie_Nouvelle_Guinee ","Paraguay ","Pays_Bas ","Perou ","Philippines ","Pologne ","Polynesie ","Porto_Rico ","Portugal ","Qatar ","Republique_Dominicaine ","Republique_Tcheque ","Reunion ","Roumanie ","Royaume_Uni ","Russie ","Rwanda ","Sahara Occidental ","Sainte_Lucie ","Saint_Marin ","Salomon ","Salvador ","Samoa_Occidentales","Samoa_Americaine ","Sao_Tome_et_Principe ","Senegal ","Seychelles ","Sierra Leone ","Singapour ","Slovaquie ","Slovenie","Somalie ","Soudan ","Sri_Lanka ","Suede ","Suisse ","Surinam ","Swaziland ","Syrie ","Tadjikistan ",
    "Taiwan ","Tonga ","Tanzanie ","Tchad ","Thailande ","Tibet ","Timor_Oriental ","Togo ","Trinite_et_Tobago ","Tristan de cuncha ","Tunisie ","Turmenistan ","Turquie ","Ukraine ","Uruguay ","Vanuatu ","Vatican ","Venezuela ","Vierges_Americaines ","Vierges_Britanniques ","Vietnam ","Wake ","Wallis et Futuma ","Yemen ","Yougoslavie ","Zambie ","Zimbabwe "
    ]
let pays2 = [...pays];
// pays.filter(filter.value)


for (let i = 0; i < pays2.length; i++) {
    let countries = document.createElement('li')
    countries.innerHTML = pays2[i]
    country.appendChild(countries)
}
// filter.addEventListener('input', function(event) {
//     pays2.innerHTML =''
//     pays.forEach(countries => countries.toLocaleLowerCase().indexOf(filter))
// })