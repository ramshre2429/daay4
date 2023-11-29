//arrow prime
let prime = (b) => {
    let c = []

    b.forEach((n) => {
        let count = 0
        for (i = 0; i <= n; i++) {
            if (n % i === 0) {
                count++
            }
        }
        if (count == 2) {
            c.push(n)
        }
    });
    console.log(c)
}

let a = [1, 55, 8, 9, 7, 6, 5, 8]
prime(a) 