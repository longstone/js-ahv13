module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
            watch: {
                scripts: {
                    files: ['./src/**/*.js'],
                    tasks: ['test','babel'],
                    options: {
                        spawn: false
                    }
                }
            },
            eslint: {
                all: ['Gruntfile.js', './src/**/*.js',],
                options: {
                    'ecmaVersion': 6
                }
            },
            babel: {
                options: {
                    sourceMap: true,
                    presets: ['@babel/preset-env', 'minify'],
                    comments: false
                },
                dist: {
                    files: {
                        './dist/index.js': './src/index.js'
                    }
                }
            },
            nyc_mocha: {
                target: {
                    src: './src/**/*.test.js',
                }
            },
            checkDependencies: {
                this: {}
            }
        }
    );
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['checkDependencies', 'babel']);
    grunt.registerTask('build', ['checkDependencies', 'babel']);
    grunt.registerTask('test', ['checkDependencies', 'babel', 'nyc_mocha:target']);

};