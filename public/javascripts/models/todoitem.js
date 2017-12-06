var TodoItem = Backbone.Model.extend({
  setFormattedDate: function() {
    this.set('formattedDate', this.dueDateMonthYearFormatted());
  },

  dueDateMonthYearFormatted: function() {
    var month = this.get('dueMonth');
    var year = this.get('dueYear');

    if (month && year) {
      var monthNum = String(App.MONTHS.indexOf(month) + 1); 
      var twoDigitMonth = monthNum.padStart(2, '0');
      var twoDigitYear = year.slice(-2);
      return `${twoDigitMonth}/${twoDigitYear}`;
    } else {
      return 'No Due Date';
    }
  },

  toggleCompletion: function() {
    var completedState = this.get('completed');
    this.set('completed', !completedState);
    this.save();
  },

  initialize: function() {
    if (!this.has('completed')) {
      this.set('completed', false);
    }
    this.on('change', this.setFormattedDate);
  }
});