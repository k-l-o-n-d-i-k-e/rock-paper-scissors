
let selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelectorAll('[data-final-column]');

/*this helps organize the different number of selections with an array. It converts the
emojis into text*/
const SELECTIONS = [
    {
        name: "rock",
        emoji: "✊",
        beats: 'scissors'
    },
    {
        name: "paper",
        emoji: "✋",
        beats: 'rock'
    },
    {
        name:"scissors",
        emoji: "✌️",
        beats: 'paper'
    }
]
//still don't know exactly what this does.
    selectionButtons.forEach(selectionButtons => {

    selectionButtons.addEventListener('click', e => {

    //it seems that with this line of code you can search for the data selection 'class' names.
    const selectionName = selectionButtons.dataset.selection

    const selection = SELECTIONS.find(selection => selection.name == selectionName)
    makeSelection(selection)
    })
})


function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(computerSelection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
}

function addSelectionResult(selection, winner){

    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    
    if (winner){
        div.classList.add('winner')
    }
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection){
    //seems that we are checking if we have a winner
    return selection.beats === opponentSelection.name

}

function randomSelection() {
    //this will give the computer a random value to pick from.
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex]
}