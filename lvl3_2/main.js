let numArr = [5, 22, 15, 100, 55];


function teilbar(i, number) {
    let result = i / number;
    if (i % number === 0) {
        console.log(`${i} /${number} = ${result} ohne Rest Teilbar`);
    }
}


//Für jedes Element im Array diese Schleife durchführen
numArr.forEach(number => {
    for (let i = 1; i <= 100; i++) {
        teilbar(i, number);
    }
});

