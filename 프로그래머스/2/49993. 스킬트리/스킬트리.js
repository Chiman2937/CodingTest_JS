function solution(skill, skill_trees) {
    let result = 0;
    for(const item of skill_trees){
        const nextString = item.split("").reduce((a,c)=>skill.indexOf(c) > -1 ? a+c : a, "");
        if (skill.indexOf(nextString) === 0) result++;
    }
    return result;
}