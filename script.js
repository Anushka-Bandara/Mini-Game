
let rn = Math.floor(Math.random() * 11);
console.log(rn);

let count = 0;

function clickbtn() {

    if (count != 3) {

        let number = document.getElementById("txt").value;
        console.log(number);

        if (number == rn) {
            console.log("number");
            alert("Correct Number .. You Are win..");

        }
        if (number > rn) {
            alert("Enterd number greater than Random number");

        }
        if (number < rn) {
            alert("Enterd number less than Random number");

        }
    } if (count == 3) {
        alert("Maxximum Attempt Over ..You are Lost.. Random Number Is : " + rn);
    }
    count++;

}

function clickbtn1() {

    document.getElementById("txt").value = "";
}

// function clickbtn1() {

//     let number = document.getElementById("txt").value;
//     console.log(number);
//     let x = document.getElementById("b1").value;
//     console.log(x);
//     document.getElementById('txt').value += x;
// }
// document.getElementById("txt").value=rn;