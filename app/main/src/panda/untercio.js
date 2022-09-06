export function pmod(number, base) {
    if (base === 0) {
        return 0;
    }
    let tmp = number % base;
    tmp = tmp + base;
    return tmp % base;
}

export function narrow(value, min, max) {
    const diff = Math.abs(max - min);
    const mod = (value + min) % diff;
    return min + mod;
}