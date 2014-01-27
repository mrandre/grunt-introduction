module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		concat: {
			main: {
				src: ["src/**/*.js"],
				dest: "dist/<%= pkg.name %>-<%= pkg.version %>.js"
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
};
