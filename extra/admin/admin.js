//----------------------------------------------------------------------------------------------------------------------
// Omega Admin Section Extra
//
// @module admin.js
//----------------------------------------------------------------------------------------------------------------------

var path = require('path');
var views = require('./views');

//----------------------------------------------------------------------------------------------------------------------

function initialize()
{
    var app = require('../../omega').app;
    var url = app.config.omegaAdminUrl || '/admin';

    app.router.add(
    {
        url: url + '/static/*',
        path: path.join(__dirname, 'client')
    },
    {
        url: url + '/models',
        get: views.models
    },
    {
        url: url,
        get: views.index
    },
    {
        url: url + '/*',
        get: views.index
    });
} // end initialize

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    initialize: initialize
}; // end exports

//----------------------------------------------------------------------------------------------------------------------