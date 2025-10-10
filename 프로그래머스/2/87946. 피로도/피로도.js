function solution(k, dungeons) {
    function permutate(arr,k){
        const result = [];
        if(arr.length === 0) return [[]]
        for(let i=0;i<arr.length;i++){
            const first = arr[i]
            if(k<first[0]){
                result.push([])
            }else {
                const rest = [...arr.slice(0,i),...arr.slice(i+1)]
                const restPerms = permutate(rest,k-first[1])
                for(const perm of restPerms){
                    result.push([first,...perm])
                }
            }
        }
        return result
    }
    return Math.max(...permutate(dungeons,k).map((v)=>v.length))
}