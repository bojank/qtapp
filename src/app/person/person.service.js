'use strict';

//THIS SERVICE MIMICS A ACTUAL SERVICE WITH PROMICES AND HANDLING ID's

angular.module('questtrade')
  .factory('Person', [ '$q',  function ($q) {
  	var people = [
		{
			id:1,
			name:'Bojan Kucera',
			address:'2395 Bromsgrove RD',
			phone:'4165086183'
		},
		{
			id:2,
			name:'Alex Delarge',
			address:'22 Clockwork Town',
			phone:'4169998888'
		},
		{
			id:3,
			name:'Bob Guy',
			address:'22 Clockwork Town',
			phone:'4169998888'
		}
	];

	return {
		create: function(person){
			var deferred = $q.defer();
			var maxId = 0;
			for (var i = 0; i < people.length; i++) {
				if (people[i].id > maxId) {
					maxId = people[i].id;
				}
			}
			person.id = maxId + 1;
			people.push(person);
			deferred.resolve(person);
			return deferred.promise;
		},
		edit: function(person){
			var deferred = $q.defer();
			for (var i = 0; i < people.length; i++) {
				if (people[i].id === person.id) {
					people[i] = angular.copy(person);
					deferred.resolve(person);
				}
			}
			deferred.reject();
			return deferred.promise;
		},
		delete: function(person){
			var deferred = $q.defer();
			for (var i = 0; i < people.length; i++) {
				if (people[i].id === person.id) {
					people.splice(i, 1);
					deferred.resolve(person.id);
				}
			}
			deferred.reject();
			return deferred.promise;
		},
		get: function(id){
			var deferred = $q.defer();
			for (var i = 0; i < people.length; i++) {
				if (people[i].id === id) {
					deferred.resolve(people[i]);
				}
			}
			deferred.reject();
			return deferred.promise;
		},
		getList: function(){
			var deferred = $q.defer();
			deferred.resolve(people);
			return deferred.promise;
		}
	};

  }]);
