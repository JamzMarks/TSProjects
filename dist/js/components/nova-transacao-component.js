"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoTransacao_js_1 = require("../types/TipoTransacao.js");
const saldo_js_1 = require("./saldo.js");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    let saldo = (0, saldo_js_1.getSaldo)();
    if (tipoTransacao == TipoTransacao_js_1.TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao_js_1.TipoTransacao.PAGAMENTO_BOLETO || tipoTransacao == TipoTransacao_js_1.TipoTransacao.TRANSFERENCIA) {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    (0, saldo_js_1.atualizarSaldo)(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
