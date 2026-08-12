function Pocker(color, number) {
  this.color = color;
  this.number = number;

  this.print = function () {
    if (this.number === 14) {
      console.log("small joker");
      return;
    }
    if (this.number === 15) {
      console.log("big joker");
      return;
    }

    var colors = ["♠️", "♥️", "♣️", "♦️"];
    var color = colors[this.color - 1];

    var numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    var number = numbers[this.number - 1];

    console.log(color + number);
  };
}

function Deck() {
  this.pockers = [];
  for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
      this.pockers.push(new Pocker(j, i));
    }
  }
  this.pockers.push(new Pocker(0, 14));
  this.pockers.push(new Pocker(0, 15));

  this.print = function () {
    for (var i = 0; i < this.pockers.length; i++) {
      this.pockers[i].print();
    }
  };
}

var deck = new Deck();
deck.print();
