var joke = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    creteCard: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = joke.creteCard();
var pickedCard = cardPicker();
console.log(pickedCard);
