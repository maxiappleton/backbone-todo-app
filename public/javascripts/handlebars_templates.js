this["JST"] = this["JST"] || {};

this["JST"]["modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <option selected>"
    + container.escapeExpression(((helper = (helper = helpers.dueDay || (depth0 != null ? depth0.dueDay : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDay","hash":{},"data":data}) : helper)))
    + "</option>\n        <option value=\"\">None</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <option value=\"\" selected>Day</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <option selected>"
    + container.escapeExpression(((helper = (helper = helpers.dueMonth || (depth0 != null ? depth0.dueMonth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueMonth","hash":{},"data":data}) : helper)))
    + "</option>\n        <option value=\"\">None</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <option value=\"\" selected>Month</option>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <option selected>"
    + container.escapeExpression(((helper = (helper = helpers.dueYear || (depth0 != null ? depth0.dueYear : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueYear","hash":{},"data":data}) : helper)))
    + "</option>\n        <option value=\"\">None</option>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "        <option value=\"\" selected>Year</option>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "      <button class=\"complete\" disabled>Already Complete</button>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "      <button class=\"complete\">Mark As Complete</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-bg\"></div>\n<div class=\"modal-box\">\n  <form action=\"\" method=\"\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n    <fieldset class=\"title-input\">\n      <label for=\"title\" class=\"input-label\">Title</label>\n      <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Item 1\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    </fieldset>\n    <fieldset class=\"date-input\">\n      <legend class=\"input-label\">Due Date</legend>\n      <label for=\"day\" class=\"hidden\">Day</label>\n      <select id=\"day\" name=\"dueDay\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDay : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option>1</option>       \n        <option>2</option>       \n        <option>3</option>       \n        <option>4</option>       \n        <option>5</option>       \n        <option>6</option>       \n        <option>7</option>       \n        <option>8</option>       \n        <option>9</option>       \n        <option>10</option>       \n        <option>11</option>       \n        <option>12</option>       \n        <option>13</option>       \n        <option>14</option>       \n        <option>15</option>       \n        <option>16</option>       \n        <option>17</option>       \n        <option>18</option>       \n        <option>19</option>       \n        <option>20</option>       \n        <option>21</option>       \n        <option>22</option>       \n        <option>23</option>       \n        <option>24</option>       \n        <option>25</option>       \n        <option>26</option>       \n        <option>27</option>       \n        <option>28</option>       \n        <option>29</option>       \n        <option>30</option>       \n        <option>31</option>       \n      </select>\n      <span>/</span>\n      <label for=\"month\" class=\"hidden\">Month</label> \n      <select id=\"month\" name=\"dueMonth\"> \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueMonth : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option>January</option>       \n        <option>February</option>       \n        <option>March</option>       \n        <option>April</option>       \n        <option>May</option>       \n        <option>June</option>       \n        <option>July</option>       \n        <option>August</option>       \n        <option>September</option>       \n        <option>October</option>       \n        <option>November</option>       \n        <option>December</option>       \n      </select>\n      <span>/</span>\n      <label for=\"year\" class=\"hidden\">Year</label>\n      <select id=\"year\" name=\"dueYear\">    \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueYear : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option>2017</option>       \n        <option>2018</option>\n        <option>2019</option>       \n        <option>2020</option>\n        <option>2021</option>       \n        <option>2022</option>\n        <option>2023</option>\n        <option>2024</option>\n        <option>2025</option>\n      </select>\n    </fieldset>\n    <fieldset class=\"description-input\">\n      <h3 class=\"input-label\">Description</h3>\n      <textarea name=\"description\" placeholder=\"Description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </fieldset>\n    <fieldset class=\"form-buttons\">\n      <button class=\"save\">Save</button>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "    </fieldset>\n  </form>\n</div>";
},"useData":true});

this["JST"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"nav-list "
    + alias4(((helper = (helper = helpers.completedClass || (depth0 != null ? depth0.completedClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completedClass","hash":{},"data":data}) : helper)))
    + "\">\n  <a href=\"#\" class=\"nav-todo-list\">\n    <h2>\n      "
    + ((stack1 = ((helper = (helper = helpers.returnCorrectImgTag || (depth0 != null ? depth0.returnCorrectImgTag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"returnCorrectImgTag","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n      <span class=\"nav-header list-title\" data-listtype=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.listInfo : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.listInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n      <span class=\"todo-number\">"
    + alias4(((helper = (helper = helpers.listLength || (depth0 != null ? depth0.listLength : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listLength","hash":{},"data":data}) : helper)))
    + "</span>\n    </h2>\n  </a>\n  <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subLists : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <li>\n      <a href=\"#\" class=\"nav-todo-list\">\n        <div class=\"nav-item-content\">\n          <span class=\"date list-title\" data-listtype=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.listInfo : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.listInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n          <span class=\"todo-number\">"
    + alias2(((helper = (helper = helpers.listLength || (depth0 != null ? depth0.listLength : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"listLength","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n      </a>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.masterLists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["todolist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li class=\"todo-row\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        <span class=\"checkbox\"></span>\n        <a href=\"#\" class=\"todo-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.formattedDate || (depth0 != null ? depth0.formattedDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedDate","hash":{},"data":data}) : helper)))
    + "</a>\n      </div>\n\n      <div class=\"delete-icon\">\n        <a href=\"#\"><img src=\"images/trash-icon.png\" alt=\"Trash Can Icon\"></a>\n      </div>\n\n    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"list-item completed\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"list-item\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h1>\n  <span class=\"title\" data-listtype=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.listInfo : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.listInfo : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n  <span class=\"todo-number number-blue\">"
    + alias2(((helper = (helper = helpers.listLength || (depth0 != null ? depth0.listLength : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"listLength","hash":{},"data":data}) : helper)))
    + "</span>\n</h1>\n<ul class=\"todo-list\">\n  <li class=\"todo-row add-todo-item\">\n    <a href=\"#\">\n      <img src=\"images/add-list-icon.png\" alt=\"Add New Todo Icon\"><!--\n      --><span>Add new todo</span>\n    </a>\n  </li>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.todoItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});