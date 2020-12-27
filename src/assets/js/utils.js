const charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generateId(length) {
    let id = "";
    for (let index = 0; index < length; index++) {
        id += charList[Math.floor(Math.random() * charList.length)];
    }
    return id;
}
