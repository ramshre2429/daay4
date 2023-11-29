//arrow palindrome
let palin = (x) => {
    let b = []
    let c = []
    x.forEach((n) => {
        let spl = n.split("")
        let rev = spl.reverse()
        let jo = rev.join("")
        b.push(jo)
    });

    len = b.length
    for (let i = 0; i < len; i++) {
        if (x[i] === b[i]) {
            c.push(x[i])
        }
    }
    console.log(c)
}
let a = ["racecar", "car", "boat", "rar"]
palin(a)