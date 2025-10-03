function solution(m, musicinfos) {
    let list = [];
    m = transStr(m);
    for(let i=0;i<musicinfos.length;i++){
        const info = musicinfos[i]
        const [start,end,title,str] = info.split(',')
        const nextStr = transStr(str);
        const isNextDay = getMinutes(end) < getMinutes(start)
        const playtime = (isNextDay ? getMinutes("24:00") : getMinutes(end)) - getMinutes(start)
        const repeat = ~~(playtime / nextStr.length)
        const left = nextStr.substring(0,playtime % nextStr.length)
        const matchStr = nextStr.repeat(repeat) + left
        const isCorrect = (nextStr.repeat(repeat) + left).includes(m)
        if(isCorrect) list.push([playtime+(musicinfos.length-i)/1000,title])
    }
    if(list.length === 0) return "(None)"
    return list.sort((a,b)=>a[0]-b[0] > 0 ? -1 : 1)[0][1]
}

function getMinutes (time) {
    return Number(time.split(':')[0]) * 60 + Number(time.split(":")[1])
}

function getHour (time){
    return time.split(":")[0]
}

function transStr (str){
    return str.replaceAll("C#","c")
                .replaceAll("D#","d")
                .replaceAll("F#","f")
                .replaceAll("G#","g")
                .replaceAll("A#","a")
                .replaceAll("B#",'b')
                .replaceAll("E#","e")
}

// console.log(solution("ABCDE#",["23:50,00:08,AAA,BCDE#A"]))