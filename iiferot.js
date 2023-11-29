//iife rotate
(function () {
    let a = [1, 2, 3, 4, 5, 6]
    let k = 3
    let p = 1
    while (p <= k) {
        let last = a[0]
        for (let i = 0; i < (a.length - 1); i++) {
            a[i] = a[i + 1]
        }
        a[a.length - 1] = last
        p++
    }
    console.log(a)
})()

