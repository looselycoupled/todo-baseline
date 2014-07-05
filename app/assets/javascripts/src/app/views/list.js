/**
 *  list.js
 *  description
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Sat Jul 05 14:27:25 2014 -0400
 *
 *  Copyright (C) 2014 Tipsy Bear Studios
 *  For license information, see LICENSE.txt
 *
 *  ID: list.js [] allen.leis@gmail.com $
 */

// JS Hint directives and strict mode
/* globals define */
'use strict';

var dependencies = [
  'underscore',
  'backbone',
  'app/collections/todo',
  'app/views/todo'
];


define(dependencies, function(_, Backbone, TodoCollection, TodoItemView){

  var TodoListView = Backbone.View.extend({

    collection: new TodoCollection(),

    initialize: function(){
      this.collection.fetch({ reset: true });
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function(){
      var el = this.$el;
      el.empty();

      this.collection.forEach(function(model){
        var view = new TodoItemView({ model: model });
        var x = view.render().$el;
        el.append(x);
      });

      return this;
    },

  });

  return TodoListView;

});
