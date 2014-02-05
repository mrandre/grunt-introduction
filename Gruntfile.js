module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		concat: {
			main: {
				src: ["src/**/*.js"],
				dest: "dist/<%= pkg.name %>-<%= pkg.version %>.js"
			}
		},

		uglify: {
			main: {
				src: ["<%= concat.main.dest %>"],
				dest: "dist/<%= pkg.name %>-<%= pkg.version %>.min.js" 
			}
		},

		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['build']
			}
		}

	});

	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", "build");
};
