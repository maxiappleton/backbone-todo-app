var TodoListView = Backbone.View.extend({
  el: $('.todo-display').get(0),
  template: App.templates.todolist,
  events: {
    "click .add-todo-item a": "clickAddTodoItem",
    "click .list-item": "clickListItem",
    "click .delete-icon": "clickDelete",
    "click .todo-title": "clickItemTitle"
  },

  clickAddTodoItem: function(e) {
    e.preventDefault();
    App.displayModal();
  },

  clickListItem: function(e) {
    e.preventDefault();
    // Prevent from executing if click event targeted on child '.todo-title'
    if ($(e.target).is('.todo-title')) { return; }
    var todoID = this.getTargetTodoID(e);
    this.collection.get(todoID).toggleCompletion();
  },

  clickDelete: function(e) {
    e.preventDefault();
    var todoID = this.getTargetTodoID(e);
    this.collection.get(todoID).destroy();
  },

  clickItemTitle: function(e) {
    e.preventDefault();
    var todoID = this.getTargetTodoID(e);
    App.displayModal(this.collection.get(todoID));
  },

  getTargetTodoID: function(event) {
    return $(event.target).parents('li.todo-row').data().id;
  },

  refreshListView: function() {
    var $infoEle = $('h1 .title');
    var currListInfo;

    if (!$infoEle.get(0)) {
      currListInfo = this.collection.allTodoLists[0].listInfo;
    } else {
      currListInfo = {
        title: $infoEle.text(),
        type: $infoEle.data().listtype
      }
    }

    this.render(currListInfo);
  },

  render: function(listInfo) {
    var list = this.collection.getList(listInfo);
    if (!list) { list = this.collection.allTodoLists[0]; }
    // Convert models to JSON
    list = JSON.parse(JSON.stringify(list));
    this.selectNavList(list.listInfo);
    this.$el.html(this.template(list));
  },

  selectNavList: function(listInfo) {
    $allListLinks = $('.nav-todo-list');
    $allListLinks.removeClass('selected');

    var $correctListLink = $allListLinks.filter((_, ele) => {
      var $listTitleElement = $(ele).find('.list-title');
      var title = $listTitleElement.text();
      var type = $listTitleElement.data().listtype;
      return (title == listInfo.title && type === listInfo.type);
    });

    $correctListLink.addClass('selected');
  },

  initialize: function() {
    this.listenTo(App.navView, 'listClick', this.render);
    this.listenTo(this.collection, 'dataUpdated', this.refreshListView);
  }
});