//iife palindrome

(function () {
    let a = ["racecar", "car", "boat", "rar"]
    let b = []
    let c = []
    a.forEach((n) => {
        let spl = n.split("")
        let rev = spl.reverse()
        let jo = rev.join("")
        b.push(jo)
    });

    len = b.length
    for (let i = 0; i < len; i++) {
        if (a[i] === b[i]) {
            c.push(a[i])
        }
    }
    console.log(c)
})()






