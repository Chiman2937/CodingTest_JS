const solution = (n) => {
    return String(n).split('').reduce((a,c) => Number(a)+Number(c), 0);
}