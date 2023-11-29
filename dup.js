//annymous duplicate
let dup = function (x) {
    let a = []
    x.forEach((n) => {
        let count = 0
        for (let i = 0; i < x.length; i++) {
            if (n === x[i]) {
                count++
            }
        }


        if (count === 1) {
            a.push(n)
        }

    });
    console.log(a)

}


let a = [1, 5, 7, 4, 1, 2, 5, 4, 8, 6,]
dup(a)