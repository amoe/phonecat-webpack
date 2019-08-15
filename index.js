import angular from 'angular';
import phoneListTemplate from './phone-list.tmpl.html';

// phonecat.js -- angularjs application

// declare the application
const phonecatApplication = angular.module('phonecatApplication', []);

phonecatApplication.component('phoneList', {
    template: phoneListTemplate,
    controller() {
        this.phones = [{'name': 'Motorola Timeport'}];
    }
});



function onReady(e) {
    console.log("document is ready");
}

document.addEventListener('DOMContentLoaded', onReady);
