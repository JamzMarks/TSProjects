"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementoSaldo = void 0;
const formatter_js_1 = require("../utils/formatter.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
const Conta_js_1 = __importDefault(require("../types/Conta.js"));
exports.elementoSaldo = document.querySelector(".saldo-valor .valor");
console.log(exports.elementoSaldo);
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = (0, formatter_js_1.formatarData)(Conta_js_1.default.getDataDeAcesso(), FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (exports.elementoSaldo != null) {
        exports.elementoSaldo.textContent = (0, formatter_js_1.formatarMoeda)(Conta_js_1.default.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
exports.default = SaldoComponent;
