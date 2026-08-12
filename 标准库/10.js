const { createElement } = require("react");

var hero = [
  {
    name: "英雄1",
    link: "https://example.com/hero1",
  },
  {
    name: "英雄2",
    link: "https://example.com/hero2",
  },
];

function createHero(hero) {
  var a = createElement("a");
  a.href = hero.link;
  a.textContent = hero.name;

  var container = document.querySelector(".container");
  container.appendChild(a);
}

for (var i = 0; i < hero.length; i++) {
  createHero(heros[i]);
}
