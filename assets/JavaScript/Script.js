let APIKEY = "hy0ED1OzyX9cqjlWo8uhJenhrvXgRd7d";
let test = document.querySelector(".test");
// let box1 = document.getElementById("img1");
var giphyImgEl = document.querySelector("#giphy");
document.addEventListener("DOMContentLoaded", init);

var poke = "Whos That Pokemon";

let searchEl = document.getElementById("auto-complete");
let searchBtn = document.getElementById("searchBtn");
let dropItem = document.getElementById("dropItem");
let Favorite = document.getElementById("Favorite");
var dropDownBtn = document.getElementById("dropdownMenuButton1");

var allPokemonData = [
  {
    name: "Bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    name: "Ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    name: "Venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
  {
    name: "Charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
  },
  {
    name: "Charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
  },
  {
    name: "Charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
  },
  {
    name: "Squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
  },
  {
    name: "Wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
  },
  {
    name: "Blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
  },
  {
    name: "Caterpie",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
  },
  {
    name: "Metapod",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
  },
  {
    name: "Butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
  },
  {
    name: "Weedle",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
  },
  {
    name: "Kakuna",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
  },
  {
    name: "Beedrill",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
  },
  {
    name: "Pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
  },
  {
    name: "Pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
  },
  {
    name: "Pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
  },
  {
    name: "Rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
  },
  {
    name: "Raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
  },
  {
    name: "Spearow",
    url: "https://pokeapi.co/api/v2/pokemon/21/",
  },
  {
    name: "Fearow",
    url: "https://pokeapi.co/api/v2/pokemon/22/",
  },
  {
    name: "Ekans",
    url: "https://pokeapi.co/api/v2/pokemon/23/",
  },
  {
    name: "Arbok",
    url: "https://pokeapi.co/api/v2/pokemon/24/",
  },
  {
    name: "Pikachu",
    url: "https://pokeapi.co/api/v2/pokemon/25/",
  },
  {
    name: "Raichu",
    url: "https://pokeapi.co/api/v2/pokemon/26/",
  },
  {
    name: "Sandshrew",
    url: "https://pokeapi.co/api/v2/pokemon/27/",
  },
  {
    name: "Sandslash",
    url: "https://pokeapi.co/api/v2/pokemon/28/",
  },
  {
    name: "Nidoran-f",
    url: "https://pokeapi.co/api/v2/pokemon/29/",
  },
  {
    name: "Nidorina",
    url: "https://pokeapi.co/api/v2/pokemon/30/",
  },
  {
    name: "Nidoqueen",
    url: "https://pokeapi.co/api/v2/pokemon/31/",
  },
  {
    name: "Nidoran-m",
    url: "https://pokeapi.co/api/v2/pokemon/32/",
  },
  {
    name: "Nidorino",
    url: "https://pokeapi.co/api/v2/pokemon/33/",
  },
  {
    name: "Nidoking",
    url: "https://pokeapi.co/api/v2/pokemon/34/",
  },
  {
    name: "Clefairy",
    url: "https://pokeapi.co/api/v2/pokemon/35/",
  },
  {
    name: "Clefable",
    url: "https://pokeapi.co/api/v2/pokemon/36/",
  },
  {
    name: "Vulpix",
    url: "https://pokeapi.co/api/v2/pokemon/37/",
  },
  {
    name: "Ninetales",
    url: "https://pokeapi.co/api/v2/pokemon/38/",
  },
  {
    name: "Jigglypuff",
    url: "https://pokeapi.co/api/v2/pokemon/39/",
  },
  {
    name: "Wigglytuff",
    url: "https://pokeapi.co/api/v2/pokemon/40/",
  },
  {
    name: "Zubat",
    url: "https://pokeapi.co/api/v2/pokemon/41/",
  },
  {
    name: "Golbat",
    url: "https://pokeapi.co/api/v2/pokemon/42/",
  },
  {
    name: "Oddish",
    url: "https://pokeapi.co/api/v2/pokemon/43/",
  },
  {
    name: "Gloom",
    url: "https://pokeapi.co/api/v2/pokemon/44/",
  },
  {
    name: "Vileplume",
    url: "https://pokeapi.co/api/v2/pokemon/45/",
  },
  {
    name: "Paras",
    url: "https://pokeapi.co/api/v2/pokemon/46/",
  },
  {
    name: "Parasect",
    url: "https://pokeapi.co/api/v2/pokemon/47/",
  },
  {
    name: "Venonat",
    url: "https://pokeapi.co/api/v2/pokemon/48/",
  },
  {
    name: "Venomoth",
    url: "https://pokeapi.co/api/v2/pokemon/49/",
  },
  {
    name: "Diglett",
    url: "https://pokeapi.co/api/v2/pokemon/50/",
  },
  {
    name: "Dugtrio",
    url: "https://pokeapi.co/api/v2/pokemon/51/",
  },
  {
    name: "Meowth",
    url: "https://pokeapi.co/api/v2/pokemon/52/",
  },
  {
    name: "Persian",
    url: "https://pokeapi.co/api/v2/pokemon/53/",
  },
  {
    name: "Psyduck",
    url: "https://pokeapi.co/api/v2/pokemon/54/",
  },
  {
    name: "Golduck",
    url: "https://pokeapi.co/api/v2/pokemon/55/",
  },
  {
    name: "Mankey",
    url: "https://pokeapi.co/api/v2/pokemon/56/",
  },
  {
    name: "Primeape",
    url: "https://pokeapi.co/api/v2/pokemon/57/",
  },
  {
    name: "Growlithe",
    url: "https://pokeapi.co/api/v2/pokemon/58/",
  },
  {
    name: "Arcanine",
    url: "https://pokeapi.co/api/v2/pokemon/59/",
  },
  {
    name: "Poliwag",
    url: "https://pokeapi.co/api/v2/pokemon/60/",
  },
  {
    name: "Poliwhirl",
    url: "https://pokeapi.co/api/v2/pokemon/61/",
  },
  {
    name: "Poliwrath",
    url: "https://pokeapi.co/api/v2/pokemon/62/",
  },
  {
    name: "Abra",
    url: "https://pokeapi.co/api/v2/pokemon/63/",
  },
  {
    name: "Kadabra",
    url: "https://pokeapi.co/api/v2/pokemon/64/",
  },
  {
    name: "Alakazam",
    url: "https://pokeapi.co/api/v2/pokemon/65/",
  },
  {
    name: "Machop",
    url: "https://pokeapi.co/api/v2/pokemon/66/",
  },
  {
    name: "Machoke",
    url: "https://pokeapi.co/api/v2/pokemon/67/",
  },
  {
    name: "Machamp",
    url: "https://pokeapi.co/api/v2/pokemon/68/",
  },
  {
    name: "Bellsprout",
    url: "https://pokeapi.co/api/v2/pokemon/69/",
  },
  {
    name: "Weepinbell",
    url: "https://pokeapi.co/api/v2/pokemon/70/",
  },
  {
    name: "Victreebel",
    url: "https://pokeapi.co/api/v2/pokemon/71/",
  },
  {
    name: "Tentacool",
    url: "https://pokeapi.co/api/v2/pokemon/72/",
  },
  {
    name: "Tentacruel",
    url: "https://pokeapi.co/api/v2/pokemon/73/",
  },
  {
    name: "Geodude",
    url: "https://pokeapi.co/api/v2/pokemon/74/",
  },
  {
    name: "Graveler",
    url: "https://pokeapi.co/api/v2/pokemon/75/",
  },
  {
    name: "Golem",
    url: "https://pokeapi.co/api/v2/pokemon/76/",
  },
  {
    name: "Ponyta",
    url: "https://pokeapi.co/api/v2/pokemon/77/",
  },
  {
    name: "Rapidash",
    url: "https://pokeapi.co/api/v2/pokemon/78/",
  },
  {
    name: "Slowpoke",
    url: "https://pokeapi.co/api/v2/pokemon/79/",
  },
  {
    name: "Slowbro",
    url: "https://pokeapi.co/api/v2/pokemon/80/",
  },
  {
    name: "Magnemite",
    url: "https://pokeapi.co/api/v2/pokemon/81/",
  },
  {
    name: "Magneton",
    url: "https://pokeapi.co/api/v2/pokemon/82/",
  },
  {
    name: "Farfetchd",
    url: "https://pokeapi.co/api/v2/pokemon/83/",
  },
  {
    name: "Doduo",
    url: "https://pokeapi.co/api/v2/pokemon/84/",
  },
  {
    name: "Dodrio",
    url: "https://pokeapi.co/api/v2/pokemon/85/",
  },
  {
    name: "Seel",
    url: "https://pokeapi.co/api/v2/pokemon/86/",
  },
  {
    name: "Dewgong",
    url: "https://pokeapi.co/api/v2/pokemon/87/",
  },
  {
    name: "Grimer",
    url: "https://pokeapi.co/api/v2/pokemon/88/",
  },
  {
    name: "Muk",
    url: "https://pokeapi.co/api/v2/pokemon/89/",
  },
  {
    name: "Shellder",
    url: "https://pokeapi.co/api/v2/pokemon/90/",
  },
  {
    name: "Cloyster",
    url: "https://pokeapi.co/api/v2/pokemon/91/",
  },
  {
    name: "Gastly",
    url: "https://pokeapi.co/api/v2/pokemon/92/",
  },
  {
    name: "Haunter",
    url: "https://pokeapi.co/api/v2/pokemon/93/",
  },
  {
    name: "Gengar",
    url: "https://pokeapi.co/api/v2/pokemon/94/",
  },
  {
    name: "Onix",
    url: "https://pokeapi.co/api/v2/pokemon/95/",
  },
  {
    name: "Drowzee",
    url: "https://pokeapi.co/api/v2/pokemon/96/",
  },
  {
    name: "Hypno",
    url: "https://pokeapi.co/api/v2/pokemon/97/",
  },
  {
    name: "Krabby",
    url: "https://pokeapi.co/api/v2/pokemon/98/",
  },
  {
    name: "Kingler",
    url: "https://pokeapi.co/api/v2/pokemon/99/",
  },
  {
    name: "Voltorb",
    url: "https://pokeapi.co/api/v2/pokemon/100/",
  },
  {
    name: "Electrode",
    url: "https://pokeapi.co/api/v2/pokemon/101/",
  },
  {
    name: "Exeggcute",
    url: "https://pokeapi.co/api/v2/pokemon/102/",
  },
  {
    name: "Exeggutor",
    url: "https://pokeapi.co/api/v2/pokemon/103/",
  },
  {
    name: "Cubone",
    url: "https://pokeapi.co/api/v2/pokemon/104/",
  },
  {
    name: "Marowak",
    url: "https://pokeapi.co/api/v2/pokemon/105/",
  },
  {
    name: "Hitmonlee",
    url: "https://pokeapi.co/api/v2/pokemon/106/",
  },
  {
    name: "Hitmonchan",
    url: "https://pokeapi.co/api/v2/pokemon/107/",
  },
  {
    name: "Lickitung",
    url: "https://pokeapi.co/api/v2/pokemon/108/",
  },
  {
    name: "Koffing",
    url: "https://pokeapi.co/api/v2/pokemon/109/",
  },
  {
    name: "Weezing",
    url: "https://pokeapi.co/api/v2/pokemon/110/",
  },
  {
    name: "Rhyhorn",
    url: "https://pokeapi.co/api/v2/pokemon/111/",
  },
  {
    name: "Rhydon",
    url: "https://pokeapi.co/api/v2/pokemon/112/",
  },
  {
    name: "Chansey",
    url: "https://pokeapi.co/api/v2/pokemon/113/",
  },
  {
    name: "Tangela",
    url: "https://pokeapi.co/api/v2/pokemon/114/",
  },
  {
    name: "Kangaskhan",
    url: "https://pokeapi.co/api/v2/pokemon/115/",
  },
  {
    name: "Horsea",
    url: "https://pokeapi.co/api/v2/pokemon/116/",
  },
  {
    name: "Seadra",
    url: "https://pokeapi.co/api/v2/pokemon/117/",
  },
  {
    name: "Goldeen",
    url: "https://pokeapi.co/api/v2/pokemon/118/",
  },
  {
    name: "Seaking",
    url: "https://pokeapi.co/api/v2/pokemon/119/",
  },
  {
    name: "Staryu",
    url: "https://pokeapi.co/api/v2/pokemon/120/",
  },
  {
    name: "Starmie",
    url: "https://pokeapi.co/api/v2/pokemon/121/",
  },
  {
    name: "Mr-Mime",
    url: "https://pokeapi.co/api/v2/pokemon/122/",
  },
  {
    name: "Scyther",
    url: "https://pokeapi.co/api/v2/pokemon/123/",
  },
  {
    name: "Jynx",
    url: "https://pokeapi.co/api/v2/pokemon/124/",
  },
  {
    name: "Electabuzz",
    url: "https://pokeapi.co/api/v2/pokemon/125/",
  },
  {
    name: "Magmar",
    url: "https://pokeapi.co/api/v2/pokemon/126/",
  },
  {
    name: "Pinsir",
    url: "https://pokeapi.co/api/v2/pokemon/127/",
  },
  {
    name: "Tauros",
    url: "https://pokeapi.co/api/v2/pokemon/128/",
  },
  {
    name: "Magikarp",
    url: "https://pokeapi.co/api/v2/pokemon/129/",
  },
  {
    name: "Gyarados",
    url: "https://pokeapi.co/api/v2/pokemon/130/",
  },
  {
    name: "Lapras",
    url: "https://pokeapi.co/api/v2/pokemon/131/",
  },
  {
    name: "Ditto",
    url: "https://pokeapi.co/api/v2/pokemon/132/",
  },
  {
    name: "Eevee",
    url: "https://pokeapi.co/api/v2/pokemon/133/",
  },
  {
    name: "Vaporeon",
    url: "https://pokeapi.co/api/v2/pokemon/134/",
  },
  {
    name: "Jolteon",
    url: "https://pokeapi.co/api/v2/pokemon/135/",
  },
  {
    name: "Flareon",
    url: "https://pokeapi.co/api/v2/pokemon/136/",
  },
  {
    name: "Porygon",
    url: "https://pokeapi.co/api/v2/pokemon/137/",
  },
  {
    name: "Omanyte",
    url: "https://pokeapi.co/api/v2/pokemon/138/",
  },
  {
    name: "Omastar",
    url: "https://pokeapi.co/api/v2/pokemon/139/",
  },
  {
    name: "Kabuto",
    url: "https://pokeapi.co/api/v2/pokemon/140/",
  },
  {
    name: "Kabutops",
    url: "https://pokeapi.co/api/v2/pokemon/141/",
  },
  {
    name: "Aerodactyl",
    url: "https://pokeapi.co/api/v2/pokemon/142/",
  },
  {
    name: "Snorlax",
    url: "https://pokeapi.co/api/v2/pokemon/143/",
  },
  {
    name: "Articuno",
    url: "https://pokeapi.co/api/v2/pokemon/144/",
  },
  {
    name: "Zapdos",
    url: "https://pokeapi.co/api/v2/pokemon/145/",
  },
  {
    name: "Moltres",
    url: "https://pokeapi.co/api/v2/pokemon/146/",
  },
  {
    name: "Dratini",
    url: "https://pokeapi.co/api/v2/pokemon/147/",
  },
  {
    name: "Dragonair",
    url: "https://pokeapi.co/api/v2/pokemon/148/",
  },
  {
    name: "Dragonite",
    url: "https://pokeapi.co/api/v2/pokemon/149/",
  },
  {
    name: "Mewtwo",
    url: "https://pokeapi.co/api/v2/pokemon/150/",
  },
  {
    name: "Mew",
    url: "https://pokeapi.co/api/v2/pokemon/151/",
  },
];

function getPokemons() {
  // Clears the existing list items so list doesn't keep populating
  dropItem.innerHTML = "";

  // Adds the new list items
  allPokemonData.forEach((i) => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = i.name;
    a.classList.add("dropdown-item");
    a.href = "#";
    a.addEventListener("click", function () {
      searchEl.value = i.name;
    });
    li.appendChild(a);
    dropItem.appendChild(li);
  });
}

