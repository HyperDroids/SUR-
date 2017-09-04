'use strict';

angular.module('confusionApp')





        .controller('ItemsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){


        	$scope.getItems = function(){
        		$http.get('/api/items').success(function(response){
        			$scope.items = response;
        		});
        	}

        	$scope.getItem = function(){
        		var id = $routeParams.id;
        		$http.get('/api/items/'+id).success(function(response){
        			$scope.item = response;
        		});
        	}

        	$scope.addItem = function(){
        		console.log($scope.item);
        		$http.post('/api/items/', $scope.item).success(function(response){
        			window.location.href='#/items';
        		});
        	}

        	$scope.updateItem = function(){
        		var id = $routeParams.id;
        		$http.put('/api/items/'+id, $scope.item).success(function(response){
        			window.location.href='#/items';
        		});
        	}

        	$scope.removeItem = function(id){
        		$http.delete('/api/items/'+id).success(function(response){
        			window.location.href='#/items';
        		});
        	}




        }]);
