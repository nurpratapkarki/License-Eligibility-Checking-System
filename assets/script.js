function checkEligibility() {

    var name = document.querySelector('.name').value;
    var age = document.querySelector('.age').value;
    const resultBox = document.querySelector('.result')

    let result;

    if (age < 18) {
        result = `${name} you are not eligible for both 2 wheeler and 4 wheeler`;
    } else if (age >= 18 && age < 20) {
        result = `${name} you are eligible for 2 wheeler but not for 4 wheeler`;
    } else {
        result = `${name} you are eligible for both 2 wheeler and 4 wheeler`;
    }

    resultBox.innerText = result;

}