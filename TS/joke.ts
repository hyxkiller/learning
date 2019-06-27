interface Card {
    suit: string
    card: number
}

interface Joke {
    suits: string[]
    cards: number[]
    creteCard(this: Joke): () => Card
}

let joke = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    creteCard: function (this: Joke) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}

let cardPicker = joke.creteCard();
let pickedCard = cardPicker();
console.log(pickedCard);
