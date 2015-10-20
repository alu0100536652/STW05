(function(exports) {
    "use strict";
    
    function Measure(value,type) {
        this.value = value || 0;
        this.type = type || "Undefined";
    }
    
    function Temperature(value,type) {
        Measure.call(this,value,type);
    }
    
    function Distance(value,type) {
        Measure.call(this,value,type);
    }
    
    function Celsius(value) {
        this.tipo = 'c';
        Temperature.call(this, value, this.type);
        this.toFarenheit = function()
        {
            return new Farenheit((this.valor * 9/5) + 32);
        }
    }
    
    function Farenheit(value) {
        this.tipo = 'f';
        Temperature.call(this, value, this.type);
        this.toCelsius = function()
        {
            return new Celsius((this.valor - 32)  * (5/9));
        }
    }
    
    exports.Measure = Measure;
    exports.Temperature = Temperature;
    exports.Celsius = Celsius;
    exports.Farenheit = Farenheit;
    exports.Distance = Distance;
    
})(this);