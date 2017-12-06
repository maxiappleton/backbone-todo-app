var AllTodoItems = Backbone.Collection.extend({
  model: TodoItem,
  url: 'http://localhost:3000/todoitems',

  createList: function(title, type, models) {
    var newList = {
      listInfo: {
        title: title,
        type: type
      },
      todoItems: _(models).sortBy(model => model.get('completed'))
    };
    this.allTodoLists.push(newList);

    return newList;
  },

  generateTodoLists: function() {
    this.allTodoLists = [];

    var newMasterLists = this.generateMasterLists();
    newMasterLists.forEach(list => {
      list.subLists = this.generateSubLists(list);
    });
    this.todoLists = { masterLists: newMasterLists };
  },

  generateMasterLists: function() {
    var allTodosList = this.createList('All Todos', 'all', this.models);
    var allCompletedTodosList = this.createList('Completed', 'completed', this.filter(model => model.get('completed')));

    return [allTodosList, allCompletedTodosList];
  },

  generateSubLists: function(list) {
   var groupedByDate = _(list.todoItems).groupBy(model => model.get('formattedDate'));
   
   var subLists = [];
   for (date in groupedByDate) {
    var newSubList = this.createList(date, list.listInfo.type, groupedByDate[date]);
    subLists.push(newSubList);
   }

   return this.sortByDate(subLists);
  },

  sortByDate: function(subListsArray) {
    return _(subListsArray).chain().sortBy(obj => {
      // Sort by month
      return obj.listInfo.title.split("/")[0];
    }).sortBy(obj => {
      // Sort by year
      return obj.listInfo.title.split("/")[1];
    }).value();
  },

  getList: function(listInfo) {
    return _(this.allTodoLists).find(list => {
      return list.listInfo.title === listInfo.title && list.listInfo.type === listInfo.type
    });
  },

  listUpdate: function() {
    this.generateTodoLists();
    this.trigger('dataUpdated');
  },

  initialize: function() {
    this.fetch();
    this.on('update change', this.listUpdate);
  }
});