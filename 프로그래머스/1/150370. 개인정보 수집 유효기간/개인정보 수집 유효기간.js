function solution(today, terms, privacies) {
    // return getExpireDate("2022.05.01","8")
    const termsList = Object.fromEntries(terms.map((v)=>[v.split(' ')[0],v.split(' ')[1]]))
    return privacies.map((v,i)=>getExpireDate(v.split(' ')[0], termsList[v.split(' ')[1]])<=today ? i+1 : "").filter((v)=>v!=="")
}
function getExpireDate(date,m){
    const [year,month,day] = date.split('.').map((v)=>Number(v));
    const addMonth = Number(m)
    const addYear = ~~((month + addMonth - 1)/12)
    const nextMonth = (month + addMonth - 1)%12
    return `${year+addYear}.${(nextMonth+1).toString().padStart(2,"0")}.${day.toString().padStart(2,"0")}`
}