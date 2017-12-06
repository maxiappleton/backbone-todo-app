var ModalView = Backbone.View.extend({
  el: $('body')[0],
  template: App.templates.modal,
  events: {
    "click .modal-bg": "hideAndRemoveModal",
    "click button.save": "clickSaveButton",
    "click button.complete": "clickCompleteButton"
  },
  modalElements: null,

  hideAndRemoveModal: function() {
    this.modalElements.fadeOut('400', function() { $(this).remove(); });
    this.undelegateEvents();
  },

  clickSaveButton: function(e) {
    e.preventDefault();
    var rawFormData = $('form').serializeArray();
    var todoDataObject = this.parseFormDataToDataObject(rawFormData);

    if (this.model) {
      this.model.save(todoDataObject);
    } else {
      App.allTodoItems.create(todoDataObject, {wait: true});
    }

    this.hideAndRemoveModal();
  },

  parseFormDataToDataObject: function(rawFormData) {
    var dataObject = {};
    rawFormData.forEach(field => {
      dataObject[field.name] = field.value;
    });
    return dataObject;
  },

  clickCompleteButton: function(e) {
    e.preventDefault();
    if (this.model) {
      this.model.toggleCompletion();
      this.hideAndRemoveModal();
    } else {
      alert('Cannot mark as complete as item has not been created yet!');
    }
  },

  render: function() {
    if (this.model) { var modelData = this.model.toJSON(); }
    this.$el.append(this.template(modelData));
    this.modalElements = $('.modal-bg, .modal-box');
    this.modalElements.fadeIn(400);
  },

  initialize: function() {
    this.render();
  }
});