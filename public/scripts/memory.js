HS()

let cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"]

let individual_cards = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11]
for(let i = 0; i < 12; i++){
    individual_cards[i] = {}
    individual_cards[i].name = "" + 'c' + i
    individual_cards[i].domId = document.getElementById(individual_cards[i].name)
    individual_cards[i].domId.addEventListener("click", () => {revealCard(i)})
}

let oneVisible = false
let turnCounter = 0
let visible_nr
let lock = false
let parisLeft = 6
let hs = []

function revealCard(nr) {
    let opacityValue = $(`#c${nr}`).css('opacity')
    if (opacityValue != 0 && lock == false) {
        lock = true
        let obraz = `url("../public/img/${cards[nr]}")`
        $(`#c${nr}`).css('background-image', obraz)
        $(`#c${nr}`).removeClass('card').addClass('cardA');
        if (!oneVisible) {
            //first card
            oneVisible = true
            visible_nr = nr
            lock = false
        }
        else {
            //second card
            if (cards[visible_nr] === cards[nr]) {
                setTimeout(() => { hide2Cards(nr, visible_nr) }, 750)
            }
            else {
                setTimeout(() => { restore2Cards(nr, visible_nr) }, 1000)
            }
            turnCounter++
            $('.score').html(`Turn counter: ${turnCounter}`)
            oneVisible = false
        }
    }
}

function restore2Cards(nr1, nr2){
    $(`#c${nr1}`).css('background-image', 'url(../public/img/karta.png)')
    $(`#c${nr1}`).removeClass('cardA').addClass('card');
    $(`#c${nr2}`).css('background-image', 'url(../public/img/karta.png)')
    $(`#c${nr2}`).removeClass('cardA').addClass('card');
    lock = false
}

function hide2Cards(nr1, nr2){
    $(`#c${nr1}`).css('opacity', '0')
    $(`#c${nr2}`).css('opacity', '0')
    parisLeft--
    if(parisLeft == 0){
        $('.board').html(`<h1>You win!<br>Done in ${turnCounter} turns</h1>`)
        if(turnCounter < hs[9].score){
            let wsad = {}
            wsad.score = turnCounter
            wsad.name = $('#name').val()
            hs.push(wsad)
            hs.sort((a,b) => a.score - b.score)
            hs = hs.slice(0,10)
            updateHS()
        }
    }
    lock = false    
}


function updateHS(){
    $.ajax({
        url: '/games/gwen_highscore',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ hs: hs}),
        success: () => {HS()}
    })
}

function HS(){
    $.ajax({
        url: '/games/test',
        contentType: 'application/json',
        success: (response) => {
            hs = response.hs
            let hs_wsad = ''
            for(let i = 0; i < 10; i++){
                let unit_hs = `<div>Name: ${hs[i].name}&nbsp&nbsp&nbspScore: ${hs[i].score}</div>`
                hs_wsad += unit_hs
            }
            let UserContent = $('#ajax')
            UserContent.html('')
                UserContent.append('\
                High Score\
                ' + hs_wsad + '\
                ')
        }})}