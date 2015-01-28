'use strict';

module.exports = function(grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({

		// JEKYLL task config
		jekyll: {
			build: {
				dest: '_site',
				// baseurl: ''
			}
		},

		// LIBSASS task config
		sass: {
			options: {
				sourceMap: true
			},
			dev: {
				files: {
					'assets/css/styles.css': '_assets/scss/styles.scss'
				}
			}
		},

		// CONCAT JS
		concat: {
			options: {
				separator: '\n;\n',
				stripBanners: true,
				// banner: '<%= tag.banner %>'
			},
			dev: {
				files: {'_assets/coffee/scripts.js': '_assets/coffee/lib/**/*.js'}
				}
		},

		// JSHINT
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			beforeconcat: ['Gruntfile.js', '_assets/coffee/lib/**/*.js'],
			afterconcat: ['_assets/coffee/scripts.js']
		}, 
		
		// UGLIFY JS
		uglify: {
			options: {
				preserveComments: false,
			},
			dev: {
				files: {'assets/js/scripts.min.js': ['_assets/coffee/scripts.js']}
			}
		},

		// COPY
		copy: {
			img: {
				expand: true,
				cwd: '_assets/img/',
				src: '**',
				dest: 'assets/img',
				flatten: true
			},
			fonts: {
				expand: true,
				cwd: '_assets/fonts/',
				src: '**',
				dest: 'assets/fonts',
				flatten: true
			},
			vendorjs: {
				expand: true,
				cwd: '_assets/coffee/vendor/',
				src: '**',
				dest: 'assets/js/vendor',
				flatten: true
			}
		},

		// Watch task config
		watch: {
			//option: spawn: false causes an error so CSS doesn't reload
			sass: {
				files: '_assets/scss/**/*.scss',
				tasks: ['sass']
			},
			jekyll: {
				files: ['_layouts/*.html', '_includes/*.html', '_posts/*.md', 'assets/**/*.*', '*.html', '**/*.html'],
				tasks: ['jekyll']
			}
		}, //end of watch		

		// BROWSERSYNC
		browserSync: {
			files: {
				src: ['_site/assets/css/*.css', '_site/*.html', '_site/assets/js/**/*.js']
			},
			options: {
				watchTask: true,
				ghostMode: {
					clicks: true,
					scroll: true,
					links: true,
					forms: true
				},
				server: {
					baseDir: '_site'
				}
			}
		}


	}); // end of grunt.initConfig

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('time-grunt');


	grunt.registerTask('javascript', ['concat', 'uglify']);
	grunt.registerTask('build', ['sass', 'copy', 'jekyll']); //'javascript', 
	grunt.registerTask('default', ['build', 'browserSync', 'watch']);



}; // end of module.exports