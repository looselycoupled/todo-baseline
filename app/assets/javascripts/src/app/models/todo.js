/**
 *  todo.js
 *  description
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Sat Jul 05 14:20:28 2014 -0400
 *
 *  Copyright (C) 2014 Tipsy Bear Studios
 *  For license information, see LICENSE.txt
 *
 *  ID: todo.js [] allen.leis@gmail.com $
 */

// JS Hint directives and strict mode
/* globals define */
'use strict';

var dependencies = [
  'backbone'
];


define(dependencies, function(Backbone){

  var TodoModel = Backbone.Model.extend({

    defauls: {
      title: '',
    },

  });

  return TodoModel;

});
