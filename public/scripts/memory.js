let cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"]
//alert(cards[4])
//console.log(cards)

let individual_cards = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11]
for(let i = 0; i < 12; i++){
    individual_cards[i] = {}
    individual_cards[i].name = "" + 'c' + i
    individual_cards[i].domId = document.getElementById(individual_cards[i].name)
    individual_cards[i].domId.addEventListener("click", () => {revealCard(i)})
}

let oneVisible = false
let turnCounter = 0

function revealCard(nr)
{
   let obraz = `url("../img/${cards[nr]}")`
   $(`#c${nr}`).css('background-image', obraz)
   //$(`#c${nr}`).removeClass('card').addClass('card2');

}