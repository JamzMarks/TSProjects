export function ValidaDebito(_, __, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("o valor a ser debitado precisa ser maior do que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Seu saldo eh insuficiente!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(_, __, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valordoDeposito) {
        if (valordoDeposito <= 0) {
            throw new Error("O valor a ser debitado deve ser maior do que zero!");
        }
        return originalMethod.apply(this, [valordoDeposito]);
    };
    return descriptor;
}
