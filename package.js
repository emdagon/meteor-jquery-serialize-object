Package.describe({
    name: 'emdagon:jquery-serialize-object',
    version: '1.0.0',
    summary: 'Provides Paul Maček (macek)\'s jQuery serializeObject method.' ,
    git: 'https://github.com/emdagon/meteor-jquery-serialize-object.git'
});

Package.onUse(function (api) {
    api.use('jquery', 'client');
    api.addFiles('jquery-serialize-object/dist/jquery.serialize-object.min.js', 'client');
});
