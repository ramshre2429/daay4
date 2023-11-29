//arrow odd numbers
let odd = (x) => {
    let b = x.length
    let c = []
    for (let i = 0; i < b; i++) {
        if (x[i] % 2 != 0 && x[i] > 1) {
            c.push(x[i])
        }
    }
    console.log(c)

}
let a = [1, 23, 36, 8, 4, 5, 79]
odd(a) 