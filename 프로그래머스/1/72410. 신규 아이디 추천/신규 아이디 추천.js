function solution(new_id) {
    new_id = new_id.toLowerCase();
    const regex1 = /[^a-z0-9\-\_\.]/g
    new_id = new_id.replaceAll(regex1,'')
    const regex2 = /\.+/g
    new_id = new_id.replaceAll(regex2,'.')
    new_id = new_id[0] === "." ? new_id.substring(1) : new_id
    new_id = new_id[new_id.length-1] === '.' ? new_id.substring(0,new_id.length-1) : new_id
    new_id = !new_id ? "a" : new_id
    new_id = new_id.substring(0,15)
    new_id = new_id[new_id.length-1] === '.' ? new_id.substring(0,new_id.length-1) : new_id
    new_id = new_id.length <= 2 ? new_id.padEnd(3,new_id[new_id.length-1]) : new_id
    return new_id
}