dropDownBtn.addEventListener("click", getPokemons);

$(function () {
  $("#auto-complete").autocomplete({
    source: allPokemonData.map(({ name }) => name),
  });
});

searchBtn.addEventListener("click", function () {
  getGiphy(searchEl.value);
});
var currentgif;
var emptyimage;

// Favorite.addEventListener("click", function () {
//   console.log(currentgif);
//   for (let i = 0; i < 6; i++) {
//     var id = "img" + (i + 1);
//     var img = document.getElementById(id);
//     console.log(img);
//     if (img.getAttribute("src") == "#") {
//       //   img.src = currentgif;
//       // Adds the URL of the current GIF to local storage with the image ID as the key
//       localStorage.setItem(id, currentgif);
//       return;
//     }
//   }
// });

Favorite.addEventListener("click", function () {
    console.log(currentgif);
    let emptyBox = null; // added this variable to keep track of the first empty box
    for (let i = 0; i < 6; i++) {
      var id = "img" + (i + 1);
      let box = document.getElementById(id);
      if (box.getAttribute("src") == "#") {
        // if this is the first empty box we've found, save it to the emptyBox variable
        if (emptyBox == null) {
          emptyBox = box;
        }
      } else if (box.getAttribute("src") == currentgif) {
        // if this box already contains the current gif, return without doing anything
        return;
      }
    }
  
    // if we get here, it means the current gif is not in any of the boxes yet
    if (emptyBox != null) {
      // Adds the URL of the current GIF to local storage with the image ID as the key
      localStorage.setItem(emptyBox.id, currentgif);
      // update the empty box's src attribute using the pokeBox function
      pokeBox(searchEl.value.toLowerCase(), emptyBox);
    }
  });
  

