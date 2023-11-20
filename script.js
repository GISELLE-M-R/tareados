function checkPalindrome() {
    // Obtener el valor del input
    var inputText = document.getElementById("inputText").value;

    // Eliminar espacios y convertir a minúsculas para comparación
    var cleanedInput = inputText.replace(/ /g, "").toLowerCase();

    // Comparar con la versión invertida
    var reversedInput = cleanedInput.split("").reverse().join("");

    // Mostrar el resultado
    var resultElement = document.getElementById("result");
    if (cleanedInput === reversedInput) {
        resultElement.textContent = "¡La cadena es un palíndromo!";
    } else {
        resultElement.textContent = "La cadena no es un palíndromo.";
    }
}

function compareNumbers() {
    // Obtener los valores de los inputs
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    // Verificar si los valores son válidos
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").textContent = "Por favor, ingrese números válidos.";
    } else {
        // Comparar los números y mostrar el resultado
        var resultElement = document.getElementById("result");
        if (number1 > number2) {
            resultElement.textContent = "El primer número es mayor.";
        } else if (number1 < number2) {
            resultElement.textContent = "El segundo número es mayor.";
        } else {
            resultElement.textContent = "Ambos números son iguales.";
        }
    }
}

function organizeAndShowVowels() {
    // Obtener el valor del input
    var inputPhrase = document.getElementById("inputPhrase").value;

    // Filtrar las vocales y organizarlas
    var vowels = inputPhrase.match(/[aeiou]/gi);
    if (vowels) {
        vowels.sort();
        var organizedVowels = vowels.join(', ');

        // Mostrar el resultado
        var resultElement = document.getElementById("result");
        resultElement.textContent = "Vocales organizadas: " + organizedVowels;
    } else {
        document.getElementById("result").textContent = "No se encontraron vocales en la frase.";
    }
}







