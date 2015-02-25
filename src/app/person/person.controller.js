'use strict';

angular.module('questtrade')
  .controller('PersonController',['$scope', '$routeParams', '$location', 'Person',  function ($scope, $routeParams, $location, Person) {
  	$scope.$routeParams = $routeParams;
  	$scope.people = [];
  	$scope.person = {};
  	

  	$scope.getList = function(){
		if($routeParams.personId === undefined){
			Person.getList().then(function(people){
				$scope.people = people;
			});
		}else if($routeParams.personId === 'create'){
			$scope.person = {};
		}else{
			Person.get(parseInt($routeParams.personId)).then(function(person){
				$scope.person = person;
			});
		}
	};
	$scope.getList();

	$scope.save = function(person){
		 if(!$scope.personForm.$valid){
		 	return;
		 }
		 	
		if($routeParams.personId === 'create'){
			$scope.create(person);
		}else{
			$scope.edit(person);
		}
	};

	$scope.create = function(person){
		Person.create(person).then(function(person){
			$scope.people.push(person);
			$location.path('/'); 
		});
	};

	$scope.edit = function(person){
		Person.edit(person).then(function(person){
			for (var i = 0; i < $scope.people.length; i++) {
				$scope.people[i].id === person.id
				if ($scope.people[i].id === person.id) {
					$scope.people[i] = angular.copy(person);
					$location.path('/');
				}
			}
			$scope.people.push(person);
			$location.path('/');
		});
	};

	$scope.delete = function(person){
		Person.delete(person).then(function(person){
			for (var i = 0; i < $scope.people.length; i++) {
				if ($scope.people[i].id === person.id) {
					$scope.people.splice(i, 1);
				}
			}
		});
	};

  }]);
