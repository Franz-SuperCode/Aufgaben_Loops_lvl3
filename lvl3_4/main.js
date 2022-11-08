// Wir haben einen input, in dem der User eine Nummer eingeben soll.
// Wir haben 2 Select-Optionen, bei denen der User eine Zahl zwischen 2 und 9 auswählen kann.
// Wir wollen jede Zahl von 0 bis zu der Zahl, die der User in das Input-Feld eingegeben hat, überprüfen.
// Wenn diese Zahl durch eine der ausgewählten Zahlen teilbar ist, soll sie zur Gesamtsumme addiert werden


let buttonElement = document.querySelector("#count");
let result = 0;
buttonElement.addEventListener("click", (event) => {
    event.preventDefault();

    let maxElement = Number(document.querySelector("#max").value);
    let firstElement = Number(document.querySelector("#first").value);
    let secondElement = Number(document.querySelector("#second").value);

    for (i = 0; i < maxElement; i++) {

        //Ist die ausgewählte Zahl durch alle diese Zahlen teilbar?
        if (i % firstElement === 0 || i % secondElement === 0) {
            result += i;
            console.log(`i: ${i} first: ${firstElement} second: ${secondElement}`);
        }
    }
    document.querySelector("#gesamtsumme").innerHTML = result;
})

// Schleife die von 0 - inputeingabe geht



// function () {

// }