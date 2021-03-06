/**
 *  todo.js
 *  description
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Sat Jul 05 14:20:41 2014 -0400
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
  'jquery',
  'backbone',
  'app/models/todo'
];


define(dependencies, function($, Backbone, TodoModel){

  var _instance;
  var _promise;

  var TodoCollection = Backbone.Collection.extend({

    model: TodoModel,

    url: '/api/todos',

    load: function(){
      if (!_promise) {
        _promise = this.fetch({ reset: true });
      }
      return _promise;
    }

  });

  return {
    instance: function(){
      if (!_instance) {
        _instance = new TodoCollection();
      }
      return _instance;
    }
  };

});
