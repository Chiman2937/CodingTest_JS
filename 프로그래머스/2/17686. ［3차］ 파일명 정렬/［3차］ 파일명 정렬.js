function solution(files) {
    const regex = /\d+/
    return files.map((file)=>{
        const matched = file.match(regex)
        const number = matched[0].substring(0,5)
        const head = file.substring(0,matched.index)
        const tail = file.substring(head.length+number.length)
        return [head, number, tail]
    }).sort((a,b)=>{
        const a_head = a[0].toLowerCase()
        const b_head = b[0].toLowerCase()
        if(a_head !== b_head) return a_head < b_head ? -1 : 1
        const a_number = Number(a[1])
        const b_number = Number(b[1])
        if(a_number !== b_number) return a_number-b_number
        return 0
    }).map((v)=>v.join(''))
}

// console.log(solution(["muzi1.txt", "MUZI1.txt3", "muzi001.txt","muzi1.TXT1"]))