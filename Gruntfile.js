module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        compress: true,
        beautify: {
          ascii_only: true
        }
      },
      build: {
        files: {
          '../fhc023.github.io/stuff/school-page-hack/ems.sit.edu.cn.min.js': 'src/ems.sit.edu.cn.js',
          '../fhc023.github.io/stuff/school-page-hack/sam.sit.edu.cn.min.js': 'src/sam.sit.edu.cn.js',
          'build/include.min.js': 'src/include.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
