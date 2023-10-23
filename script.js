document.addEventListener("DOMContentLoaded", function() {
    const nInput = document.getElementById('n');
    const kInput = document.getElementById('k');
    const calcResult = document.getElementById('calc-result');


    const btnCombine = document.getElementById('btn-combine');
    const btnPermutate = document.getElementById('btn-permutate');

    btnCombine.addEventListener('click', function() {
        calcularCombinatoria();
    });

    btnPermutate.addEventListener('click', function() {
        calcularPermutaciones();
    });


    function calcularCombinatoria() {
        const n = parseInt(nInput.value);
        const k = parseInt(kInput.value);

        function factorial(num) {
            if (num === 0 || num === 1) {
                return 1;
            }
            return num * factorial(num - 1);
        }

        if (n < 0 || k < 0 || k > n) {
            calcResult.textContent = 'El valor de "k" debe ser menor al valor de "n"';
            return;
        }

        const combinatoria = factorial(n) / (factorial(k) * factorial(n - k));
        calcResult.textContent = `Combinatoria: ${combinatoria}`;
    }

    function calcularPermutaciones() {
        const n = parseInt(nInput.value);
        const k = parseInt(kInput.value);

        function factorial(num) {
            if (num === 0 || num === 1) {
                return 1;
            }
            return num * factorial(num - 1);
        }

        if (n < 0 || k < 0 || k > n) {
            calcResult.textContent = 'El valor de "k" debe ser menor al valor de "n"';
            return;
        }

        const permutaciones = factorial(n) / factorial(n - k);
        calcResult.textContent = `Permutaciones: ${permutaciones}`;
    }
});