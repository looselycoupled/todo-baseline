/**
 *  form.js
 *  description
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Sat Jul 05 14:27:25 2014 -0400
 *
 *  Copyright (C) 2014 Tipsy Bear Studios
 *  For license information, see LICENSE.txt
 *
 *  ID: form.js [] allen.leis@gmail.com $
 */

// JS Hint directives and strict mode
/* globals define */
'use strict';

var dependencies = [
  'underscore',
  'backbone',
  'app/collections/todo'
];


define(dependencies, function(_, Backbone, TodoCollection){

  var TodoFormView = Backbone.View.extend({

    collection: TodoCollection.instance(),

    el: '#todo-form',

    initialize: function(){
    },

    render: function(){
      return this;
    },

    events: {
      'click .create': 'onCreate'
    },

    onCreate: function(evt){
      evt.preventDefault();
      this.collection.create({
        title: this.$('#input-title').val()
      });
      this.reset();
    },

    reset: function(){
      this.$('#input-title').val('');
    },

  });

  return TodoFormView;

});
