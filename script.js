// Väljade kontroll

(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();



// Kaart

var mapAPIKey = "AuCOgDeVgO4-6Fc6-6ZJCh08O10BhG_e8-xa13Ci_8W4Z_qrRrgVdjUkp4gIUTi1";
var map;


function GetMap() {
    
    "use strict";

    var ourPoint = new Microsoft.Maps.Location(
            59.199557,
            24.709888
        );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: ourPoint,
        zoom: 11,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    var ourpin= new Microsoft.Maps.Pushpin(ourPoint, {
            title: 'Karulaane',
    });

    ourpin.metadata = {
            title: 'Karulaane',
            description: 'Karupesa retriidikeskus',
    };

    map.entities.push(ourpin);

}
