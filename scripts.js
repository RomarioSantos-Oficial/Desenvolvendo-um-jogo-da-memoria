const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondCard;
let locBoard = false

function flipCard () {
    if (locBoard) return;
    if(this== firstCard) return;
    this.classList.add('flip');
    if(!hasFlipperCard) {
        hasFlipperCard =true;
        firstCard =this;
        return;
    }

    secondCard = this;
    hasFlipperCard = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disabledCards();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard ();
}

function unflipCards() {
    locBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard ();
    }, 1500)
}

function resetBoard(){
    [hasFlipperCard, locBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 30);
        card.style.order = ramdomPosition;
    })
}) ();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});



/*botão de restatt*/

const btn = document.querySelector('#reset')

btn.addEventListener('click', () => {
    location.reload()
})