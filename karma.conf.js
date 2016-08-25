module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'public/libs/angular-local-storage/dist/angular-local-storage.js',
            'public/libs/angular-ui-router/release/angular-ui-router.js',
            'public/libs/angular-animate/angular-animate.js',
            'public/libs/angular-bootstrap/ui-bootstrap.js',
            'public/libs/angular-bootstrap/ui-bootstrap-tpls.js',
            'public/components/**/*.module.js',
            'public/components/**/*.route.js',
            'public/components/**/*.service.js',
            'public/components/**/*.ctrl.js',
            'public/components/**/*.directive.js',
            'public/components/**/*.js',
            'public/**/*.spec.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'public/components/**/*!(spec).js': ['coverage'],
            'public/js/**/*!(spec).js': ['coverage']
        }

    });
};