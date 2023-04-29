$(document).ready(function() {

  var operador = "";
  var numero1 = null;
  var numero2 = null;

  $('.calculadora__tecla').click(function() {
    var tecla = $(this).text();

    if (tecla == 'AC') {
      $('.calculadora__output').text('0');
      operador = "";
      numero1 = null;
      numero2 = null;



    } else if (tecla == '+' || tecla == '-' || tecla == '×' || tecla == '÷') {
      operador = tecla;
      numero1 = parseFloat($('.calculadora__output').text());
      $('.calculadora__output').text(numero1);
    }
    
    
    else if (tecla == '=') {
      numero2 = parseFloat($('.calculadora__output').text());
      calcularResultado();
      operador = "";
      numero1 = null;
      numero2 = null;
    } else {
      if ($('.calculadora__output').text() == '0' || operador != "") {
        $('.calculadora__output').text(tecla);
      } else {
        $('.calculadora__output').append(tecla);
      }
    }
  });

  function calcularResultado() {
    var resultado = 0;

    switch (operador) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '×':
        resultado = numero1 * numero2;
        break;
      case '÷':
        resultado = numero1 / numero2;
        break;
    }

    $('.calculadora__output').text(resultado);
  }

});
