module.exports = function (grunt) {

    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/index.css': 'src/Sass/main.scss'
                }
            }
        },
        watch: {
			css: {
				files: 'src/Sass/*.scss',
				tasks: ['sass']
			}
		}
    });

    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-watch');
}