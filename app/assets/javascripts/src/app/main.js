/**
 *  main.js
 *  This files serves as the entry point for application startup.
 *
 *  In a more sophisticated codebase, this file would setup routing and
 *  other application wide dependencies.
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Tue Jun 24 18:48:02 2014 -0400
 *
 *  Copyright (C) 2014 Tipsy Bear Studios
 *  For license information, see LICENSE.txt
 *
 *  ID: main.js [] allen.leis@gmail.com $
 */

// JS Hint directives and strict mode
/* globals define */
'use strict';

var dependencies = ['./views/main'];

define(dependencies, function(MainView){

  var obj = {

    start: function(){
      new MainView();
    }

  };

  obj.start();

});

