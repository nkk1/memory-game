
export const ColumnsCount = 3

export function RandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(rand(charactersLength));
    }
    return result;
}

export function RandomElementFromArray(arr) {
    return arr[rand(arr.length-1)]
}

export function rand(max) {
    return Math.floor(Math.random() * max)
}

export function InitLettersPuzzle() {
    const DATA = ["water", "halfords", "crawley", "cycle", "ipad", "bubbles"];
    return DATA.map(l => ({name: l, hidden: true, visited: false, id: RandomString(6)}))
}

export function IsEmptyMap(obj) {
    return Object.keys(obj).length === 0;
}