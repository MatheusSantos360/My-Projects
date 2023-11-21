const player = document.querySelector('.player');
const spike = document.querySelector('.spike');
var score = document.getElementById('score')
scorePoint = 0

const scoreInterval = setInterval(() => {
    if (scorePoint < 1000) {scorePoint++}
    else if (scorePoint < 2000) {scorePoint += 2}
    else if (scorePoint < 3000) {scorePoint += 3}
    else if (scorePoint < 4000) {scorePoint += 6}
    else {scorePoint += 8}
    score.innerHTML = scorePoint
}, 50)

const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {
    const spikePos = spike.offsetLeft;
    const playerPos = +window.getComputedStyle(player).bottom.replace('px', '');

    if (spikePos <= 100 && playerPos < 60 && spikePos > 0 ) {
        spike.style.animation = 'none'
        spike.style.offsetRight = '${spikePos}px'
        clearInterval(scoreInterval)
        document.getElementById('finalScore').innerHTML = scorePoint
        document.getElementById('gameOver').classList.add('OnGameOver')
        document.getElementById('gameOver').style.display = 'flex'
    }

}, 10)

function restart() {
    window.location.reload()
}

document.addEventListener('keydown', jump);
document.body.addEventListener('click', jump)