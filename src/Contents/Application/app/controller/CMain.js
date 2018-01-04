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
                var iframe = document.createElement('iframe');
                iframe.src = result.text;
                iframe.style.position = "absolute";
                iframe.style.top = "0px";
                iframe.style.left = "0px";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = '0px solid black';
                document.getElementsByTagName('body')[0].appendChild(iframe);
                //window.location.href = result.text;
            },
            function(error) {
                alert("Scanning failed: " + error);
            }
        );
    }


});