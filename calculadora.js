
var operandoa;
var operandob;
var operacion;

function init(){
    
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var cos=document.getElementById('cos');
    var elevado=document.getElementById('elevado');
    var raiz=document.getElementById('raiz');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}


uno.onclick = function(){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(){
    resetear();
}
cos.onclick = function(){
    resultado.textContent = resultado.textContent  + "Cos";
}
raiz.onclick = function(){
    resultado.textContent = resultado.textContent  + "√";
}
elevado.onclick = function(){
    resultado.textContent = resultado.textContent  + "x^";
}
suma.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
cos.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "Cos";
    limpiar();
}
raiz.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "√";
    limpiar();
}
elevado.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "x^";
    limpiar();
}
igual.onclick = function(){
    operandob = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;

        case "Cos":
            res = parseFloat(operandoa) *parseFloat(3.1416);
        break;

        case "√":
            res = Math.sqrt(parseFloat(operandoa));
        break;

        case "x^":
        res = Math.pow(parseFloat(operandoa) ,parseFloat(operandob));
        break;
    }
    resetear();
    resultado.textContent = res;
  }