// Sets the `src` attributes of the images based on the saved URLs from local storage
function forloop() {
    for (let i = 0; i < 6; i++) {
    var id = "img" + (i + 1);
    var img = document.getElementById(id);
    var url = localStorage.getItem(id);
    if (url) {
        img.src = url;
    }
    }
}
function init() {
  event.preventDefault(); //to stop the page reload
  getGiphy(poke);
}

function getGiphy(pokeName) {
  console.log(pokeName);

  let url = `https://api.giphy.com/v1/gifs/search?q=${pokeName}&api_key=${APIKEY}&limit=30`;

  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      console.log(content);
      giphyImgEl.setAttribute("src", content.data[0].images.downsized.url);
      currentgif = content.data[0].images.downsized.url;
    })
    .catch((err) => {
      console.error(err);
    });
}

// Added event listener to reset button
document.getElementById("resetBtn").addEventListener("click", function () {
  // Clears local storage
  localStorage.clear();
  // Sets the `src` attributes of the images back to the default "#"
  for (let i = 0; i < 6; i++) {
    var id = "img" + (i + 1);
    var img = document.getElementById(id);
    img.src = "#";
  }
});

function pokeBox(pokeName, box) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      return response.json();
    })
    .then((content) => {
      box.setAttribute("src", content.sprites.front_default);

    })
    .catch((error) => {
      console.error(error);
    });
}
