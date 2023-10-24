document.addEventListener("DOMContentLoaded", function() {
    const calcResult = document.getElementById('calc-result');
    const btnPermutate = document.getElementById('btn-permutate');
    
    function calculateExpression() {
        // Obtén el valor de "n" y "k"
        const n = parseInt(document.getElementById("n").value);
        const kInput = document.getElementById("k").value;
        const kArray = kInput.split(',').map(item => parseInt(item));
      
        // Calcula el factorial de un número
        function factorial(num) {
          if (num === 0 || num === 1) {
            return 1;
          }
          return num * factorial(num - 1);
        }
      
        // Calcula el factorial de n
        const nFactorial = factorial(n);
      
        // Calcula el producto de los factoriales de k0, k1, ...
        const productOfKFactorials = kArray.reduce((acc, k) => acc * factorial(k), 1);
      
        // Calcula el resultado
        const result = nFactorial / productOfKFactorials;

        calcResult.textContent = `Permutacion con repeticion: ${result}`;
    }

    btnPermutate.addEventListener('click', function() {
        calculateExpression();
    });
});