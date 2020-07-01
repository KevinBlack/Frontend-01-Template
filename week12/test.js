function find(source, pattern) {
    let table = new Array(pattern.length).fill(0)

    let k = 0

    // 找到当前字符串要回到的位置
    for (let j = 1; j < pattern.length; j++) {
        if (pattern[j] === pattern[k]) {
            k++
        } else {
            k = 0
        }
        table[j] = k;
    }


    let j = 0
    for (let i = 0; i < source.length; i++) {
        console.log(source[i], pattern[j])
        if (source[i] === pattern[j]) {
            j++
        } else {
            while (source[i] !== pattern[j] && j > 0) {
                j = table[j - 1]
            }
            if (source[i] === pattern[j]) {
                j++
            } else {
                j = 0
            }
        }

        if (j === pattern.length)
            return true
    }
}
console.log(find('abcabcabx', 'abcabx')) 
