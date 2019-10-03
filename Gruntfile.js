module.exports = function (grunt) {
    /**
     * JIT
     */
    require('jit-grunt')(grunt, {
        cmq: 'grunt-combine-media-queries'
    });

    /**
     * Project config
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        project: {
            app: 'app',
            assets: '<%= project.app %>/assets',
            css: [
                '<%= project.assets %>/styles/source/main.scss'
            ],
            js: [
                '<%= project.assets %>/js/source/main.js'
            ],
            js_vendor: [
                //'<%= project.assets %>/js/source/vendor/jquery.js',
            ]
        },

        tag: {
            banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
                ' */\n'
        },

        sass: {
            options: {
                banner: '<%= tag.banner %>'
            },
            dev: {
                files: {
                    '<%= project.assets %>/styles/style.css': '<%= project.css %>'
                }
            },
            build: {
                files: {
                    '<%= project.assets %>/styles/style.unprefixed.css': '<%= project.css %>'
                }
            }
        },

        cmq: {
            options: {
                log: false
            },
            build: {
                files: {
                    '<%= project.assets %>/styles/style.unprefixed.css': '<%= project.assets %>/styles/style.unprefixed.css'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 8 versions', 'ie >= 8']
            },
            build: {
                src: '<%= project.assets %>/styles/style.unprefixed.css',
                dest: '<%= project.assets %>/styles/style.css'
            }
        },

        cssmin: {
            options: {
                advanced: true,
                aggressiveMerging: true,
                shorthandCompacting: false,
                roundingPrecision: -1,
                rebase: false
            },
            build: {
                files: {
                    '<%= project.assets %>/styles/style.css': '<%= project.assets %>/styles/style.css'
                }
            }
        },

        jshint: {
            files: ['<%= project.js %>'],
            options: {
                //jshintrc: '.jshintrc'
            }
        },

        uglify: {
            options: {
                banner: "<%= tag.banner %>"
            },
            build: {
                files: {
                    '<%= project.assets %>/js/vendor.js': '<%= project.js_vendor %>',
                    '<%= project.assets %>/js/main.js': '<%= project.js %>',
                }
            }
        }
    });

    /**
     * Create tasks
     */
    grunt.registerTask('build', ['sass:build', 'cmq', 'autoprefixer', 'cssmin', 'uglify']);
    //grunt.registerTask('build', ['sass:build', 'cmq', 'autoprefixer', 'cssmin', 'jshint', 'uglify']);
};