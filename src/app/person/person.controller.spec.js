'use strict';

describe('PersonController', function () {

    beforeEach(module('questtrade'));

    var scope, Person, controller, q, deferred;

    //Prepare the fake factory
    beforeEach(function () {
        Person = {
            people: [{ id:1,name:'bojan',phone:'4445556666', address:'nowhere' }],
            getList: function () {
                deferred = q.defer();
                // Place the fake return object here
                deferred.resolve(this.people);
                return deferred.promise;
            },
            create: function (person) {
                deferred = q.defer();
                // Place the fake return object here
                //this.people.push(person);
                deferred.resolve(person);
                return deferred.promise;
            },
            edit: function (person) {
                deferred = q.defer();
                // Place the fake return object here
                //this.people.push(person);
                deferred.resolve(person);
                return deferred.promise;
            },
            delete: function (person) {
                deferred = q.defer();
                // Place the fake return object here
                //this.people.push(person);
                deferred.resolve(person);
                return deferred.promise;
            }
        };
        spyOn(Person, 'getList').and.callThrough();
        spyOn(Person, 'create').and.callThrough();
        spyOn(Person, 'edit').and.callThrough();
        spyOn(Person, 'delete').and.callThrough();
    });

    //Inject fake factory into controller
    beforeEach(inject(function ($rootScope, $controller, $q) {
        scope = $rootScope.$new();
        q = $q;
        controller = $controller('PersonController', { $scope: scope, Person: Person });
    }));

    it('The people array is empty', function () {
        expect(scope.people.length).toBe(0);
    });

    it('Ensure that the method was invoked', function () {
        scope.$apply();
        expect(Person.getList).toHaveBeenCalled();
    });

    it('Check the value returned', function () {
        scope.$apply();
        expect(scope.people).toEqual([{ id:1,name:'bojan',phone:'4445556666', address:'nowhere' }]);
    });

    it('Add person', function () {
        scope.create({id:2,name:'hi'});
        scope.$apply();
        expect(scope.people).toEqual([{ id:1,name:'bojan',phone:'4445556666', address:'nowhere' },{id:2,name:'hi'}]);
    });

    it('Edit person', function () {
        scope.edit({id:1,name:'bob'});
        scope.$apply();
        expect(scope.people).toEqual([{id:1,name:'bob'}]);
    });

    it('Delete person', function () {
        scope.delete({id:1});
        scope.$apply();
        expect(scope.people).toEqual([]);
    });
});