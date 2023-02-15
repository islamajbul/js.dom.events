// Option 01: Directly set on the HTML element


// Option 02: add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// option 03-1
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option 03-2
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}