import angular from 'angular';
import angularAnimate from 'angular-animate';
// phonecat.js -- angularjs application

// declare the application
const phonecatApplication = angular.module('phonecatApplication', ['ngAnimate']);

phonecatApplication.component('phoneList', {
    templateUrl: 'phone-list.tmpl',
    controller() {
        this.phones = [
            {'name': 'Motorola Timeport',
             'snippet': "Alan's current phone"},
            {'name': 'Nokia 3310',
             'snippet': "A timeless classic"},
        ];

        const $ctrl = this;

        this.add = function() {
            $ctrl.phones.push({'name': 'iphone', 'snippet': 'a stupid piece of glass'});
        };

        this.someBool = false;

        this.flip =  function() {
            $ctrl.someBool = !$ctrl.someBool;
        }
    }
});

function onReady(e) {
    console.log("document is ready");
}

document.addEventListener('DOMContentLoaded', onReady);
