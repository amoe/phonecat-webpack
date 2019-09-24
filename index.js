import angular from 'angular';
// phonecat.js -- angularjs application

// declare the application
const phonecatApplication = angular.module('phonecatApplication', []);

phonecatApplication.component('phoneList', {
    templateUrl: 'phone-list.tmpl',
    controller() {
        this.phones = [
            {'name': 'Motorola Timeport',
             'snippet': "Alan's current phone",
             'age': 20},
            {'name': 'Nokia 3310',
             'snippet': "A timeless classic",
             'age': 19},
        ];

        this.orderProp = 'age';
    }
});

function onReady(e) {
    console.log("document is ready");
}

document.addEventListener('DOMContentLoaded', onReady);
