module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: {
            debug: {
                options: {
                    pretty: true
                },
                files: {
                    "./public/app/index.html": ["./dev/app/index.jade"]
                }
            }
        },

        stylus: {
            options: {
                compress: false
            },
            compile: {
                files: {
                    "./public/app/styles/style.css": "./dev/app/styles/style.styl"
                }
            }
        },

        jshint: {
            options: {
                ignores: ['**/backbone.js', '**/domReady.js', '**/jquery.js', '**/require.js', '**/underscore.js']
            },
            all: ['./*.js', './public/app/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['jade', 'stylus', 'jshint']);

};