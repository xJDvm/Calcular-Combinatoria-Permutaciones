document.addEventListener("DOMContentLoaded", function() {
    const nInput = document.getElementById('n');
    const kInput = document.getElementById('k');
    const calcResult = document.getElementById('calc-result');
    const btnPermutate = document.getElementById('btn-permutate');
    
    btnPermutate.addEventListener('click', calcularPermutacionesRepetidas);
    
    function calcularPermutacionesRepetidas() {
        const n = parseInt(nInput.value);
        const k = parseInt(kInput.value);

        if (n < 0 || k < 0 || k > n) {
            calcResult.textContent = 'El valor de "k" debe ser menor al valor de "n"';
            return;
        }
        const denominador = calcularDenominador(k);
        const permutaciones = calcularPermutacionesConRepeticiones(n, k) / denominador;
        calcResult.textContent = permutaciones;
    }

    function calcularDenominador(k) {
        let denominador = 1;

        for (let i = 1; i <= k; i++) {
            denominador *= i;
        }

        return denominador;
    }

    function calcularPermutacionesConRepeticiones(n, k) {
        if (k <= 0 || n <= 0) {
            return "El valor de K y N debe ser positivo.";
        }

        let resultado = 1;

        for (let i = 0; i < k; i++) {
            resultado *= (n - i);
        }

        return resultado;
    }
});
