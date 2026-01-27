function solution(people, limit) {
    people.sort((a,b)=>a-b).reverse();
    let i = -1;
    let j = people.length;
    let result = 0;
    while(i+1<j){
        result++;
        i++;
        if(people[i]+people[j-1] > limit) continue;
        j--;
    }
    return result;
}