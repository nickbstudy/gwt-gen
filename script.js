function Randomize() {
    for (let i = 1; i < 13; i++) {
        let name = "c" + i
        let thisOne = document.getElementById(name)
        // console.log(name)
        let newRand = Math.random()
        newRand > 0.5 ? thisOne.innerHTML = "A" : thisOne.innerHTML = "B"
    }
    // alert('something')
}

function RandTrail() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    let trail = []
    for (let i = 7; i > 0; i--) {
        let choice = Math.floor(Math.random() * i)
        let chosenOne = letters[choice]
        trail.push(chosenOne)
        letters = letters.filter(item => item != chosenOne)
    }
    for (let i = 0; i <= 6; i++) {
        let digit = i + 1
        let trailTile = 't' + digit;
        document.getElementById(trailTile).innerText = trail[i]
    }
}

document.getElementById('playerTiles').addEventListener("click", Randomize);
document.getElementById('trailTiles').addEventListener("click", RandTrail);

Randomize();
RandTrail();