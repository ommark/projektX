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
