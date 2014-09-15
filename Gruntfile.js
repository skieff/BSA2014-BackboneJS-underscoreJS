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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['jade', 'stylus']);

};