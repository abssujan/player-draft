// document.getElementById('player-draft').addEventListener('click', function(event){
//     const eventTarget = event.target.innerText;
//     console.log(eventTarget);
// })

// set up a click event on the select button
// Initialize a counter variable
let playerCount = 1;

document.querySelectorAll('.player-select').forEach(function (element) {
    element.addEventListener('click', function (event) {
        let selectFive = document.getElementById('select-v');
        
        // Check if the player count has reached five
        if (playerCount <= 5) {
            const li = document.createElement('li');
            const playerName = event.target.closest('.border-2').querySelector('.player-name');

            if (playerName) {
                const playerNameString = playerName.innerText;
                li.classList.add('text-slate-300');
                li.innerText = `${playerCount}. ${playerNameString}`;
                playerCount++;

                selectFive.appendChild(li);

                // Check if the player count has reached five after adding a player
                if (playerCount > 5) {
                    // Disable all player-select buttons
                    document.querySelectorAll('.player-select').forEach(function (button) {
                        button.disabled = true;
                    });
                }
            }
        }
    });
});

// string convert in number function
function stringInNumber(elementId){
    const inputFiled = document.getElementById(elementId);
    const inputFiledString = inputFiled.value;
    const inputFiledNumber = parseInt(inputFiledString);
    return inputFiledNumber;
}
// set-up click event at calculate button

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerCostField =  stringInNumber('per-player');

    const selectFiveField = document.getElementById('select-v');
    const selectedPlayers = selectFiveField.querySelectorAll('li');

    const perPlayerCost = perPlayerCostField * selectedPlayers.length;
    console.log(perPlayerCost)
    const totalPlayerCostFiled = document.getElementById('player-expense');
    //set the value
    totalPlayerCostFiled.innerText = perPlayerCost;
});

// set-up click event at total calculate button
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerCost = stringInNumber('manager');
    const coachCost = stringInNumber('coach');

    const totalPlayerCostFiled = document.getElementById('player-expense');
    const totalPlayerString = totalPlayerCostFiled.innerText;
    const totalPlayerNumber = parseInt(totalPlayerString);

    const totalTeamCostCalculate = totalPlayerNumber + managerCost + coachCost;

    const totalTeamCostId = document.getElementById('total-ammount');
    //set value 
    totalTeamCostId.innerText = totalTeamCostCalculate;
})
