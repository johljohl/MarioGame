const mario = document.getElementById("mario");
const goomba = document.getElementById("goomba");
const score = document.getElementById("score");

let mySound = new Audio ("mariojump.mp3")

let myMusic = new Audio ("theme.mp3")


function jump () {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);

}
document.addEventListener("keypress", function (event) {
    if (!mario.classList.contains("jump")) {
    jump(); mySound.play(); myMusic.play();
    }
});
    
setInterval(() => {
    score.innerText++;
    const marioTop = parseInt(window.getComputedStyle(mario)
    .getPropertyValue("top"));
    const goombaLeft = parseInt(window.getComputedStyle(goomba)
    .getPropertyValue("left"));
    
    if (goombaLeft < 0) {
        goomba.style.display = "none";
    } else {
        goomba.style.display = "";
    }   

    if ( goombaLeft < 50 && goombaLeft > 0 && marioTop > 150 ) {  
        alert("Game Over, man game over!! Your score was: " + score.innerText + "\n\nPlay Again");
        location.reload(); 
        
        
} 

}, 50);

