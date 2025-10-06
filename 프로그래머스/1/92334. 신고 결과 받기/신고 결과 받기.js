function solution(id_list, report, k) {
    const reporterMap = new Map(id_list.map((v)=>[v,[]]))
    const reportedMap = new Map(id_list.map((v)=>[v,[]]))
    for(const r of report){
        const [user,reportedUser] = r.split(' ')
        reporterMap.set(user,[...new Set([...reporterMap.get(user)]).add(reportedUser)])
        reportedMap.set(reportedUser,[...new Set([...reportedMap.get(reportedUser)]).add(user)])
    }

    // return [...reportedMap]
    // return [...reportedMap].map((v)=>[v[0], v[1].length])
    // return [...reportedMap].map(([user, reportedUsers])=>reportedUsers.reduce((a,c)=>reportedMap.get(c).length>=k ? a+1 : a,0))
    let answer = [];
    for(const reporter of [...reporterMap]){
        const [user,reportedUsers] = reporter;
        answer.push(reportedUsers.reduce((a,c)=>reportedMap.get(c).length>=k ? a+1 : a,0))
        
    }
    return answer;
}