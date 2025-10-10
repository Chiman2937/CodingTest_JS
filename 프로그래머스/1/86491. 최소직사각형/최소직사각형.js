function solution(sizes) {
    sizes = sizes.map((s)=>s[0]<s[1] ? [s[1],s[0]] : [s[0],s[1]])
    const w = sizes.map((v)=>v[0])
    const h = sizes.map((v)=>v[1])
    return Math.max(...w) * Math.max(...h)
}