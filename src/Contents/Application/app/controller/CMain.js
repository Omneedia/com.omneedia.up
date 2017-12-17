App.controller.define('CMain', {

    views: [
        "VMain"
    ],

    models: [],

    init: function() {

        this.control({
            'VMain': {
                '.load': {
                    click: "load-click"
                }
            }
        });

        App.init('VMain');

    },
    "load-click": function(event) {
        var diont = Diont();

        // ====== 
        // Listen for announcements and renouncements in services 
        // ====== 
        diont.on("serviceAnnounced", function(serviceInfo) {
            // A service was announced 
            // This function triggers for services not yet available in diont.getServiceInfos() 
            // serviceInfo is an Object { isOurService : Boolean, service: Object } 
            // service.name, service.host and service.port are always filled 
            console.log("A new service was announced", serviceInfo.service);
            // List currently known services 
            console.log("All known services", diont.getServiceInfos());
        });

        diont.on("serviceRenounced", function(serviceInfo) {
            console.log("A service was renounced", serviceInfo.service);
            console.log("All known services", diont.getServiceInfos());
        });
        //App.$(".load").hide();
        /*cordova.plugins.barcodeScanner.scan(
            function(result) {
                window.location.href = result.text;
            },
            function(error) {
                alert("Scanning failed: " + error);
            }
        );*/
    }


});