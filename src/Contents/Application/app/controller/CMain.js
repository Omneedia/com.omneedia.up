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

        App.$(".load").hide();

        cordova.plugins.barcodeScanner.scan(
            function(result) {
                window.location = result.text;
            },
            function(error) {
                alert("Scanning failed: " + error);
            }
        );

    }


});