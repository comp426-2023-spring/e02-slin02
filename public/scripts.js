// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

 var rps = true;
 var opponent = false;

 function playRPS() {
    var lizard = document.getElementsByClassName("rpsls")[0];
    var spock = document.getElementsByClassName("rpsls")[1];
    var rps_button = document.getElementsByClassName("rps-button")[0];
    var rpsls_button = document.getElementsByClassName("rpsls-button")[0];
    lizard.style.display="none";
    spock.style.display="none";
    rps_button.style.opacity="100%";
    rpsls_button.style.opacity="50%";
    rps=true;
 };

function playRPSLS() {
    var lizard = document.getElementsByClassName("rpsls")[0];
    var spock = document.getElementsByClassName("rpsls")[1];
    var rps_button = document.getElementsByClassName("rps-button")[0];
    var rpsls_button = document.getElementsByClassName("rpsls-button")[0];
    lizard.style.display="inline-block";
    spock.style.display="inline-block";
    rps_button.style.opacity="50%";
    rpsls_button.style.opacity="100%";
    rps=false;
};

function setChoice() {
    var game=document.getElementsByClassName("dropdown")[0];
    if (game.style.display=="inline-block") {
        game.style.display="none";
        opponent = false;
    } else {
        game.style.display="inline-block";
        opponent = true;
    }
}

function openRules() {
    var rules = document.getElementsByClassName("rules")[0];
    rules.style.display="inline-block";
}

function closeRoles() {
    var rules = document.getElementsByClassName("rules")[0];
    rules.style.display="none";
}

function reset() {
    location.reload();
}

function closeResults() {
    var pop_up = document.getElementsByClassName("results")[0];
    pop_up.style.display="none";
}

async function play() {
    var e = document.getElementsById("dropdown")
    var shot = e.value;
    var player = document.getElementById("player");
    var opponent = document.getElementById("opponent");
    var result = document.getElementById("result");
    var pop_up = document.getElementsByClassName("results-pop-up")[0];

    if(rps) {
        if (opponent && shot) {
            const response = await fetch(`/app/rps/play/${shot}`);
            const data = await response.json();

            player.innerHTML = `Player: ${data.player}.`
            opponent.innerHTML = `Opponent: ${data.opponent}.`
            result.innerHTML = `Result: ${data.result}.`
            pop_up.style.display = "inline"
            console.log(data);
        } else {
            const response = await fetch(`app/rps/play`);
            const data = await response.json();
            console.log(data);
        }
    } else {
        if (opponent && shot) {
            const response = await fetch(`app/rpsls/play/${shot}`);
            const data = await response.json();
            console.log(data);
        } else {
            const response = await fetch(`app/rpsls/play`)
            const data = await response.json();
            console.log(data);
        }
    }
}

// This function shows and hides the shot selection in the interface based 
// on whether or not the #opponent checkbox is checked

        // Here you should include code that uses the DOM API or jQuery to 
        // manipulate another block of HTML in the interface to display the 
        // results in some way. 