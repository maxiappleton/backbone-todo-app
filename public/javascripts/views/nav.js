var NavView = Backbone.View.extend({
  el: $('nav').get(0),
  template: App.templates.nav,

  events: {
    "click .nav-todo-list": "listClick"
  },

  listClick: function(e) {
    e.preventDefault();
    var $infoEle = $(e.currentTarget).find('span.list-title');

    var infoObj = {
      title: $infoEle.text(),
      type: $infoEle.data().listtype
    };

    this.trigger('listClick', infoObj);
  },

  render: function() {
    this.$el.html(this.template(this.collection.todoLists));
  },

  initialize: function() {
    this.listenTo(this.collection, 'dataUpdated', this.render);
  }
});