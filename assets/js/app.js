(function(exports){
    "use strict";
    
    var worker = new Worker('assets/js/worker.js');
    
    exports.convert = function() {
        var value = document.getElementById('convert').value;
        worker.postMessage(value);
    }

    worker.addEventListener('message', function(e) {
        document.getElementById('converted').innerHTML = e.data;
    }, false);
    
})(this);