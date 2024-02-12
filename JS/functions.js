
let r_num1 = 0
let r_num2 = 0
let Correct = 0
let Incorrect = 0

const RandomIntInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const RandomizeNumbers = () => {
    r_num1 = RandomIntInRange(1, 10)
    r_num2 = RandomIntInRange(1, 10)
    document.querySelector('#num1').innerHTML = r_num1
    document.querySelector('#num2').innerHTML = r_num2
}

addEventListener("DOMContentLoaded", () => {
    RandomizeNumbers()
    document.querySelector('#Correct').innerHTML = Correct
    document.querySelector('#Incorrect').innerHTML = Incorrect
});

document.querySelector('button').addEventListener('click', () => {
    const Answer = Number(document.querySelector('input').value)
    const CorrectAnswer = r_num1 + r_num2
    if (Answer === CorrectAnswer) {
        alert('Correct!')
        Correct += 1
        document.querySelector('#Correct').innerHTML = Correct
    } else {
        alert('Incorrect!')
        Incorrect += 1
        document.querySelector('#Incorrect').innerHTML = Incorrect
    }

    RandomizeNumbers()
    document.querySelector('input').value=''
})