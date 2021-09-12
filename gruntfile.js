// Not used currently

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    projectFiles: ['src/litegraph.js'],
    // concat: {
    //   build: {
    //     src: '<%= projectFiles %>',
    //     dest: 'build/litegraph.js'
    //   }
    // },
    closureCompiler: {

      options: {
        compilerFile: 'node_modules/google-closure-compiler/compiler.jar',
        compilerOpts: {
          formatting: 'pretty_print',
          warning_level: 'default'
        },
        d32: false, // will use 'java -client -d32 -jar compiler.jar'
        TieredCompilation: false// will use 'java -server -XX:+TieredCompilation -jar compiler.jar',
        // ,output_wrapper: '"var LiteGraph = (function(){%output% return LiteGraph;}).call(this);"'      //* Make container for all
      },
      targetName: {
        src: '<%= projectFiles %>',
        dest: 'build/litegraph.core.min.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-closure-tools')

  grunt.registerTask('build', ['closureCompiler'])
}
