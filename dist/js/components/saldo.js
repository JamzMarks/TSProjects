"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarSaldo = exports.getSaldo = void 0;
const formatter_js_1 = require("../utils/formatter.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
console.log(elementoSaldo);
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formatter_js_1.formatarData)(dataAcesso, FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
function getSaldo() {
    return saldo;
}
exports.getSaldo = getSaldo;
atualizarSaldo(saldo);
function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formatter_js_1.formatarMoeda)(saldo);
    }
}
exports.atualizarSaldo = atualizarSaldo;
