function solution(bridge_length, weight, truck_weights) {
	let items_count = truck_weights.length;
    let process = new Array(bridge_length).fill(0);
    let finish = [];
    let result = 0;
    let sum_weight = 0;
    while(finish.length < items_count) {
        const finished = process.shift();
        sum_weight -= finished;
        if(finished > 0) finish.push(finished);

        if(sum_weight + truck_weights[0] <= weight) {
            const item = truck_weights.shift();
            process.push(item);
            sum_weight+=item;
        } else {
            process.push(0);
        }
        result++;
    }
    return result;
}