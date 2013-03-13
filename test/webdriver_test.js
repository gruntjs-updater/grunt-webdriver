/*
 * grunt-webdriver
 * https://github.com/christianbromann/grunt-webdriver
 *
 * Copyright (c) 2013 Christian Bromann
 * Licensed under the MIT license.
 */

'use strict';

var driver;

exports.name = "Simple Github Test";
exports.tests = [{
    
    name: "checks if title contains the search query",
    func: function(done) {

        var query = 'grunt-webdriver';
        exports.driver
            .click('.search a')
            .setValue('.search-page-input',query)
            .click('#search_form .button')
            .getTitle(function(title) {
                buster.assertions.assert(title.indexOf(query) !== -1);
            })
            .end(done);
        
    }}
];