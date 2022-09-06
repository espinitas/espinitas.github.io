import { FucitoAnimado } from "./fucito-animado.js";

(async () => {
    const fucitoAnimado = new FucitoAnimado();
    await fucitoAnimado.load(49);
    fucitoAnimado.draw();
})();
// console.log(fucitoAnimado);