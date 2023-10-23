document.addEventListener("DOMContentLoaded", function() {
    const nInput = document.getElementById('n');
    const calcResult = document.getElementById('calc-result');
    const btnPMCircular = document.getElementById('btn-pmcircular');

    btnPMCircular.addEventListener('click', function() {
        calcularPMCircular();
    });

    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    function calcularPMCircular () {
        const n = parseInt(nInput.value);

        if (n == 0) {
            calcResult.textContent = 'El valor de "k" debe ser menor al valor de "n"';
            return;
        }

        const pmCircular = factorial((n - 1));
        calcResult.textContent = `Permutacion circular: ${pmCircular}`;
        console.log('listo');
    }
});