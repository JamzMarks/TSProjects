type Combinable = number | string;

function combine(
    n1: Combinable, 
    n2: Combinable,
) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' ) {
        result = n1 + n2; // Aqui `n1` e `n2` são do tipo `number`, então a soma direta é possível.
    } else {
        result = n1.toString() + n2.toString(); // Concatena `n1` e `n2` como strings.
    }
    
    return result;
}

function combine2(){

}

console.log(combine(5, 5);
