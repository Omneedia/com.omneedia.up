App.application({

    name: Settings.NAMESPACE,

    controllers: Settings.CONTROLLERS,
    viewControllers: [

    ],
    modules: Settings.MODULES,

    launch: function() {
        console.log('app has been launched.');
    }

});