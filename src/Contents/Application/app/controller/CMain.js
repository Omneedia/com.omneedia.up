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

        function createFile() {
            var type = window.TEMPORARY;
            var size = 5 * 1024 * 1024;
            window.requestFileSystem(type, size, successCallback, errorCallback)

            function successCallback(fs) {
                fs.root.getFile('log.txt', { create: true, exclusive: true }, function(fileEntry) {
                    alert('File creation successfull!')
                }, errorCallback);
            }

            function errorCallback(error) {
                alert("ERROR: " + error.code)
            }

        };

        createFile();

        App.$(".load").hide();
        cordova.plugins.barcodeScanner.scan(
            function(result) {
                window.location.href = result.text;
            },
            function(error) {
                alert("Scanning failed: " + error);
            }
        );
    }


});