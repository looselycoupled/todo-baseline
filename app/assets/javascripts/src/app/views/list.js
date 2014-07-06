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
  var views = [];

  var TodoListView = Backbone.View.extend({

    collection: TodoCollection.instance(),

    initialize: function(){
      this.collection.load();
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.render);
    },

    render: function(){
      var _this = this;
      this.clear();

      this.collection.forEach(function(model){
        _this.append(model);
      });

      return this;
    },

    append: function(model){
      var view = new TodoItemView({ model: model });
      this.$el.append(view.render().$el);
      views.push(view);
      return view;
    },

    clear: function(){
      _.invoke(views, 'remove');
      views.length = 0;
      return this;
    }

  });

  return TodoListView;

});
