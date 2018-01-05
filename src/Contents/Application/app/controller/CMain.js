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
                App.$('iframe').dom().src = result.text;
            },
            function(error) {
                alert("Scanning failed: " + error);
            }
        );

    }


});