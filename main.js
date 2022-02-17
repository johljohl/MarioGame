const mario = document.getElementById("mario");


function jump () {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 250);

}
document.addEventListener("keypress", function (event) {
    jump();
}); 