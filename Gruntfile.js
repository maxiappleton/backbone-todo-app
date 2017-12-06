module.exports = function(grunt) {
  grunt.initConfig({
    handlebars: {
      all: {
        files: {
          "public/javascripts/handlebars_templates.js": ["handlebars/*.hbs"]
        },
        options: {
          processName: function(file) {
            return file.match(/\/(.+)\.hbs$/)[1];
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.registerTask('default', 'handlebars');
};