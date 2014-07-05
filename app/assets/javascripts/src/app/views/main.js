/**
 *  main.js
 *  description
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Sat Jul 05 14:20:53 2014 -0400
 *
 *  Copyright (C) 2014 Tipsy Bear Studios
 *  For license information, see LICENSE.txt
 *
 *  ID: main.js [] allen.leis@gmail.com $
 */

// JS Hint directives and strict mode
/* globals define */
'use strict';

var dependencies = [
  'backbone',
  'app/views/list'
];


define(dependencies, function(Backbone, ListView){
  var views = [];

  var MainView = Backbone.Model.extend({

    el: '.content',

    initialize: function(){
      this.render();
    },

    render: function(){
      views.forEach(function(view){
        view.remove();
      });

      var list = new ListView({ el: '#todo-list' });
      views.push(list);
    },

  });

  return MainView;

});
