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
                    "./public/app/index.html": ["./dev/jade/index.jade"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');

    // Default task(s).
    grunt.registerTask('default', ['jade']);

};