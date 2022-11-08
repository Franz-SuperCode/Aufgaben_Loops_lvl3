
let arrayLoop = ["L", "p"]
let button = document.querySelector("#loop");
let output = document.querySelector("#output");

button.addEventListener("click", () => {

    let input = Number(document.querySelector("#input").value);



    // Solange die Zahl vom Input <= 2 ist, soll ein "o" eingefügt werden
    for (let i = 1; i <= input; i++) {

        arrayLoop.splice(1, 0, "o");
        if (input % 2 !== 0) {
            arrayLoop.splice(1, 1, "0");
        }


    }
    // Das Array in einen Tring umwandeln
    let arrayToString = arrayLoop.join("");
    // Den String der Methode übergeben
    write(arrayToString, input);
    //Array wieder zurücksetzen
    arrayLoop = ["L", "p"];
})

// Ins HTML den String schreiben
const write = (arrayToString, input) => {
    if (input === 0) {
        output.innerHTML = "ERROR";
        console.log("A");
    } else {
        output.innerHTML = arrayToString;
        console.log("B");
    }
}



