App.controller.define('CMain', {

    views: [
        "VMain",
        "VMyAPP"
    ],

    models: [],

    init: function() {

        this.control({
            'VMain': {
                '.load': {
                    click: "load-click"
                }
            },
            'VMyAPP': {
                'view': {
                    show: function(me) {
                        var data = me.target.data;
                        App.$('iframe').dom().src = data.url;
                    }
                }
            }
        });

        App.init('VMain');

    },
    "load-click": function(event) {

        App.$(".load").hide();

        cordova.plugins.barcodeScanner.scan(
            function(result) {
                App.$('#Navigator').dom().pushPage('view/VMyAPP/VMyAPP.html', { animation: "lift", data: { url: result.text } });
            },
            function(error) {
                alert("Scanning failed: " + error);
            }
        );

    }


});