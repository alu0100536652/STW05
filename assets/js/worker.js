(function(exports){
    "use strict";
    
    self.addEventListener('message', function(e) {
        
        importScripts('converter.js');
        
        var data      = e.data,
            result    = "",
            regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]|cm)\s*$/i,
            valor     = data.match(regexp);
            
        if(valor)
        {
            var numero = valor[1],
                tipo   = valor[2].toLowerCase();
          
            numero = parseFloat(numero);
            console.log("Worker -> Valor: " + numero + ", Tipo: " + tipo);
          
            switch (tipo) {
              case 'c':
                var celsius = new Celsius(numero);
                result = celsius.toFarenheit().toString();
                break;
              case 'f':
                var farenheit = new Farenheit(numero);
                result = farenheit.toCelsius().toString();
                break;
              default:
                var medida = new Measure(numero,tipo);
                result = medida.toString();
            }
            
            self.postMessage(result);
        } 
        else {
            self.postMessage(result);
        }
  
    }, false);
    
})(this);