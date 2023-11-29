//anonymous rotate
let rot = function (x, y) {
    let p = 1
    while (p <= y) {
        let last = x[0]
        for (let i = 0; i < (x.length - 1); i++) {
            x[i] = x[i + 1]
        }
        x[x.length - 1] = last
        p++
    }
    console.log(x)
}
let a = [1, 2, 3, 4, 5, 6]
let k = 3
rot(a, k)