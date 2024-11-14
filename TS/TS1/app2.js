var ConversionDescriptior;
(function (ConversionDescriptior) {
    ConversionDescriptior[ConversionDescriptior["NUMBER"] = 0] = "NUMBER";
    ConversionDescriptior[ConversionDescriptior["TEXT"] = 1] = "TEXT";
})(ConversionDescriptior || (ConversionDescriptior = {}));
;
function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' && resultConversion === ConversionDescriptior.NUMBER) {
        result = n1 + n2; // Aqui `n1` e `n2` são do tipo `number`, então a soma direta é possível.
    }
    else {
        result = n1.toString() + n2.toString(); // Concatena `n1` e `n2` como strings.
    }
    return result;
}
function combine2() {
}
console.log(combine(5, 5, ConversionDescriptior.NUMBER));
