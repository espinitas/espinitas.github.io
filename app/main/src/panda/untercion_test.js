import { narrow } from "./untercio.js";
const tests = [() => {
    const value = narrow(3, 0, 10);
    // console.log(value);
}, () => {
    const value = narrow(10, 0, 10);
    // console.log(value);
}, () => {
    const length = 17;
    const array = [];
    const charBase = 'a'.charCodeAt(0);
    for (let i = 0; i < length; i++) {
        array.push(String.fromCharCode(charBase + i));
    }
    for (let i = 0; i < array.length; i++) {
        // console.log(array[narrow(i, 0, array.length)]);
    }
    for (let i = 0; i < array.length; i++) {
        // console.log(array[narrow(i + array.length, 0, array.length)]);
    }
}, () => {
    for (let i = 9; i < 12; i += 0.1) {
        const value = narrow(i, 0, 10);
        console.log(value);
    }
}];

tests.forEach(t => t());