// HANDLEBARS HELPERS

Handlebars.registerHelper('listLength', function () {
  return this.todoItems.length;
});

Handlebars.registerHelper('returnCorrectImgTag', function () {
  if (this.listInfo.title === 'All Todos') {
    return '<img src="images/list-icon.png" alt="List Icon">';
  } else if (this.listInfo.title === 'Completed') {
    return '<img src="images/completed-icon.png" alt="Completed List Icon">';
  }
});

Handlebars.registerHelper('completedClass', function () {
  if (this.listInfo.title === 'Completed') { return 'completed-todos'; }
});

// APPLICATION

App = {
  templates: JST,
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  createCollection: function () {
    this.allTodoItems = new AllTodoItems();
  },

  createInitialViews: function () {
    // console.log(this.allTodoItems);
    this.navView = new NavView({ collection: this.allTodoItems });
    this.todoListView = new TodoListView({ collection: this.allTodoItems });
  },

  displayModal: function (model) {
    new ModalView({ model: model });
  },

  init: function () {
    this.createCollection();
    this.createInitialViews();
  },
}
