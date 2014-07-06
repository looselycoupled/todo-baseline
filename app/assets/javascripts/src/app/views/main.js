/**
 *  main.js
 *  Primary view for the todo backbone application.  Responsible for
 *  instantiating high level component views such as the todo form and
 *  todo listing.
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

// convenience array to list required modules/libraries
var dependencies = [
  'backbone',
  './list',
  './form',
];

// AMD module definition
define(dependencies, function(Backbone, ListView, FormView){

  // keep child view references as a best practice
  var views = [];

  // primary backbone view implementation
  var MainView = Backbone.View.extend({

    el: '.content',

    /**
     * Responsible for view intialization/setup.  In this case, calls
     * the render method to setup child views
     *
     * @return {undefined}
     */
    initialize: function(){
      this.render();
    },

    /**
     * Responsible for setting up (and keeping track of) child views -
     * specifically the todo form and todo listing views.
     *
     * Child view references are kept in the views array as a precaution
     * though strictly speaking there is no real benefit at this time.
     *
     * @return {[type]} [description]
     */
    render: function(){
      views.forEach(function(view){
        view.remove();
      });

      var list = new ListView({ el: '#todo-list' });
      views.push(list);

      var form = new FormView({ el: '#todo-form' });
      views.push(form);
    },

  });

  // module should return the backbone view
  return MainView;

});
