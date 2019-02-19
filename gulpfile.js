"use strict";

var gulp = require("gulp");
var lessfun = require("less-plugin-functions");
var less = require("gulp-less");
var data = require("gulp-data");
var swig = require("gulp-swig");
var clean = require("gulp-clean");
var sequence = require("gulp-sequence");
var path = require("path");
var globalJson = require("./_conf/global.json");
var autoprefixer = require("gulp-autoprefixer");

var getJsonData = function(file) {
    return extend(globalJson,require('./src/views/data/' + path.basename(file.path,".html") + '.json'));
};

gulp.task("clean", function () {
    return gulp.src("./webroot")
        .pipe(clean());
});

gulp.task("less", function () {
    return gulp.src("./src/less/main.less")
        .pipe(autoprefixer())
        .pipe(less({
            plugins:[new lessfun()]
        }))

        .pipe(gulp.dest("./webroot/css"))
});

gulp.task("swig", function () {
    return gulp.src("./src/views/*.html")
        .pipe(data(getJsonData))
        .pipe(swig())
        .pipe(gulp.dest("./webroot"))
});

gulp.task("autoprefixer", function () {
    return gulp.src("./webroot/css/main.css")
        .pipe(autoprefixer())
        .pipe(gulp.dest("./webroot/css"))
});

gulp.task("default", sequence("clean",["less","swig"],["autoprefixer"]));

function extend (object) {
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }
    return object;
};