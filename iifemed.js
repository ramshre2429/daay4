(function () {
    let a = [1, 2, 3, 4, 5, 6]
    let b = [7, 8, 9, 6, 5, 4]
    let c = a.concat(b)
    let len = c.length
    let d = 0
    c.forEach((n) => {
        d = d + n


    });
    console.log(d / (len - 1))
})()