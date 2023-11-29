//IIFE ODD NUMBER
(function () {
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b = x.length
    let c = []
    for (let i = 0; i < b; i++) {
        if (x[i] % 2 != 0 && x[i] > 1) {
            c.push(x[i])
        }
    }
    console.log(c)
    //const oddNumbers = arr.filter(a => a % 2 !== 0);
    //console.log(oddNumbers); // [1, 3, 5, 7, 9]
})();


