(function () {
    let a = [1, 5, 7, 4, 1, 2, 5, 4, 8, 6,]
    let b = []
    a.forEach((n) => {
        let count = 0
        for (let i = 0; i < a.length; i++) {
            if (n === a[i]) {
                count++
            }
        }


        if (count === 1) {
            b.push(n)
        }

    });
    console.log(b)

})

    ()