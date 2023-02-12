//Home Functions
let homePointsEl = document.getElementById("home-points-el") 
let countHome = 0


function addTenHome() {
    countHome += 10
    homePointsEl.textContent = countHome
}

function addThirtyHome() {
    countHome += 30
    homePointsEl.textContent = countHome
}


function resetCounterHome() {
    homePointsEl.textContent = 0
    countHome = 0
} 


//Guest Functions
let guestPointsEl = document.getElementById("guest-points-el")
let countGuest = 0


function addTenGuest() {
    countGuest += 10
    guestPointsEl.textContent = countGuest
}

function addThirtyGuest() {
    countGuest += 30
    guestPointsEl.textContent = countGuest
}

function resetCounterGuest() {
    guestPointsEl.textContent = 0
    countGuest = 0
} 

//New Game Function
function newGame () {
    homePointsEl.textContent = 0
    guestPointsEl.textContent = 0
    countHome = 0
    countGuest = 0
}