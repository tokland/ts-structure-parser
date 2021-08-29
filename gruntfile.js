module.exports = function(grunt) {
    "use strict";
  
    grunt.initConfig({
      
      ts: {
        app: {
          files: [{
            src: [
              "./src/**/*.ts",
              "!./test/**"
            ],
            dest: "./dist"
          },],
          tsconfig: true,
          options: {
            declaration: true,
          },
        },

        test: {
          files: [{
            src: [
              "./test/**/*.ts", 
              "!./src/**"
            ],
            dest: "./test/dist"
          },],
          tsconfig: true
        }
      },

      clean: {
        app: ['./dist'],
        test: ['./test/dist']
      },
      
      tslint: {
        options: {
          configuration: "tslint.json"
        },
        files: {
          src: [
            "./src/\*\*/\*.ts",
            "./test/src/\*\*/\*.ts",
          ]
        }
      },

      mochaTest: {
        test: {
          options: {
            log: true,
            run: true
          },
          src: ['./test/**/*.js']
        },
      },

      copy: {
        main: {
          src: ["package.json"],
          dest: "dist/",
        },
      },

    });
  
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-copy");


    grunt.registerTask("build", [
      "clean:app", "ts:app", "tslint", "copy"
    ]);

    grunt.registerTask("test", [
      "clean:test", "ts:test",  "mochaTest"
    ]);    

  };
