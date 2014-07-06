/**
 *  todo.js
 *  description
 *
 *    <li class="list-group-item">Vestibulum at eros</li>
 *
 *  Author:   Allen Leis <allen.leis@gmail.com>
 *  Created:  Sat Jul 05 14:35:35 2014 -0400
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
  'underscore',
  'backbone',
  'app/models/todo',
  'text!app/tmpl/todo-item.html'
];


define(dependencies, function(_, Backbone, TodoModel, TodoHTML){


  var TodoView = Backbone.View.extend({

    tagName: 'li',

    className: 'list-group-item',

    template: _.template(TodoHTML, null, { variable: 'data' }),

    render: function(){
      var html = this.template(this.model.attributes);
      this.$el.html(html);
      return this;
    },

    events: {
      'click .remove': 'onRemove',
    },

    onRemove: function(evt){
      evt.preventDefault();
      var _this = this;
      this.model.destroy()
        .done(function(){
          _this.remove();
        });
    },


  });

  return TodoView;

});
