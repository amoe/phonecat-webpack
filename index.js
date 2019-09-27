import angular from 'angular';
// phonecat.js -- angularjs application

// declare the application
const phonecatApplication = angular.module('phonecatApplication', []);

phonecatApplication.component('phoneItem', {
    bindings: {
        item: '<',
        blurb: '<'
    },
    templateUrl: 'phone-item.tmpl',
    controller() {
        this.$onChanges = function(changes) {
            console.log("changes in bound variables");
            console.log("changes were: %o", changes);

            console.log(changes.blurb.currentValue);
            console.log(changes.blurb.previousValue);
        };
    }
});

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
        this.blurb = "This space intentionally left blank";

        this.modifyBlurb = function() {
            this.blurb = "Some new blurb";
        };
    }
});

function onReady(e) {
    console.log("document is ready");
}

document.addEventListener('DOMContentLoaded', onReady);
