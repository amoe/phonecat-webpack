import angular from 'angular';
// phonecat.js -- angularjs application

// declare the application
const phonecatApplication = angular.module('phonecatApplication', []);

phonecatApplication.component('phoneList', {
    templateUrl: 'phone-list.tmpl',
    controller() {
        this.phones = [{'name': 'Motorola Timeport'}];
    }
});

function onReady(e) {
    console.log("document is ready");
}

document.addEventListener('DOMContentLoaded', onReady);
